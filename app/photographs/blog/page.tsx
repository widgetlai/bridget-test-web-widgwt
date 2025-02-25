"use client"

import { getBlogImages } from "../../utils/images"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from 'next/image'
import React from 'react'

export default function BlogPage() {
  const blogImages = getBlogImages()
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null)
  const pathname = usePathname()

  // Reset selected image when navigating to home
  useEffect(() => {
    if (pathname === "/") {
      setSelectedImage(null)
    }
  }, [pathname])

  // Expose reset function to window
  useEffect(() => {
    // @ts-expect-error - adding custom property to window
    window.resetHomeView = () => setSelectedImage(null);
    
    return () => {
      // @ts-expect-error - cleanup of custom window property
      delete window.resetHomeView;
    };
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      {selectedImage ? (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-black hover:opacity-70"
          >
            Close
          </button>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={800}
            height={600}
            className="max-h-[90vh] w-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[10px] mb-8 -ml-4">Selected images from my blog</h1>
          <div className="grid gap-[1px] place-items-center" style={{ gridTemplateColumns: 'repeat(17, minmax(0, 62px))' }}>
            {(() => {
              const rows: React.ReactElement[] = [];
              const rowSizes = [5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5]; // Define diamond shape
              let currentImageIndex = 0;

              // Create each row of the diamond
              rowSizes.forEach((columns, rowIndex) => {
                const offset = Math.floor((17 - columns) / 5);
                
                // Create cells for this row
                for (let col = 0; col < 17; col++) {
                  if (col >= offset && col < offset + columns && currentImageIndex < blogImages.length) {
                    const image = blogImages[currentImageIndex];
                    const isNearCenter = rowIndex >= 2 && rowIndex <= 6 && col >= 3 && col <= 7;
                    
                    rows.push(
                      <div 
                        key={`${rowIndex}-${col}-${image.src}`}
                        className="relative cursor-pointer hover:opacity-70 transition-opacity"
                        style={{
                          gridColumn: `${col + 1} / span 1`,
                          gridRow: `${rowIndex + 1} / span 1`,
                        }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={isNearCenter ? 70 : 62}
                          height={isNearCenter ? 52 : 46}
                          className="object-cover w-full"
                          sizes={isNearCenter ? "70px" : "62px"}
                        />
                      </div>
                    );
                    currentImageIndex++;
                  }
                }
              });

              return rows;
            })()}
          </div>
        </div>
      )}
    </div>
  )
} 
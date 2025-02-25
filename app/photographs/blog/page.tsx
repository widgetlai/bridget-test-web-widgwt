"use client"

import { getBlogImages } from "../../utils/images"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import ImageViewer from "../../components/ImageViewer"
import Image from 'next/image'

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
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-[1px] space-y-[1px]">
          {blogImages.map((image, index) => {
            // Vary sizes more dramatically based on content type or position
            const isWide = index % 7 === 0;
            const isTall = index % 5 === 2;
            const isLarge = index % 13 === 0;
            
            const width = isLarge ? 140 : isWide ? 120 : 62;
            const height = isLarge ? 105 : isTall ? 93 : 46;
            
            return (
              <div 
                key={image.src}
                className="break-inside-avoid mb-[1px]"
              >
                <div 
                  className="group cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={width}
                    height={height}
                    className="object-cover w-full"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <p className="text-[8px] mt-0.5">{image.alt}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
} 
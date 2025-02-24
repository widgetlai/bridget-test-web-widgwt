"use client"

import Image from "next/image"
import { } from "react"

type ImageType = {
  src: string
  alt: string
}

interface ImageViewerProps {
  images: ImageType[]
  selectedImage: ImageType | null
  onClose: () => void
  onImageSelect: (image: ImageType) => void
}

export default function ImageViewer({ 
  images, 
  selectedImage, 
  onClose,
  onImageSelect 
}: ImageViewerProps) {
  if (!selectedImage) {
    return (
      <div className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => {
            // Calculate offset classes based on position
          let offsetClass = '';
          if (index < 3) { // First row
            offsetClass = index === 0 ? 'translate-y-[2%]' : 
                        index === 1 ? 'translate-y-[20%]' : 
                        'translate-y-[-10%]';
          } else if (index < 6) { // Second row
            offsetClass = index === 3 ? 'translate-y-[15%]' : 
                        index === 4 ? 'translate-y-[-5%]' : 
                        'translate-y-[25%]';
          } else { // Third row
            offsetClass = index === 6 ? 'translate-y-[-5%]' : 
                        index === 7 ? 'translate-y-[20%]' : 
                        'translate-y-[-10%]';
          }
          
          return (
            <button 
              key={image.src}
              onClick={() => onImageSelect(image)}
              className={`w-full flex justify-center ${offsetClass} max-sm:translate-y-0 max-sm:mb-2 transition-transform duration-300`}
            >
              <div className="w-52 h-40 max-sm:w-72 max-sm:h-56 relative">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          );
        })}
      </div>
      </div>
    )
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onImageSelect(images[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % images.length;
    onImageSelect(images[nextIndex]);
  };

  return (
    <div className="fixed inset-0 bg-white/80 z-40">
      {/* Top clickable area for closing */}
      <div className="h-12 w-full" onClick={onClose} />
      
      <div className="flex-1 flex flex-col justify-start items-center px-4 pt-8">
        <div onClick={(e) => e.stopPropagation()} className="max-w-[1400px] w-full">
          <div className="relative w-full px-12">
            <div className="relative w-full aspect-[3/2] max-h-[70vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <button 
                onClick={onClose}
                className="absolute top-4 -right-12 text-black text-2xl font-light hover:opacity-70 z-50 bg-white/50 w-12 h-12 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 w-8 h-8 rounded-full flex items-center justify-center text-xl hover:opacity-70 z-50"
            >
              {'<'}
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 w-8 h-8 rounded-full flex items-center justify-center text-xl hover:opacity-70 z-50"
            >
              {'>'}
            </button>
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto justify-center">
            {images
              .filter(img => img.src !== selectedImage.src)
              .map((image) => (
                <button 
                  key={image.src}
                  onClick={(e) => { e.stopPropagation(); onImageSelect(image); }}
                  className="flex-shrink-0 transition-transform duration-300"
                >
                  <div className="w-32 h-24 relative">
                    <Image 
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
} 
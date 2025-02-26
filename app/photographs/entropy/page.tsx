"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import ImageViewer from "../../components/ImageViewer"
import { getEntropyImages } from "../../utils/images"

export default function EntropyPage() {
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
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] min-w-[840px]">
      <h1 className="text-lg mb-4 font-bold">Entropy</h1>
      <p className="text-base mb-4">(2021-present)</p>
      <p className="text-xs mb-8 max-w-[50%]">The second thermodynamic law states that entropy - the degree of disorder within a system increases with time. Considering the tendency towards disorder and chaos, &ldquo;Entropy&rdquo; analyzes current labor systems under a capitalist economic framework, and the growing condition scholars name &ldquo;Capitalist Realism.&rdquo; More specifically, how the prominence of cuteness as distraction increases with the degree of chaos. &ldquo;Entropy&rdquo; is a body of photographic collage that conveys chaos within a closed setting, and an exaggerated visualization of it. The pieces depict a singular space in multiple frames collaged to expand and imagine the setting beyond reality.</p>
      <div className="mb-32">
        <ImageViewer
          images={getEntropyImages()}
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onImageSelect={setSelectedImage}
        />
      </div>
    </div>
  )
}
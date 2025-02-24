"use client"

////////////////////////////////////////////////////////////////
// This is the home/landing page                              //
// This is where images etc get called in from /public/images //
////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import ImageViewer from "./components/ImageViewer"
import { getAllImages } from "./utils/images"

export default function Home() {
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
      <ImageViewer
        images={getAllImages()}
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        onImageSelect={setSelectedImage}
      />
  )
}


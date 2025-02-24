export type ImageType = {
  src: string
  alt: string
  category?: string
}

// Function to convert filename to readable title
export const getReadableTitle = (filename: string) => {
  return filename
    .replace('.jpg', '')
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Function to get category from filename
export const getCategory = (filename: string) => {
  const filenameWithoutExtension = filename.replace('.jpg', '');
  const parts = filenameWithoutExtension.split('_');
  if (parts.length > 1) {
    return parts[parts.length - 1].toLowerCase();
  }
  return '';
}

// Function to get all images from the public/images directory
export const getImages = () => {
  // This will be populated at build time
  const images: ImageType[] = [
    { src: "/images/Backyard_portal_entropy.jpg", alt: "Backyard Portal", category: "entropy" },
    { src: "/images/Bedroom_portal_entropy.jpg", alt: "Bedroom Portal", category: "entropy" },
    { src: "/images/BedoomPortal_2_entropy.jpg", alt: "Bedroom Portal 2", category: "entropy" },
    { src: "/images/Bridget_Lai_01_entropy.jpg", alt: "Bridget Lai 01", category: "entropy" },
    { src: "/images/Bridget_Lai_02_entropy.jpg", alt: "Bridget Lai 02", category: "entropy" },
    { src: "/images/Bridget_Lai_03_entropy.jpg", alt: "Bridget Lai 03", category: "entropy" },
    { src: "/images/Bridget_Lai_04_entropy.jpg", alt: "Bridget Lai 04", category: "entropy" },
    { src: "/images/Bridget_Lai_05_entropy.jpg", alt: "Bridget Lai 05", category: "entropy" },
    { src: "/images/Bridget_Lai_06_entropy.jpg", alt: "Bridget Lai 06", category: "entropy" }
  ]
  return images
}

// Helper function to get images by category
export const getImagesByCategory = (category: string) => {
  return getImages().filter(img => img.category === category)
}

// Get all images for a specific category
export const getAllImages = () => getImages()
export const getEntropyImages = () => getImagesByCategory('entropy')
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, 
    /* by default, Next.js optimize images (during the build process) for fast loading by converting them to WebPs */
    /* i turned that off because it was making the images look low quality */
    /* it seems like it didnt really affect the loading speed, so I'd keep  'unoptimized: true' there for now */
    /* if you experience slow image loading, it might be worth turning optimization back on, or pre-encoding the images as WebPs yourself at a suitable quality and size. */
  },
  /* config options here */
};

export default nextConfig;

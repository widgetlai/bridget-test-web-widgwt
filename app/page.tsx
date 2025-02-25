"use client"

////////////////////////////////////////////////////////////////
// This is the home/landing page                              //
// This is where images etc get called in from /public/images //
////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import ImageViewer from "./components/ImageViewer"
import { getAllImages } from "./utils/images"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full flex justify-center pt-10 pb-20">
      <Image
        src="/images/homepage_wheat.jpg"
        alt="homepage wheat"
        width={600}
        height={600}
        priority
      />
    </div>
  )
}


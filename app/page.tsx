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
    <div>
      <Image
        src="/images/homepage_wheat.jpg"
        alt="homepage wheat"
        width={1000}
        height={1000}
        priority
      />
    </div>
  )
}


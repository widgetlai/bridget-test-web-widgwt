"use client"

////////////////////////////////////////////////////////////////
// This is the home/landing page                              //
// This is where images etc get called in from /public/images //
////////////////////////////////////////////////////////////////

import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-32">
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


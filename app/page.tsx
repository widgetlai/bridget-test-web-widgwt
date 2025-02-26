"use client"

////////////////////////////////////////////////////////////////
// This is the home/landing page                              //
// This is where images etc get called in from /public/images //
////////////////////////////////////////////////////////////////

import Image from 'next/image'

export default function Home() {
  return (
    <div className="mt-24 mb-24 fixed left-1/2 top-28 -translate-x-1/2 flex flex-col items-center justify-center">
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


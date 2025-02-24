"use client"

///////////////////////////////////////////////////////
// This is the navigation bar at the top of the site //
///////////////////////////////////////////////////////

import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex items-baseline justify-between max-w-[1400px] mx-auto">
      <Link 
        href="/" 
        className="text-lg hover:opacity-70" 
        scroll={false}
        replace
        onClick={() => {
          // @ts-expect-error - custom window property for resetting home view
          window.resetHomeView?.();
        }}
      >
        Bridget Lai
      </Link>
      <div className="flex gap-6 md:gap-8 text-sm">
        <Link href="/photographs" className="hover:opacity-70">
          photographs
        </Link>
        <Link href="/info" className="hover:opacity-70">
          info
        </Link>
        <Link href="/momo" className="hover:opacity-70">
          momo
        </Link>
      </div>
    </nav>
  )
}

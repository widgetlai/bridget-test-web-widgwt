"use client"

// this is the /photographs page on your site

import Link from 'next/link'

export default function PhotographsPage() {
  return (
    <div className="max-w-[1400px] mx-auto flex justify-center">
      <div className="max-w-sm p-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[120px] lg:gap-x-[230px] gap-y-20 text-xs justify-items-center">
        <Link href="/photographs/entropy" className="space-y-2 hover:opacity-70">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Entropy</p>
        </Link>

        <Link href="/photographs/blog" className="space-y-2 hover:opacity-70">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Blog</p>
        </Link>

        <Link href="/photographs/delaware" className="space-y-2 hover:opacity-70">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Delaware</p>
        </Link>

        <Link href="/photographs/2020" className="space-y-2 hover:opacity-70">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>2020</p>
        </Link>

        <Link href="/photographs/archive" className="space-y-2 hover:opacity-70">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Archive</p>
        </Link>
      </div>
    </div>
  )
} 
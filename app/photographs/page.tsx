"use client"

// this is the /photographs page on your site

import Link from 'next/link'
import Image from 'next/image'

export default function PhotographsPage() {
  return (
    <div className="max-w-[1400px] mx-auto flex justify-center">
      <div className="max-w-sm p-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[120px] lg:gap-x-[230px] gap-y-20 text-xs justify-items-center">
        <Link href="/photographs/entropy" className="space-y-1 hover:opacity-70">
          <div className="w-[140px] relative aspect-[4/3]">
            <Image
              src="/images/Bridget_Lai_03_entropy.jpg"
              alt="Entropy preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[8px]">Entropy</p>
        </Link>

        <Link href="/photographs/blog" className="space-y-1 hover:opacity-70">
          <div className="w-[140px] relative aspect-[4/3]">
            <Image
              src="/images/blog/bridget_179_blog.jpeg"
              alt="Blog preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[8px]">Blog</p>
        </Link>

        <Link href="/photographs/delaware" className="space-y-1 hover:opacity-70">
          <div className="w-[140px] relative aspect-[4/3]">
            <Image
              src="/images/delaware_preview.jpg"
              alt="Delaware preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[8px]">Delaware</p>
        </Link>

        <Link href="/photographs/2020" className="space-y-1 hover:opacity-70">
          <div className="w-[140px] relative aspect-[4/3]">
            <Image
              src="/images/2020_preview.jpg"
              alt="2020 preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[8px]">2020</p>
        </Link>

        <Link href="/photographs/archive" className="space-y-1 hover:opacity-70">
          <div className="w-[140px] relative aspect-[4/3]">
            <Image
              src="/images/archive_preview.jpg"
              alt="Archive preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[8px]">Archive</p>
        </Link>
      </div>
    </div>
  )
} 
"use client"

// this is the /photographs page on your site

import Link from 'next/link'
import Image from 'next/image'

export default function PhotographsPage() {
  return (
    <div className="container mx-auto px-4 mt-16 sm:mt-24 lg:mt-32 max-w-[840px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 auto-rows-auto">
        <Link href="/photographs/entropy" className="space-y-1 hover:opacity-70 text-center">
          <div className="w-full max-w-[300px] relative aspect-[4/3]">
            <Image
              src="/images/Bridget_Lai_03_entropy.jpg"
              alt="Entropy preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base">Entropy</p>
        </Link>

        <Link href="/photographs/blog" className="space-y-1 hover:opacity-70 text-center">
          <div className="w-full max-w-[300px] relative aspect-[4/3]">
            <Image
              src="/images/blog/bridget_179_blog.jpeg"
              alt="Blog preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base">Blog</p>
        </Link>

        <Link href="/photographs/delaware" className="space-y-1 hover:opacity-70 text-center">
          <div className="w-full max-w-[300px] relative aspect-[4/3]">
            <Image
              src="/images/delaware_preview.jpg"
              alt="Delaware preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base">Delaware</p>
        </Link>

        <Link href="/photographs/2020" className="space-y-1 hover:opacity-70 text-center">
          <div className="w-full max-w-[300px] relative aspect-[4/3]">
            <Image
              src="/images/2020_preview.jpg"
              alt="2020 preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base">2020</p>
        </Link>

        <Link href="/photographs/archive" className="space-y-1 hover:opacity-70 text-center">
          <div className="w-full max-w-[300px] relative aspect-[4/3]">
            <Image
              src="/images/archive_preview.jpg"
              alt="Archive preview"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base">Archive</p>
        </Link>
      </div>
    </div>
  )
} 
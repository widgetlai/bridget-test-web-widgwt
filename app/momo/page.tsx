"use client"

import Image from 'next/image'

export default function MomoPage() {
  return (
    <div>
      <div className="flex items-center justify-center mb-14 lg:mb-16 sm:mb-12 mt-22 lg:mt-24 sm:mt-20">
        <Image src="/images/momo/momo_01.jpg" alt="Momo" width={600} height={800} />
      </div>

      <section className="flex flex-col items-center justify-center text-xs text-light text-center">
        <p>
          Momo momo momo momo
        </p>
      
      </section>
    </div>
  )
} 
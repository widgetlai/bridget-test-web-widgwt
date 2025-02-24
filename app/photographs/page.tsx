"use client"

// this is the /photographs page on your site

export default function PhotographsPage() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="max-w-md grid grid-cols-2 md:grid-cols-3 gap-y-12 text-xs">
        <div className="space-y-2">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Entropy</p>
        </div>

        <div className="space-y-2">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>2020 Proj</p>
        </div>

        <div className="space-y-2">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Delaware</p>
        </div>

        <div className="space-y-2">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Blog</p>
        </div>

        <div className="space-y-2">
          <div className="border border-black w-[140px] h-[105px] flex items-center justify-center">
            &lt;coming soon&gt;
          </div>
          <p>Archive</p>
        </div>
      </div>
    </div>
  )
} 
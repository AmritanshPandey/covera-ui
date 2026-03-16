"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { IconStar, IconHeart, IconSparkles } from "@tabler/icons-react"

const images = [
  "/product1.webp",
  "/product2.webp",
  "/product3.webp",
]

export default function ProductCarousel() {

  const [index, setIndex] = useState(0)
  const [liked, setLiked] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!containerRef.current) return

    const scrollLeft = containerRef.current.scrollLeft
    const width = containerRef.current.offsetWidth

    setIndex(Math.round(scrollLeft / width))
  }

  return (
    <div className="relative">

      {/* IMAGE TRACK */}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >

        {images.map((img, i) => (
          <div
            key={i}
            className="relative min-w-full aspect-[3/4] snap-center"
          >

            <Image
              src={img}
              alt="Product image"
              fill
              priority
              className="object-cover"
            />

          </div>
        ))}

      </div>


      {/* BEST SELLER BADGE */}

      <div className="absolute top-4 left-4">

        <span className="flex items-center gap-1 bg-orange-100 text-orange-600 text-[11px] font-semibold px-3 py-[5px] rounded-full shadow-sm">

          <IconSparkles size={12} />

          BEST SELLER

        </span>

      </div>


      {/* WISHLIST BUTTON */}

      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-sm transition hover:scale-105 active:scale-95"
      >

        <IconHeart
          size={20}
          className={liked ? "text-red-500 fill-red-500" : "text-gray-700"}
        />

      </button>


      {/* RATING PILL */}

      <div className="absolute bottom-4 left-4">

        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-sm font-medium">

          <IconStar
            size={14}
            className="text-green-600"
            fill="currentColor"
          />

          <span className="text-gray-900">4.5</span>

          <span className="text-gray-500">(8,108)</span>

        </div>

      </div>


      {/* DOT INDICATORS */}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">

        {images.map((_, i) => (

          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${i === index
              ? "w-5 h-[6px] bg-black"
              : "w-[6px] h-[6px] bg-white/70"
              }`}
          />

        ))}

      </div>

    </div>
  )
}
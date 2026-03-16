"use client"

import Image from "next/image"
import {
  IconMenu2,
  IconSearch,
  IconHeart,
  IconShoppingBag
} from "@tabler/icons-react"

export default function Header() {

  return (
    <header className="sticky top-0 z-50">

      {/* MARQUEE STRIP */}

  <div className="bg-[#D9F06B] text-[#1E2A44] text-[13px] font-medium overflow-hidden">

  <div className="flex items-center gap-10 whitespace-nowrap min-w-max animate-marquee py-2 px-4">

    <div className="flex items-center gap-2">
      <span>What You Can Count On</span>
    </div>

    <div className="flex items-center gap-2">
      🚚
      <span>Free Shipping Across India</span>
    </div>

    <div className="flex items-center gap-2">
      🔄
      <span>Easy 7 Day Returns</span>
    </div>

    <div className="flex items-center gap-2">
      🧵
      <span>Customisation Available</span>
    </div>

    {/* duplicate for seamless loop */}

    <div className="flex items-center gap-2">
      <span>What You Can Count On</span>
    </div>

    <div className="flex items-center gap-2">
      🚚
      <span>Free Shipping Across India</span>
    </div>

    <div className="flex items-center gap-2">
      🔄
      <span>Easy 7 Day Returns</span>
    </div>

    <div className="flex items-center gap-2">
      🧵
      <span>Customisation Available</span>
    </div>

  </div>

</div>


      {/* MAIN HEADER */}

      <div className="bg-white backdrop-blur-md">

        <div className="flex items-center justify-between px-4 h-[64px]">

          {/* LEFT */}

          <div className="flex items-center gap-3">

            <button className="p-1">
              <IconMenu2 size={24} stroke={1.5}/>
            </button>

            <Image
              src="/logo.avif"
              alt="Covera"
              width={120}
              height={32}
              priority
              className="object-contain"
            />

          </div>


          {/* RIGHT */}

          <div className="flex items-center gap-5">

            <button>
              <IconSearch size={22} stroke={1.5}/>
            </button>

            <button>
              <IconHeart size={22} stroke={1.5}/>
            </button>

            <button className="relative">

              <IconShoppingBag size={22} stroke={1.5}/>

              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-semibold rounded-full w-[18px] h-[18px] flex items-center justify-center shadow-sm">
                1
              </span>

            </button>

          </div>

        </div>

      </div>

    </header>
  )
}
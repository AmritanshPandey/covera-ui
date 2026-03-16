"use client"

import { IconTag } from "@tabler/icons-react"

export default function BottomBar() {

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">

      {/* OFFER STRIP */}

      <div className="bg-[#1E2A44] text-white text-xs py-2 px-4 flex items-center justify-center gap-2">

        <IconTag size={14} stroke={2} />

        <span className="font-medium">
          Buy now at ₹1,441
        </span>

        <span className="text-white/70">
          (Offer applied at checkout)
        </span>

      </div>


      {/* CTA BAR */}

      <div className="bg-white border-t border-gray-200 px-4 pt-3 pb-4">

        <div className="flex gap-3">

          {/* ADD TO CART */}

          <button className="flex-1 border border-gray-300 rounded-xl py-3 text-sm font-medium text-[#1E2A44] hover:bg-gray-50 transition">

            Add to Cart

          </button>


          {/* BUY NOW */}

          <button className="flex-1 bg-orange-500 text-white rounded-xl py-3 text-sm font-semibold shadow-sm hover:bg-orange-600 transition">

            Buy Now

          </button>

        </div>

      </div>

    </div>
  )
}
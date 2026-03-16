"use client"

import {
  IconShare,
  IconCurrencyRupee,
  IconArrowDown,
  IconBoltFilled
} from "@tabler/icons-react"

export default function ProductInfo() {
  return (
    <div className="space-y-4">

      {/* TITLE */}

      <div className="flex justify-between items-start">

        <div className="space-y-1">

          <h1 className="text-[26px] font-semibold text-[#1E2A44] leading-tight tracking-tight">
            Pink Reef Skirt
          </h1>

          <p className="text-sm font-medium text-orange-500 tracking-wide">
            AOBA
          </p>

        </div>

        <button className="text-gray-500 hover:text-gray-800 transition">
          <IconShare size={20} stroke={1.5} />
        </button>

      </div>


      {/* PRICE BLOCK */}

      <div className="space-y-2">

        {/* META ROW */}

        <div className="flex items-center gap-3 flex-wrap">

          {/* DEAL BADGE */}

          <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[11px] font-semibold px-3 py-[5px] rounded-full shadow-sm tracking-wide">

            <IconBoltFilled size={12} stroke={2} />

            HOT DEAL

          </span>

          {/* DISCOUNT */}

          <div className="flex items-center gap-1 text-green-600 font-semibold">

            <IconArrowDown size={16} stroke={2} />

            <span className="text-[14px]">
              41% OFF
            </span>

          </div>

          {/* ORIGINAL PRICE */}

          <span className="text-gray-400 line-through text-[14px]">
            ₹3,199
          </span>

        </div>


        {/* FINAL PRICE */}

        <div className="flex items-end gap-1">

          <IconCurrencyRupee size={26} stroke={2} />

          <span className="text-[34px] font-semibold text-[#1E2A44] leading-none">
            1,899
          </span>

        </div>


        {/* TAX NOTE */}

        <p className="text-xs text-gray-500">
          MRP inclusive of all taxes
        </p>

      </div>

    </div>
  )
}
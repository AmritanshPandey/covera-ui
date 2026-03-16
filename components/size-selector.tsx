"use client"

import { useState } from "react"
import { IconRuler } from "@tabler/icons-react"

export default function SizeSelector() {

  const [size,setSize] = useState("S")

  const sizes = ["S","M","L","XL"]

  return (
    <div className="space-y-3">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <p className="text-sm font-semibold text-[#1E2A44]">
          Size
        </p>

        <button className="flex items-center gap-1 text-sm text-[#1E2A44]">

          <IconRuler size={16}/>

          <span className="underline underline-offset-4">
            Size Guide
          </span>

        </button>

      </div>


      {/* SIZE PILLS */}

      <div className="flex gap-2">

        {sizes.map((s)=>(
          <button
            key={s}
            onClick={()=>setSize(s)}
            className={`px-5 py-[6px] rounded-full text-sm font-medium border transition-all duration-200 ${
              size===s
              ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200"
              : "border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-500"
            }`}
          >
            {s}
          </button>
        ))}

      </div>

    </div>
  )
}
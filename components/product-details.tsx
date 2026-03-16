"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"

const sections = [
  {
    title: "Description",
    content: (
      <div className="space-y-6 text-[14px] text-gray-700 leading-relaxed">

        {/* PRODUCT DETAILS */}

        <div className="space-y-3">
          <h3 className="font-semibold text-[#1E2A44] tracking-tight">
            Product Details
          </h3>

          <ul className="space-y-1 list-disc ml-4 text-gray-600">
            <li>Ankle-length beach wrap skirt</li>
            <li>Playful pink reef print with blue accents</li>
            <li>Side-open styling with criss-cross tie-up</li>
            <li>Lightweight georgette fabric</li>
            <li>Quick-dry and water-friendly</li>
          </ul>
        </div>

        {/* SIZE & FIT */}

        <div className="space-y-2">
          <h3 className="font-semibold text-[#1E2A44] tracking-tight">
            Size & Fit
          </h3>

          <p>Generous sizing for versatile beach styling</p>
          <p>Dimensions: 1.5m x 1.1m</p>
        </div>

        {/* MATERIAL & CARE */}

        <div className="space-y-2">
          <h3 className="font-semibold text-[#1E2A44] tracking-tight">
            Material & Care
          </h3>

          <p>100% Georgette</p>
          <p>Hand wash recommended</p>
        </div>

        {/* SPECIFICATIONS */}

        <div className="space-y-4">
          <h3 className="font-semibold text-[#1E2A44] tracking-tight">
            Specifications
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm">

            <div className="pb-3 border-b border-gray-100">
              <p className="text-gray-400 text-[11px] uppercase tracking-wide">Length</p>
              <p className="font-medium text-[#1E2A44]">Ankle Length</p>
            </div>

            <div className="pb-3 border-b border-gray-100">
              <p className="text-gray-400 text-[11px] uppercase tracking-wide">Closure</p>
              <p className="font-medium text-[#1E2A44]">Tie-Up Wrap</p>
            </div>

            <div className="pb-3 border-b border-gray-100">
              <p className="text-gray-400 text-[11px] uppercase tracking-wide">Fabric</p>
              <p className="font-medium text-[#1E2A44]">Georgette</p>
            </div>

            <div className="pb-3 border-b border-gray-100">
              <p className="text-gray-400 text-[11px] uppercase tracking-wide">Print</p>
              <p className="font-medium text-[#1E2A44]">Pink Reef Pattern</p>
            </div>

            <div>
              <p className="text-gray-400 text-[11px] uppercase tracking-wide">Occasion</p>
              <p className="font-medium text-[#1E2A44]">Beachwear</p>
            </div>

            <div>
              <p className="text-gray-400 text-[11px] uppercase tracking-wide">Drying</p>
              <p className="font-medium text-[#1E2A44]">Quick Dry</p>
            </div>

          </div>
        </div>

      </div>
    )
  },

  {
    title: "Shipping & Return",
    content: (
      <p className="text-sm text-gray-600">
        Free shipping on all orders. Easy 7-day return and exchange available.
      </p>
    )
  },

  {
    title: "Disclaimer",
    content: (
      <p className="text-sm text-gray-600">
        Product colour may slightly vary due to lighting and screen settings.
      </p>
    )
  },

  {
    title: "Fabric Composition",
    content: (
      <p className="text-sm text-gray-600">
        Premium lightweight georgette fabric designed for quick drying and breathable comfort.
      </p>
    )
  },

  {
    title: "Wash Care",
    content: (
      <p className="text-sm text-gray-600">
        Hand wash separately in cold water. Do not bleach.
      </p>
    )
  },

  {
    title: "Seller Details",
    content: (
      <p className="text-sm text-gray-600">
        Sold and fulfilled by Covera Fashion Pvt Ltd.
      </p>
    )
  }
]

export default function ProductDetails() {

  const [open, setOpen] = useState<number | null>(0)

  const toggle = (index:number) => {
    setOpen(open === index ? null : index)
  }

  return (
    <div className="border-t border-gray-200 mt-8">

      {sections.map((section, i) => {

        const isOpen = open === i

        return (

          <div key={i} className="border-b border-gray-100">

            {/* HEADER */}

            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >

              <span className="font-medium text-[#1E2A44]">
                {section.title}
              </span>

              <IconChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {/* CONTENT */}

            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">

                <div className="pb-6 pr-2">
                  {section.content}
                </div>

              </div>
            </div>

          </div>

        )

      })}

    </div>
  )
}
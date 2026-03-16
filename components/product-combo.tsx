"use client"

import Image from "next/image"

export default function ProductCombo() {

  return (
    <section className="mt-8 space-y-4">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <h3 className="text-[16px] font-semibold text-[#1E2A44] tracking-tight">
          Complete the look
        </h3>

        <span className="text-xs font-medium text-green-600">
          Save ₹398
        </span>

      </div>


      {/* COMBO CARD */}

      <div className="rounded-2xl bg-[#EEF3F8] border border-[#E3EAF3] p-5 space-y-5">

        {/* PRODUCT ROW */}

        <div className="flex items-center justify-between">

          {/* PRODUCT */}

          <div className="flex flex-col items-center gap-1">

            <div className="relative w-[72px] h-[96px] rounded-xl overflow-hidden bg-white shadow-sm">

              <Image
                src="/product1.webp"
                alt="Main Product"
                fill
                className="object-cover"
              />

            </div>

            <span className="text-xs text-gray-600">
              ₹1,899
            </span>

          </div>


          {/* CONNECTOR */}

          <span className="text-gray-400 text-lg font-light">
            +
          </span>


          {/* PRODUCT */}

          <div className="flex flex-col items-center gap-1">

            <div className="relative w-[72px] h-[96px] rounded-xl overflow-hidden bg-white shadow-sm">

              <Image
                src="/combo1.webp"
                alt="Combo Item"
                fill
                className="object-cover"
              />

            </div>

            <span className="text-xs text-gray-600">
              ₹799
            </span>

          </div>


          <span className="text-gray-400 text-lg font-light">
            +
          </span>


          {/* PRODUCT */}

          <div className="flex flex-col items-center gap-1">

            <div className="relative w-[72px] h-[96px] rounded-xl overflow-hidden bg-white shadow-sm">

              <Image
                src="/combo2.webp"
                alt="Combo Item"
                fill
                className="object-cover"
              />

            </div>

            <span className="text-xs text-gray-600">
              ₹499
            </span>

          </div>

        </div>


        {/* PRICE ROW */}

        <div className="flex items-center justify-between pt-2">

          <div className="space-y-[2px]">

            <p className="text-xs text-gray-500">
              Combo price
            </p>

            <p className="text-[20px] font-semibold text-[#1E2A44]">
              ₹2,799
            </p>

          </div>


          {/* CTA */}

          <button className="bg-[#1E2A44] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:opacity-90 transition">

            Add Bundle

          </button>

        </div>

      </div>

    </section>
  )
}
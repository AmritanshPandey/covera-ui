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

      <div className="rounded-2xl bg-[#F7F8FA] p-4 space-y-4">

        {/* PRODUCT ROW */}

        <div className="flex items-center gap-4">

          {/* PRODUCT 1 */}

          <div className="flex flex-col items-center gap-1">

            <div className="relative w-[72px] h-[96px] rounded-xl overflow-hidden bg-gray-100">

              <Image
                src="/product1.webp"
                alt=""
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


          {/* PRODUCT 2 */}

          <div className="flex flex-col items-center gap-1">

            <div className="relative w-[72px] h-[96px] rounded-xl overflow-hidden bg-gray-100">

              <Image
                src="/combo1.webp"
                alt=""
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


          {/* PRODUCT 3 */}

          <div className="flex flex-col items-center gap-1">

            <div className="relative w-[72px] h-[96px] rounded-xl overflow-hidden bg-gray-100">

              <Image
                src="/combo2.webp"
                alt=""
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


          <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:bg-orange-600 transition">

            Add Bundle

          </button>

        </div>

      </div>

    </section>
  )
}
"use client"

import Image from "next/image"

const comboItems = [
  { src: "/product1.webp", label: "Main Product", price: "₹1,899" },
  { src: "/combo1.webp", label: "Leather Belt", price: "₹799" },
  { src: "/combo2.webp", label: "Wallet", price: "₹499" },
]

export default function ProductCombo() {
  return (
    <section className="mt-8 space-y-4">
      {/* HEADER */}
      <div className="relative px-3.5">
        <div className="flex items-center justify-between rounded-2xl bg-white/85 px-3.5 py-3 shadow-[0_14px_30px_-26px_rgba(0,0,0,0.35)] ring-1 ring-[#dfe7f5] backdrop-blur">
          <div className="leading-tight text-[#0d1933]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E2A44]">Bundle & save</p>
            <p className="text-lg font-semibold">Complete the look</p>
          </div>
          <span className="rounded-full bg-[#D9F06B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1E2A44] shadow-[0_10px_24px_-18px_rgba(0,0,0,0.35)]">
            Save ₹398
          </span>
        </div>
      </div>

      {/* COMBO CARD */}
      <div className="mx-3.5 space-y-4 rounded-3xl border border-[#dfe7f5] bg-gradient-to-br from-[#f7f9ff] via-white to-[#eef3ff] p-4 shadow-[0_20px_40px_-32px_rgba(0,0,0,0.28)]">
        {/* PRODUCT ROW */}
        <div className="flex items-center justify-between gap-3">
          {comboItems.map((item) => (
            <div key={item.src} className="flex flex-col items-center gap-1">
              <div className="relative h-24 w-20 rounded-2xl bg-white shadow-[0_12px_30px_-24px_rgba(0,0,0,0.28)]">
                <Image src={item.src} alt={item.label} fill className="object-cover rounded-2xl" />
              </div>
              <p className="text-[11px] font-medium text-[#1E2A44]">{item.label}</p>
              <span className="text-xs text-[#64748b]">{item.price}</span>
            </div>
          ))}
        </div>

        {/* SEPARATOR */}
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1E2A44]">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#cdd7ef] to-transparent" />
          Bundle bonus
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#cdd7ef] to-transparent" />
        </div>

        {/* PRICE ROW */}
        <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-[#e3ecfd]">
          <div className="space-y-[2px]">
            <p className="text-[12px] text-[#64748b]">Combo price</p>
            <p className="text-[20px] font-semibold text-[#1E2A44]">₹2,799</p>
            <p className="text-[11px] text-[#1E2A44]">You save ₹398 vs buying separately</p>
          </div>

          {/* CTA */}
          <button className="rounded-xl bg-[#1E2A44] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_-22px_rgba(0,0,0,0.35)] transition hover:translate-y-[-1px] active:scale-[0.98]">
            Add bundle
          </button>
        </div>
      </div>
    </section>
  )
}

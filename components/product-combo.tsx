"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

const MAIN_PRODUCT_IMAGE = "/product1.webp"

type ComboItem = {
  src: string
  label: string
  price: string
  locked?: boolean
}

const comboItems = [
  { src: MAIN_PRODUCT_IMAGE, label: "Signature Piece", price: "₹1,899", locked: true },
  { src: "/combo1.webp", label: "Leather Belt", price: "₹799" },
  { src: "/combo2.webp", label: "Wallet", price: "₹499" },
] satisfies ComboItem[]

const swapOptionsByTarget: Record<number, ComboItem[]> = {
  1: [
    { src: "/combo1.webp", label: "Leather Belt", price: "₹799" },
    { src: "/combo3.webp", label: "Canvas Cap", price: "₹399" },
    { src: "/combo4.webp", label: "Aviator Shades", price: "₹1,199" },
  ],
  2: [
    { src: "/combo2.webp", label: "Slim Wallet", price: "₹499" },
    { src: "/combo3.webp", label: "Canvas Cap", price: "₹399" },
    { src: "/combo4.webp", label: "Aviator Shades", price: "₹1,199" },
  ],
}

export default function ProductCombo() {
  const [items, setItems] = useState<ComboItem[]>(comboItems)
  const [swapTarget, setSwapTarget] = useState<number | null>(null)

  const comboTotal = useMemo(() => {
    const sum = items.reduce((acc, item) => acc + parseInt(item.price.replace(/[^0-9]/g, ""), 10), 0)
    return `₹${sum.toLocaleString("en-IN")}`
  }, [items])

  const activeSwapOptions = swapTarget === null ? [] : (swapOptionsByTarget[swapTarget] ?? [])

  const swapTargetLabel = swapTarget === null ? "" : (items[swapTarget]?.label ?? "add-on")

  const handleSwap = (option: ComboItem) => {
    if (swapTarget === null) return
    setItems((prev) =>
      prev.map((item, idx) => (idx === swapTarget ? option : item)),
    )
    setSwapTarget(null)
  }

  return (
    <section className="mt-8">
      {/* COMBO CARD */}
      <div className=" space-y-4 rounded-3xl border border-[#dfe7f5] bg-gradient-to-br from-[#f7f9ff] via-white to-[#eef3ff] p-4">
        {/* HEADER */}
        <div className="flex items-center justify-between px-3.5 py-3">
          <div className="leading-tight text-[#0d1933]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E2A44]">Bundle & save</p>
            <p className="text-lg font-semibold">Complete the look</p>
          </div>
          <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            Save ₹398
          </span>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4ddf2] to-transparent" />

        {/* PRODUCT ROW */}
        <div className="flex items-center justify-between gap-3">
          {items.map((item, idx) => (
            <button
              key={`${item.src}-${idx}`}
              type="button"
              onClick={() => {
                if (idx === 0 || item.locked) return
                setSwapTarget(idx)
              }}
              className={`group flex flex-col items-center gap-1 rounded-2xl ${idx === 0 || item.locked ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className={`relative h-24 w-20 overflow-hidden rounded-2xl bg-white ${idx === 0 || item.locked ? "ring-1 ring-[#1E2A44]/35" : "ring-2 ring-[#1E2A44]/80"} ${swapTarget === idx ? "ring-2 ring-[#1E2A44]" : ""}`}>
                <Image src={item.src} alt={item.label} fill className="object-cover rounded-2xl" />
                {swapTarget === idx && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1E2A44]/70 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-[2px]">
                    Tap to swap
                  </div>
                )}
              </div>
              <span className="text-xs text-[#64748b]">{item.price}</span>
            </button>
          ))}
        </div>

        {/* SEPARATOR */}
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1E2A44]">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#cdd7ef] to-transparent" />
          {swapTarget === null ? "Tap an add-on item to swap it" : `Choose a ${swapTargetLabel}`}
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#cdd7ef] to-transparent" />
        </div>

        {/* SWAP CAROUSEL (conditional) */}
        {swapTarget !== null && (
          <div>
            <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
              {activeSwapOptions.map((opt) => (
                <button
                  key={`${opt.src}-${swapTarget}`}
                  type="button"
                  onClick={() => handleSwap(opt)}
                  className="group relative w-28 shrink-0 rounded-2xl text-left transition hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <div className="relative h-28 w-full overflow-hidden rounded-2xl">
                    <Image src={opt.src} alt={opt.label} fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <p className="text-[12px] text-[#64748b]">{opt.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PRICE ROW */}
        <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-[#e3ecfd]">
          <div className="space-y-[2px]">
            <p className="text-[12px] text-[#64748b]">Combo price</p>
            <p className="text-[20px] font-semibold text-[#1E2A44]">{comboTotal}</p>
            <p className="text-[11px] text-[#1E2A44]">You save ₹398 vs buying separately</p>
          </div>

          {/* CTA */}
          <button className="rounded-xl bg-[#1E2A44] px-4 py-2.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] active:scale-[0.98]">
            Add bundle
          </button>
        </div>
      </div>
    </section>
  )
}

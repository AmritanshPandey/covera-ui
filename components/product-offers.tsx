"use client"

import { useEffect, useState } from "react"
import { IconTag, IconChevronRight, IconCreditCard, IconBrandUpwork, IconCurrencyRupee } from "@tabler/icons-react"
import { motion } from "framer-motion"

const offers = [
  {
    title: "₹500 off",
    subtitle: "Axis Bank Credit Card",
    badge: "Best offer",
    icon: <IconCreditCard size={16} />,
    bg: "bg-[#eaf0fb] text-[#1c2c4f]",
  },
  {
    title: "₹100 off",
    subtitle: "SBI Credit Card",
    icon: <IconCurrencyRupee size={16} />,
    bg: "bg-[#e8f8ef] text-[#1e3a2f]",
  },
  {
    title: "₹50 off",
    subtitle: "Paytm UPI Cashback",
    icon: <IconBrandUpwork size={16} />,
    bg: "bg-[#f3ecff] text-[#2f1d4f]",
  },
]

export default function ProductOffers() {
  const [active, setActive] = useState(0)
  const GAP = 12 // px gap between slides

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % offers.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl border border-[#d7e6fb] bg-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef4ff] via-white to-[#f9fbff] opacity-80" />

      {/* header */}
      <div className="relative px-3.5 py-3">
        <div className="leading-tight text-[#0d1933]">
          <span className="shine-badge relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#D9F06B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1E2A44] shadow-[0_10px_24px_-18px_rgba(0,0,0,0.35)]">
            Exclusive
          </span>
          <p className="mt-1.5 text-lg font-semibold">Curated offers for you</p>
        </div>
      </div>

      {/* list as carousel */}
      <div className="relative px-3.5 pb-7">
        <div className="overflow-hidden rounded-2xl py-3 px-1">
          <motion.div
            className="flex"
            style={{ columnGap: GAP }}
            animate={{ x: `calc(-${active} * (100% + ${GAP}px))` }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {offers.map((offer) => (
              <motion.button
                key={offer.title}
                type="button"
                className="group relative w-full shrink-0 basis-full rounded-2xl border border-[#dfe7f5] bg-white px-3.5 py-4 text-left"
                whileTap={{ scale: 0.985 }}
              >
                {offer.badge && (
                  <span className="absolute -top-3 left-4 rounded-md bg-emerald-600 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow">
                    {offer.badge}
                  </span>
                )}

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105 ${offer.bg ?? "bg-[#eaf0fb] text-[#1c2c4f]"}`}>
                      {offer.icon ?? <IconTag size={16} />}
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-[#0f172a] leading-tight">{offer.title}</p>
                      <p className="text-sm text-[#64748b]">{offer.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-semibold text-[#1E2A44] transition duration-300 group-hover:translate-x-1">
                    Apply
                    <IconChevronRight size={16} />
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {offers.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-4 bg-[#1E2A44]" : "w-2 bg-[#cbd8f2]"
              }`}
              aria-label={`Go to offer ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .shine-badge::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.65) 45%, transparent 60%);
        transform: translateX(-120%);
        animation: shine 2.8s ease-in-out infinite;
      }
      @keyframes shine {
        0% {
          transform: translateX(-120%);
        }
        40% {
          transform: translateX(140%);
        }
        100% {
          transform: translateX(140%);
        }
      }
    `}</style>
    </>
  )
}

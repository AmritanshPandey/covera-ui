"use client"

import { IconTag, IconChevronRight } from "@tabler/icons-react"

const offers = [
  {
    title: "₹500 off",
    subtitle: "Axis Bank Credit Card",
  },
  {
    title: "₹100 off",
    subtitle: "SBI Credit Card",
  },
  {
    title: "₹50 off",
    subtitle: "Paytm UPI Cashback",
  },
]

export default function ProductOffers() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#e6eaf0]">

      {/* HEADER */}

      <div className="bg-[#8FAED1] px-4 py-3 flex items-center justify-between">

        <div className="flex items-center gap-2 text-white font-medium">
          <IconTag size={18} />
          <span>Offers for you</span>
        </div>

      </div>


      {/* OFFER LIST */}

      <div className="bg-white p-4 space-y-4">

        {offers.map((offer,i)=>(

          <div key={i} className="relative">

            {/* BEST OFFER BADGE */}

            {i === 0 && (
              <span className="absolute -top-2 left-3 bg-orange-500 text-white text-[11px] font-semibold px-2 py-[2px] rounded-md shadow-sm">
                Best Offer
              </span>
            )}

            <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3 hover:bg-gray-50 transition">

              {/* LEFT */}

              <div className="flex items-center gap-3">

                <div className="bg-[#EEF3F8] text-[#1E2A44] p-2 rounded-lg">
                  <IconTag size={16} />
                </div>

                <div>

                  <p className="text-[#1E2A44] font-semibold text-sm">
                    {offer.title}
                  </p>

                  <p className="text-gray-500 text-xs">
                    {offer.subtitle}
                  </p>

                </div>

              </div>


              {/* APPLY */}

              <button className="flex items-center gap-1 text-sm font-medium text-[#1E2A44]">

                Apply

                <IconChevronRight size={16} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
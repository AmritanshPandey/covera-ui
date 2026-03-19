"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"

export default function WhatsAppCard() {

  return (
    <div className="rounded-2xl border border-[#E3EAF3] bg-[#F8FAFC] p-4 space-y-3">

      <div>
        <h4 className="text-[15px] font-semibold text-[#1E2A44]">
          Need help or customisation?
        </h4>

        <p className="text-sm text-gray-500">
          Chat with us for size help or styling advice
        </p>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-3 font-medium shadow-sm hover:opacity-90 transition">

        <IconBrandWhatsapp size={20} />

        Chat on WhatsApp

      </button>

    </div>
  )
}
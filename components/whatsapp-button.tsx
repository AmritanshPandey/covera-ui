"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"

export default function WhatsAppButton() {

  const phone = "919999999999" // replace
  const message = "Hi, I need help with this product"

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      className="fixed bottom-32 right-4 z-50"
    >
      <div className="relative">

        {/* GLOW */}

        <div className="absolute inset-0 bg-green-500 blur-xl opacity-30 rounded-full" />

        {/* BUTTON */}

        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 backdrop-blur-md hover:scale-105 active:scale-95 transition">

          <IconBrandWhatsapp
            size={26}
            className="text-green-600"
          />

        </div>

      </div>
    </a>
  )
}
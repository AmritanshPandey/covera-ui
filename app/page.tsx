"use client"

import Header from "@/components/header"
import ProductCarousel from "@/components/product-carousel"
import ProductInfo from "@/components/product-info"
import SizeSelector from "@/components/size-selector"
import TrustBadges from "@/components/trust-badges"
import BottomBar from "@/components/bottom-bar"
import ProductOffers from "@/components/product-offers"
import ProductDetails from "@/components/product-details"
import ProductCombo from "@/components/product-combo"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppCard from "@/components/whatsapp-card"

export default function Home() {
  return (
   <>
  <Header />

  <main className="bg-[#fafafa] min-h-screen pb-32">

    <ProductCarousel />

    <div className="px-5 space-y-7 mt-5">

      <ProductInfo />

      <SizeSelector />

      <WhatsAppCard />

      <ProductCombo />

      <ProductOffers />

      <TrustBadges />

      <ProductDetails />

    </div>

  </main>

  <BottomBar />

  {/* ✅ ADD HERE */}
  <WhatsAppButton />

</>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Steps from "@/components/Steps";
import Features from '@/components/Features'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const partnerLinks = [
  { name: 'Sprunked', href: 'https://sprunked.dev/' },
  { name: 'AIStage', href: 'https://aistage.net' },
  { name: 'MagicBox', href: 'https://magicbox.tools/' },
  { name: 'RightAI', href: 'https://right-ai.com/' },
  { name: 'ToolsFine', href: 'https://toolsfine.com' },
  { name: 'aibesttop', href: 'https://aibesttop.com' },
  { name: 'AI Findr', href: 'https://ai-findr.com' },
  { name: 'Artiverse', href: 'https://artiverse.app/ai/fluxproweb-com-image-to-prompt/' },
  { name: 'AITop10', href: 'https://aitop10.tools/' },
  { name: 'SeekAIs', href: 'https://SeekAIs.com/' },
]

export default function Partner() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Partners</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our network of trusted AI tools and services
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {partnerLinks.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                rel="nofollow"
                target="_blank"
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 p-8 text-center hover:bg-white/5"
              >
                <h3 className="text-lg font-semibold leading-8 text-white">{partner.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

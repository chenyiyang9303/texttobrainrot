'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white/10 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Text to Brainrot"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Text to Brainrot</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex gap-x-12">
          <Link href="#features" className="text-sm font-semibold leading-6 text-white hover:text-white/80">
            Features
          </Link>
          <Link href="#faq" className="text-sm font-semibold leading-6 text-white hover:text-white/80">
            FAQ
          </Link>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo.png"
                alt="Text to Brainrot"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">Text to Brainrot</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                <Link
                  href="#features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

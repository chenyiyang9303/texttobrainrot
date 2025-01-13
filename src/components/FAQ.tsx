"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Is text to brainrot free to use?",
    answer: "Yes, it is currently free to use, with no limit on the number of videos you can generate."
  },
  {
    question: "Can I download and share videos generated by text to brainrot on social media?",
    answer: "Absolutely! You’re free to download and share the videos. If you could include our link (to be determined) when posting, it would be greatly appreciated."
  },
  {
    question: "How does text to brainrot work?",
    answer: "You simply provide the text you want to transform, select your preferences, and our tool will convert your text into a video based on your chosen style."
  },
  {
    question: "Can I use pdf to brainrot?",
    answer: "Yes, you can upload a PDF file. In the future, we’ll also support tools like URL to PDF and more."
  },
  {
    question: "What makes a good brainrot video?",
    answer: "Based on our research, successful brainrot videos on TikTok share these key elements: captivating visuals, catchy audio, and engaging text content. The video should be quirky, unique, and addictive, keeping viewers hooked."
  },
  {
    question: "Who is text to brainrot best suited for?",
    answer: "This tool is perfect for TikTok creators. Brainrot-style videos are highly effective at gaining traction on TikTok, and our tool allows you to create them quickly and effortlessly."
  }
  // More questions...
]

export default function Example() {
  return (
    <div id="faq" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">FAQs about text to brainrot</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <h3 className="text-base/7 font-semibold leading-7">{faq.question}</h3>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

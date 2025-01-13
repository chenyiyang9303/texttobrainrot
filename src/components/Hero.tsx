'use client'
  
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Form from "./Form";
import { AvatarGroup } from "./ui/avatar-group";
import Link from 'next/link';

const avatars = [
  { src: "/assets/images/avatar-1.png", alt: "User 1" },
  { src: "/assets/images/avatar-2.png", alt: "User 2" },
  { src: "/assets/images/avatar-3.png", alt: "User 3" },
  { src: "/assets/images/avatar-4.png", alt: "User 4" },
  { src: "/assets/images/avatar-5.png", alt: "User 5" },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="relative min-h-screen flex flex-col pt-24">
        <div className="flex-1 flex items-center">
          <LampContainer>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="space-y-4 text-center"
            >
              <motion.h1
                className="mt-[20vh] text-white py-4 text-center text-4xl font-medium tracking-tight md:text-7xl"
              >
                Text to Brainrot Generator
              </motion.h1>
              <motion.p
                className="mx-auto max-w-2xl text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Turn Boring Content into Brainrot
              </motion.p>
            </motion.div>
            <div className="flex gap-4 mt-8 justify-center">
              <Link href="#form" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Get Started
              </Link>
              <Link href="#features" className="px-6 py-2.5 border-2 border-blue-600 hover:bg-blue-600/10 transition duration-200 rounded-lg text-blue-600 hover:text-blue-500">
                Learn More
              </Link>
            </div>
            <div className="flex flex-col items-center mt-8">
              <AvatarGroup avatars={avatars} size={48} max={5} />
              <p className="text-gray-300 mt-2 text-center">Trusted by 25,000 TikTok Creators</p>
            </div>
          </LampContainer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto max-w-7xl px-6 -mt-32 lg:-mt-48 pb-16 sm:pb-24 lg:px-8"
        >
          <div id="form" className="bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl">
            <Form />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

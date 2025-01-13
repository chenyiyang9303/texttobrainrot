"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This generator helped me create viral TikTok content that got over 1M views! The transitions and effects are perfect for keeping viewers engaged.",
    name: "Sarah Chen",
    title: "Content Creator",
  },
  {
    quote:
      "I've tried many video editors, but this one understands the TikTok format perfectly. It's like it knows exactly what makes content go viral.",
    name: "Mike Johnson",
    title: "TikTok Influencer",
  },
  {
    quote:
      "The brainrot effects are exactly what I needed for my educational content. My engagement rates have doubled since using this tool!",
    name: "Emily Zhang",
    title: "Educational Content Creator",
  },
  {
    quote:
      "Game changer for my TikTok strategy. The automated editing saves me hours and the results are always on point.",
    name: "Alex Rivera",
    title: "Social Media Manager",
  },
  {
    quote:
      "Finally, a tool that gets the TikTok aesthetic right! My content has never looked more professional and engaging.",
    name: "Jordan Lee",
    title: "Digital Creator",
  },
];

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gray-900 relative items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-white z-10">
        Loved by TikTok Creators
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
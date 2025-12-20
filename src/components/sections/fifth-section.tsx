"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FifthSection() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-20">
      <div
        data-aos="fade-up"
        className="relative h-[40rem] w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/assets/hero3.png" // Place your image in the public/images folder
            alt="Beautiful garden background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-8">
        <div className="mb-6 text-2xl text-white md:text-3xl">
          Professional Event Backdrop
        </div>
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="font-roboto flex-1/2 text-sm text-neutral-400 md:text-base">
            We provide professional backdrop solutions designed to support a
            wide range of events, from corporate gatherings and conferences to
            government programs and public initiatives. Every backdrop is
            crafted with attention to visual clarity, structural strength, and
            overall presentation.
          </div>
          <div className="font-roboto flex-1/2 text-sm text-neutral-400 md:text-base">
            Using high-quality materials and precise installation techniques,
            our backdrops are built to perform reliably in both indoor and
            outdoor environments. The result is a clean, impactful stage setting
            that enhances the message and atmosphere of every event.
          </div>
        </div>
      </div>
    </div>
  );
}

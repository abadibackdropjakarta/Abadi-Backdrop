"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainHeroSection() {
  return (
    <div>
      <div className="relative h-[52rem] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/assets/hero.png" // Place your image in the public/images folder
            alt="Beautiful garden background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Content */}
          <div className="flex h-[52rem] max-w-[32rem] flex-col justify-end gap-12 pb-[12rem]">
            <div className="">
              <div className="text-4xl font-semibold text-white md:text-5xl">
                We are ready to help with your backdrop needs.
              </div>
            </div>
            <div className="font-roboto text-base text-white/90 md:text-lg">
              M We provide 24-hour backdrop rental services because we value
              your needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

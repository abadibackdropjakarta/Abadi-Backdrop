"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ThirdSection() {
  return (
    <div>
      <div className="py-20">
        <div
          data-aos="zoom-in"
          className="mx-auto mb-20 max-w-screen-xl px-4 text-center"
        >
          <div className="mb-6 text-3xl text-yellow-200 md:mb-8 md:text-4xl">
            Showcasing Excellence Through Professional Event Backdrops
          </div>
          <div className="font-roboto text-sm text-neutral-400 md:text-base">
            Explore our professionally crafted backdrop installations for
            prestigious events. Each setup is designed with attention to detail,
            structural precision, and visual impact to support award ceremonies,
            conferences, and high-profile corporate events.
          </div>
        </div>
        <div className="">
          <div className="relative h-[44rem] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-full w-full">
              <Image
                src="/assets/hero2.png" // Place your image in the public/images folder
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
              <div className="flex h-[44rem] flex-col justify-end gap-6 pb-[6rem] md:flex-row md:items-end md:justify-between">
                <div
                  data-aos="fade-right"
                  className="flex max-w-[48rem] flex-col gap-6"
                >
                  <div className="">
                    <div className="text-3xl text-yellow-200 md:text-4xl">
                      Crafting the Perfect Stage for Prestigious Moments
                    </div>
                  </div>
                  <div className="font-roboto text-sm text-neutral-300 md:text-base">
                    From award ceremonies to corporate gatherings, we deliver
                    high-quality backdrop solutions that enhance the atmosphere
                    and leave a lasting impression.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FouthSection() {
  return (
    <section className="relative mx-auto w-full max-w-[120rem] overflow-hidden">
      {/* Background Logo Decoration */}
      <div className="pointer-events-none absolute top-24 right-24 z-0 h-[32rem] w-[32rem]">
        <Image
          src="/assets/logo.png"
          alt="Background decoration"
          fill
          className="object-contain opacity-5"
          quality={80}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 py-20">
        {/* Section Heading */}
        <div data-aos="fade-up" className="mb-12 max-w-screen-md">
          <h2 className="mb-4 text-2xl font-medium text-yellow-200 md:text-3xl">
            Explore Our Completed Backdrop Projects
          </h2>
          <p className="font-roboto text-sm text-neutral-400 md:text-base">
            Discover a curated selection of professionally crafted backdrops
            delivered for various events. Each project reflects our commitment
            to quality materials, precise construction, and flawless execution
            that elevates every event experience.
          </p>
        </div>

        {/* Content */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-16"
        >
          {/* Images */}
          <div className="flex w-full max-w-[56rem] gap-6">
            <div className="relative h-[32rem] w-full overflow-hidden rounded-xl md:h-[36rem] lg:h-[40rem]">
              <Image
                src="/assets/item4.png"
                alt="Steel frame backdrop project 1"
                fill
                priority
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
            </div>

            <div className="relative h-[32rem] w-full overflow-hidden rounded-xl md:h-[36rem] lg:h-[40rem]">
              <Image
                src="/assets/item5.png"
                alt="Steel frame backdrop project 2"
                fill
                priority
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            data-aos="fade-left"
            className="flex w-full flex-col justify-center lg:max-w-[32rem]"
          >
            <h3 className="mb-4 text-sm font-medium tracking-wide text-yellow-200 uppercase md:text-base">
              Steel Frame Backdrop
            </h3>

            <p className="font-roboto mb-4 text-sm text-neutral-400 md:text-base">
              Our backdrops use high-quality hollow steel frames at an
              affordable cost, with heights of up to 5 meters without joints.
              This construction ensures a stronger, cleaner, and more
              professional appearance, making your backdrop durable and visually
              neat even in outdoor conditions.
            </p>

            <h4 className="mb-4 text-sm font-medium tracking-wide text-yellow-200 uppercase md:text-base">
              Multiplex Frame Backdrop
            </h4>

            <p className="font-roboto mb-8 text-sm text-neutral-400 md:text-base">
              This backdrop uses a multiplex (plywood) frame, allowing fully
              customized designs tailored to your event needs. It is ideal for
              premium and detailed backdrops, with pricing starting from IDR
              350,000 per m².
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

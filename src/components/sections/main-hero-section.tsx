"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function MainHeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero">
      <div
        className="
          relative w-full overflow-hidden
          h-[100svh]
          md:h-[90vh]
          lg:h-screen
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.png"
            alt="Hero background"
            fill
            priority
            quality={90}
            className="
              object-cover
              object-[center_top]   /* mobile: fokus atas */
              md:object-center      /* desktop: center */
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="flex max-w-xl flex-col justify-end gap-6 pb-20 sm:pb-28 md:pb-36">
            <h1 className="text-3xl font-semibold leading-tight text-yellow-200 sm:text-4xl md:text-5xl">
              {t.heroTitle}
            </h1>

            <p className="font-roboto text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

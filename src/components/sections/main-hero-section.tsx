"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function MainHeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero">
      <div className="relative h-[52rem] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/assets/hero.png"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex h-[52rem] max-w-[32rem] flex-col justify-end gap-12 pb-[12rem]">
            <div className="text-4xl font-semibold text-white md:text-5xl">
              {t.heroTitle}
            </div>

            <div className="font-roboto text-base text-white/90 md:text-lg">
              {t.heroSubtitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

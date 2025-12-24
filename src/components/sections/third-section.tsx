"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ThirdSection() {
  const { t } = useLanguage();

  return (
    <section id="works">
      <div className="py-20">
        {/* TOP CONTENT */}
        <div
          data-aos="zoom-in"
          className="mx-auto mb-20 max-w-screen-xl px-4 text-center"
        >
          <h2 className="mb-6 text-3xl text-yellow-200 md:mb-8 md:text-4xl">
            {t.thirdTitle}
          </h2>
          <p className="font-roboto text-sm text-neutral-400 md:text-base">
            {t.thirdDesc}
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative h-[44rem] w-full overflow-hidden">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image
              src="/assets/hero2.png"
              alt="Event backdrop showcase"
              fill
              priority
              className="object-cover object-center"
              quality={90}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
          </div>

          <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex h-[44rem] flex-col justify-end gap-6 pb-[6rem] md:flex-row md:items-end md:justify-between">
              <div
                data-aos="fade-right"
                className="flex max-w-[48rem] flex-col gap-6"
              >
                <h3 className="text-3xl text-yellow-200 md:text-4xl">
                  {t.thirdHeroTitle}
                </h3>
                <p className="font-roboto text-sm text-neutral-300 md:text-base">
                  {t.thirdHeroDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ThirdSection() {
  const { t } = useLanguage();

  return (
    <section id="works">
      <div className="py-16 md:py-24">
        {/* TOP CONTENT */}
        <div
          data-aos="zoom-in"
          className="mx-auto mb-14 max-w-screen-xl px-4 text-center md:mb-20"
        >
          <h2 className="mb-4 text-2xl font-semibold text-yellow-200 sm:text-3xl md:mb-6 md:text-4xl">
            {t.thirdTitle}
          </h2>
          <p className="mx-auto max-w-2xl font-roboto text-sm leading-relaxed text-neutral-400 sm:text-base">
            {t.thirdDesc}
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div
          className="
            relative w-full overflow-hidden
            h-[100svh]
            md:h-[85vh]
            lg:h-[44rem]
          "
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/hero2.png"
              alt="Event backdrop showcase"
              fill
              priority
              quality={90}
              className="
                object-cover
                object-[center_top]   /* mobile */
                md:object-center      /* desktop */
              "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <div
              className="
                flex w-full flex-col justify-end gap-4
                pb-16
                sm:pb-24
                md:flex-row md:items-end md:justify-between md:pb-28
              "
            >
              <div
                data-aos="fade-right"
                className="flex max-w-xl flex-col gap-4 md:gap-6"
              >
                <h3 className="text-2xl font-semibold text-yellow-200 sm:text-3xl md:text-4xl">
                  {t.thirdHeroTitle}
                </h3>

                <p className="font-roboto text-sm leading-relaxed text-neutral-300 sm:text-base">
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

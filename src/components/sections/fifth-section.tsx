"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FifthSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="mx-auto max-w-screen-2xl px-4 py-16 md:py-20"
    >
      {/* IMAGE */}
      <div
        data-aos="fade-up"
        className="
          relative w-full overflow-hidden rounded-xl
          h-[18rem]
          sm:h-[24rem]
          md:h-[32rem]
          lg:h-[40rem]
        "
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/hero3.png"
            alt="Event backdrop showcase"
            fill
            priority
            className="
              object-cover
              object-[center_top]
              md:object-center
            "
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>
      </div>

      {/* CONTENT */}
      <div data-aos="fade-up" className="mt-6 md:mt-10">
        <h2 className="mb-4 text-xl font-medium text-yellow-200 sm:text-2xl md:mb-6 md:text-3xl">
          {t.fifthTitle}
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <p className="font-roboto text-sm leading-relaxed text-neutral-400 md:flex-1 md:text-base">
            {t.fifthDescOne}
          </p>

          <p className="font-roboto text-sm leading-relaxed text-neutral-400 md:flex-1 md:text-base">
            {t.fifthDescTwo}
          </p>
        </div>
      </div>
    </section>
  );
}

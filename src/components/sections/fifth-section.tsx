"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FifthSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-screen-2xl px-4 py-20">
      {/* IMAGE */}
      <div
        data-aos="fade-up"
        className="relative h-[40rem] w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/assets/hero3.png"
            alt="Event backdrop showcase"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        </div>
      </div>

      {/* CONTENT */}
      <div data-aos="fade-up" className="mt-8">
        <h2 className="mb-6 text-2xl text-white md:text-3xl">{t.fifthTitle}</h2>

        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <p className="font-roboto flex-1 text-sm text-neutral-400 md:text-base">
            {t.fifthDescOne}
          </p>

          <p className="font-roboto flex-1 text-sm text-neutral-400 md:text-base">
            {t.fifthDescTwo}
          </p>
        </div>
      </div>
    </section>
  );
}

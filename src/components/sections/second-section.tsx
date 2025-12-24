"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/context/LanguageContext";

const PRODUCTS = [
  {
    id: 1,
    imageUrl: "/assets/item1.png",
    color: "bg-emerald-100",
  },
  {
    id: 2,
    imageUrl: "/assets/item2.png",
    color: "bg-amber-100",
  },
  {
    id: 3,
    imageUrl: "/assets/item3.png",
    color: "bg-rose-100",
  },
];

export default function SecondSection() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section id="services" className="min-h-[48rem] px-4">
      <div className="mx-auto max-w-screen-2xl justify-between md:flex">
        <div data-aos="fade-right" className="pt-24 pb-10">
          <h2 className="max-w-screen-md text-3xl text-yellow-200 md:text-4xl">
            {t.servicesHeroTitle}
          </h2>

          <p className="font-roboto mt-4 max-w-screen-sm text-sm text-neutral-400 md:text-base">
            {t.servicesHeroDesc}
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="mx-auto max-w-screen-2xl">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="select-none">
            {PRODUCTS.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2">
                <div className="relative aspect-[5/4] overflow-hidden p-4 md:p-3">
                  <div className="absolute inset-0">
                    <Image
                      src={product.imageUrl}
                      alt={`Backdrop ${product.id}`}
                      fill
                      className="object-cover"
                      priority={product.id === 1}
                    />
                    <div
                      className={`absolute inset-0 ${product.color} opacity-0`}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

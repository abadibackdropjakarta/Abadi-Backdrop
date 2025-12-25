"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenuAlt3 } from "react-icons/hi";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();

  const phoneNumber = "6281908127687";
  const message =
    lang === "en"
      ? "Hello, I would like to order a backdrop for an event. Please let me know the available options, pricing, and setup details. Thank you."
      : "Halo, saya ingin memesan backdrop untuk sebuah acara. Mohon informasikan pilihan, harga, dan detail pemasangannya. Terima kasih.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 52 * 16;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-custom-background/80 backdrop-blur-sm"
          : "bg-custom-background/20"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* MOBILE & DESKTOP BAR */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center py-4 md:py-6">
          {/* LOGO */}
          <Link
            href="/#hero"
            className="relative aspect-[3/1] w-48 -translate-x-8"
          >
            <Image
              src="/assets/logotextpng.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU (CENTER) */}
          <div className="hidden justify-center gap-10 font-medium text-white md:flex">
            <Link href="/#hero" className="hover:text-yellow-200">
              {t.home}
            </Link>
            <Link href="/#services" className="hover:text-yellow-200">
              {t.services}
            </Link>
            <Link href="/#works" className="hover:text-yellow-200">
              {t.works}
            </Link>
            <Link href="/#awards" className="hover:text-yellow-200">
              {t.awards}
            </Link>
            <Link href="/#projects" className="hover:text-yellow-200">
              {t.projects}
            </Link>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center justify-end gap-3">
            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-4 md:flex">
              <button
                onClick={toggleLang}
                className="rounded-full border px-3 py-1 text-sm font-medium text-white hover:bg-white/10"
              >
                {lang === "en" ? "ID" : "EN"}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-green-700 px-4 py-2"
              >
                <div className="relative size-8">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  {t.contact}
                </span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  size="icon"
                  className="
                    bg-pallete-main rounded-xl
                    size-11
                    sm:size-12
                    lg:size-14
                  "
                >
                  <HiMenuAlt3
                    className="
                      text-pallete-secondary
                      size-8
                      sm:size-9
                      lg:size-11
                    "
                  />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-3/5 border-none bg-custom-background p-8"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    Mobile Navigation Menu
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col items-end gap-8 text-lg text-neutral-200">
                  <Link href="/#hero" onClick={() => setOpen(false)}>
                    {t.home}
                  </Link>
                  <Link href="/#services" onClick={() => setOpen(false)}>
                    {t.services}
                  </Link>
                  <Link href="/#works" onClick={() => setOpen(false)}>
                    {t.works}
                  </Link>
                  <Link href="/#awards" onClick={() => setOpen(false)}>
                    {t.awards}
                  </Link>
                  <Link href="/#projects" onClick={() => setOpen(false)}>
                    {t.projects}
                  </Link>

                  <button
                    onClick={() => {
                      toggleLang();
                      setOpen(false);
                    }}
                    className="rounded-full border px-4 py-2 text-base"
                  >
                    {lang === "en" ? "Bahasa Indonesia" : "English"}
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-green-700 px-4 py-2"
                  >
                    <div className="relative size-8">
                      <Image
                        src="/whatsapp.svg"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>{t.contact}</span>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

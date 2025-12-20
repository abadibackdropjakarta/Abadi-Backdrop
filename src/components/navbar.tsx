"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const phoneNumber = "081908127687";
  const message =
    "Hello, I would like to order a backdrop for an event. Please let me know the available options, pricing, and setup details.Thank you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Convert 52rem to pixels (assuming 1rem = 16px)
      const scrollThreshold = 52 * 16;

      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 left-0 z-20 w-full ${
        scrolled
          ? "bg-custom-background/80 backdrop-blur-sm"
          : "bg-custom-background/20"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4">
        <div className="flex w-full justify-between py-4 md:py-6">
          <div className="flex items-center gap-8 font-medium text-white md:gap-12">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="relative aspect-[3/1] w-32 text-xl font-bold"
            >
              <Image
                src="/assets/logotextpng.png"
                alt="logotext"
                fill
                className="object-contain"
              />
            </Link>
            <div className="hidden items-center gap-8 font-medium text-white md:flex md:gap-12">
              <Link
                href="#"
                className="cursor-pointer transition-colors hover:text-yellow-200"
              >
                Project
              </Link>
              <Link
                href="#"
                className="cursor-pointer transition-colors hover:text-yellow-200"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="cursor-pointer transition-colors hover:text-yellow-200"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="cursor-pointer transition-colors hover:text-yellow-200"
              >
                Support
              </Link>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-green-700 px-4 py-2 md:flex"
          >
            <div className="relative size-8">
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm font-medium text-white">Contact Us</p>
          </a>
        </div>
        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              size="icon"
              className="bg-pallete-main hover:bg-pallete-main cursor-pointer rounded-xl text-neutral-200 shadow-none hover:text-neutral-50 md:p-4 md:text-lg"
            >
              <HiMenuAlt3 className="text-pallete-secondary size-8" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-custom-background w-3/5 border-none p-8"
          >
            <SheetHeader>
              <SheetTitle className=""></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <nav className="font-nunito mt-8 flex h-full flex-col items-end gap-12 text-end text-xl font-medium text-neutral-200">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("#");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  setOpen(false);
                }}
              >
                <h4>Project</h4>
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("#");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  setOpen(false);
                }}
              >
                <h4>Blog</h4>
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("#");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  setOpen(false);
                }}
              >
                <h4>About Us</h4>
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("#");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  setOpen(false);
                }}
              >
                <h4>Contact</h4>
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("#");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                  setOpen(false);
                }}
              >
                <h4>Support</h4>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="-me-4 flex items-center gap-2 rounded-full border-green-700 px-4 py-2"
              >
                <div className="relative size-8">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-xl font-medium text-neutral-200">
                  Contact Us
                </p>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

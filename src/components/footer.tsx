"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MapComponent from "./mapcomponent";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="secondary-foreground text-neutral-200">
      {/* ================= MAP SECTION ================= */}
      <div className="relative h-[360px] w-full">
        <MapComponent lat={-6.861940096619952} lng={107.59462764880793} />

        {/* FIND US BUTTON */}
        <div className="absolute top-6 left-6">
          <span className="bg-orange-500 px-4 py-2 text-sm font-semibold text-white uppercase">
            {t.footerFindUs}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-screen-2xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* PHONE */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              {t.footerPhone}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>+62 819 0812 7687</li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              {t.footerSocial}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Abadi</li>
            </ul>
          </div>

          {/* EMAIL */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              {t.footerEmail}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>abadibackdrop@gmail.com</li>
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              {t.footerLocation}
            </h4>
            <div className="mt-4 space-y-1 text-sm text-neutral-300">
              <p>
                Jalan Waru Majid Nurul Iman no.82, Rt.9 Rw.3, Bambu Apus,
                Cipayung, Kota Jakarta Timur, DKI Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-neutral-600">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-6 py-6 text-sm text-neutral-400 md:flex-row md:justify-between">
          <p>© 2012 Abadi Backdrop. {t.footerRights}</p>
          <p>
            {t.footerWebBy}{" "}
            <Link href="#" className="text-neutral-300 hover:text-white">
              Giant
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

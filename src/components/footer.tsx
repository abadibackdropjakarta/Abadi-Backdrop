"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MapComponent from "./mapcomponent";

export default function Footer() {
  return (
    <footer className="secondary-foreground text-neutral-200">
      {/* ================= MAP SECTION ================= */}
      <div className="relative h-[360px] w-full">
        <MapComponent lat={-6.861940096619952} lng={107.59462764880793} />

        {/* FIND US BUTTON */}
        <div className="absolute top-6 left-6">
          <span className="bg-orange-500 px-4 py-2 text-sm font-semibold text-white uppercase">
            Find Us
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-screen-2xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* SERVICE STATION */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              Service Station
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Geometry steering wheel</li>
              <li>Oil change</li>
              <li>Replacement & repair exhaust</li>
              <li>Replacement shock absorbers</li>
              <li>Diagnostics</li>
            </ul>
          </div>

          {/* TIRE SERVICE */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              Tire Service
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Replacement tires</li>
              <li>Balancing wheels</li>
              <li>Seasonal tire storage</li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              Other Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Air conditioning service</li>
              <li>American car service</li>
              <li>Preparing for MOT</li>
            </ul>
          </div>

          {/* FIND US */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">
              Find Us
            </h4>
            <p className="text-sm text-neutral-300">
              Chomutovice 24 <br />
              251 01 Prague-East
            </p>

            <div className="mt-4 space-y-1 text-sm text-neutral-300">
              <p>+62 819 0812 7687</p>
              <p>abadibackdrop@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-neutral-600">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-6 py-6 text-sm text-neutral-400 md:flex-row md:justify-between">
          <p>© 2012 Abadi Backdrop. All rights reserved.</p>
          <p>
            Webdesign by{" "}
            <Link href="#" className="text-neutral-300 hover:text-white">
              Giant
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

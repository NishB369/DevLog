"use client";

import Marquee from "react-fast-marquee";
import { LOGOS } from "../lib/logos";

interface MarqueeLogosProps {
  heading: string;
}

export default function MarqueeLogos({ heading }: MarqueeLogosProps) {
  return (
    <div className="relative hidden sm:block bg-black/10 w-full">
      <p className="text-center text-gray-300 text-2xl font-serif my-6 font-medium">
        {heading}
      </p>

      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black to-transparent pointer-events-none z-10" />

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover
          className="flex items-center gap-16 w-full"
        >
          {LOGOS.map((Logo, index) => (
            <div
              key={index}
              className="opacity-50 hover:opacity-100 mx-10 transition-opacity"
            >
              <Logo />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

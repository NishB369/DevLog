"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface GlowingButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const GlowingButton = ({
  children,
  className = "",
  ...props
}: GlowingButtonProps) => {
  return (
    <button
      {...props}
      className={`cursor-pointer bg-white text-black border-2 rounded-full 
                 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 xl:px-12 xl:py-2
                 text-sm sm:text-base md:text-base lg:text-base
                  transition-all duration-300 ease-in-out hover:scale-105 
                 relative overflow-hidden sm:w-auto min-w-[120px] sm:min-w-[140px]
                 ${className}`}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 0 10px 5px rgba(57, 255, 20, 0.7)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "0 0 15px 5px rgba(57, 255, 20, 0.4)";
      }}
    >
      {children}
    </button>
  );
};

export default GlowingButton;

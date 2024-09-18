"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`${isHomePage ? "absolute" : "relative"} w-full bg-darkGray`}
    >
      <div className="max-w-[1280px] w-[95%] mx-auto relative z-10">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

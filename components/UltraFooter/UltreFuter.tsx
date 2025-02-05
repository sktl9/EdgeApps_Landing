"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const UltraFooter = () => {
  const pathname = usePathname();
  const locale = pathname;
  const locale1 = pathname.split("/")[1];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
    {/* <div className="flex justify-center m-[20px]"><h2 className="ultraFooter__h2">EdgeApps © 2024</h2></div> */}
      
    </>
  );
};

export default UltraFooter;

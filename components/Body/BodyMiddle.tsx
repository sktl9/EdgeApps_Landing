"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

// http://localhost:3000/ru/authorization/

const LandingHeader = () => {
  const pathname = usePathname();
  const locale = pathname;
  const locale1 = pathname.split("/")[1];
  const isKazakh = pathname === "/";
  const isEnglish = pathname === "/en";
  const isRussian = pathname === "/ru";
  const isKazakh1 = pathname === "/kz";

  return (
    <>
      <div
        className={`middle-background ${
          isRussian ? "middle-background-ru" : ""
        } ${isKazakh ? "middle-background-kz" : ""} ${
          isEnglish ? "middle-background-en" : ""
        }`}
      >
        <div className="middle-full-container"></div>
      </div>
    </>
  );
};

export default LandingHeader;

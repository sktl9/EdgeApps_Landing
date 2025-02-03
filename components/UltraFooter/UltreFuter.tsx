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
      <div className="ultraFooter__main">
        <div className="ultraFooter__nav">
          <Link href={`/${locale1}/`}>
            <Image
              src={`/static/icons/edgeLogo.svg`}
              alt="Logo"
              className="header__nav__img"
              width={156}
              height={34}
            />
          </Link>
        </div>
        <h2 className="ultraFooter__h2">EdgeApps LLC © 2024</h2>
        <div className="ultraFooter__right">
          <Link
            className="footer-aa"
            target="_blank"
            href={"https://synaq.beyim.ai/ru?modal=privacy-policy"}
          >
            Privacy policy
          </Link>
          <a
            className="footer-a"
            href="https://www.linkedin.com/company/beyimtech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer-img"
              src="/static/icons/linked-in.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
          <a
            className="footer-a"
            href="https://www.instagram.com/beyim.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer-img"
              src="/static/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default UltraFooter;

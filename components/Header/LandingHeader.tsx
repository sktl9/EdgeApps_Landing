"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LandingHeader = ({ activePage }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale1 = pathname.split("/")[1];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header__main ${scrolled ? "scrolled" : ""}`}>
        <div className="main__content">
          <div className="header__nav">
            <div>
              <Link href={`/${locale1}/`}>
                <Image
                  src={`/static/icons/${scrolled ? "edgeLogo.svg" : "edgeLogoWhite.svg"}`}
                  alt="Logo"
                  className="header__nav__img"
                  width={156}
                  height={34}
                />
              </Link>
            </div>
          </div>
          <div className="header__setting">
            <Link
              className={
                activePage == "Features"
                  ? "header__button--active"
                  : "header__button"
              }
              href="#features"
              locale="kz"
            >
              Продукты
            </Link>
            <Link
              className={
                activePage == "Price"
                  ? "header__button--active"
                  : "header__button"
              }
              href="#price"
              locale="kz"
            >
              Услуги
            </Link>
            <Link
              className={
                activePage == "Team"
                  ? "header__button--active"
                  : "header__button"
              }
              href="#team"
              locale="kz"
            >
              Импортозамещение
            </Link>
            <Link
              className={
                activePage == "Contact"
                  ? "header__button--active"
                  : "header__button"
              }
              href="#contact"
              locale="kz"
            >
              Партнеры
            </Link>
          </div>
          <div className="header__right">
            <Link href="#ultraFooter" className={`header__book ${scrolled ? "scrolled" : ""}`}>
            <span>
              Связаться с нами
            </span>
              
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;

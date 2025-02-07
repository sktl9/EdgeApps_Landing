"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


const LandingHeader = ({ activePage }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale1 = pathname.split("/")[1];
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <Link href={`/`} scroll={true}>
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
          <button
            className={activePage == "Features" ? "header__button--active" : "header__button"}
            onClick={() => scrollToSection("products")}
          >
            Продукты
          </button>
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
              href="/about"
              locale="kz"
            >
              О компании
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

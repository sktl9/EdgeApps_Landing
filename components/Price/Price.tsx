"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// http://localhost:3000/ru/authorization/

const Price = ({ setActivePage }: any) => {
  const pathname = usePathname();
  const locale = pathname;
  const locale1 = pathname.split("/")[1];
  const isKazakh = pathname === "/";
  const isEnglish = pathname === "/en";
  const isRussian = pathname === "/ru";
  const isKazakh1 = pathname === "/kz";
  const [priceRef, inView] = useInView({
    threshold: 0.2,
  });

  const inViewValue = inView;

  useEffect(() => {
    if (inViewValue) {
      setActivePage("Price");
    }
  }, [inViewValue]);

  return (
    <>
      <div
        ref={priceRef}
        id="price"
        className={`price-background ${
          isRussian ? "price-background-ru" : ""
        } ${isKazakh ? "price-background-kz" : ""} ${
          isEnglish ? "price-background-en" : ""
        }`}
      >
        <div className="price-full-container ">
          <h1 className="team-title">Pricing plans</h1>
          <p className="footer-p">Every plan includes 30 day free trial</p>
          <div className="price__container">
            <div className="price__content">
              <h1 className="price__content-title">$40.00</h1>
              <p className="price__content-p3">/ per student per year</p>
              <p className="price__content-p">
                Recommended for small groups or private educators
              </p>
              <ul className="list-with-dots">
                <li>For 0-100 Students</li>
                <li>Exclusive Access</li>
                <li>Generation of Individualized Content</li>
              </ul>
            </div>
            <div className="price__content-active">
              <div className="price__content-popular">Popular</div>
              <h1 className="price__content-title active">$30.00</h1>
              <p className="price__content-p3 active">/ per student per year</p>
              <p className="price__content-p active">
                Suitable for mid-sized educational institutions with a moderate
                number of students
              </p>
              <ul className="list-with-dots1">
                <li>For 101-1000 Students</li>
                <li>Adaptive Content</li>
                <li>Integration with Educational Goals</li>
              </ul>
            </div>
            <div className="price__content">
              <h1 className="price__content-title">$10.00</h1>
              <p className="price__content-p3">/ per student per year</p>
              <p className="price__content-p">
                Ideal for educational centers with an extensive audience
              </p>
              <ul className="list-with-dots">
                <li>For 101 - 10 000 Students</li>
                <li>Adaptability for Every Student</li>
                <li>Progress Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;

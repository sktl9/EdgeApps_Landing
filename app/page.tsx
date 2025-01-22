"use client";

import "../public/scss/style.css"
// import "../public/scss/style.css";
import LandingHeader from "@/components/Header/LandingHeader";
import Projects from "@/components/Projects/Projects"
import BodyMiddle from "@/components/Body/BodyMiddle";
import Advantages from "@/components/Advantages/Advantages";
import dynamic from "next/dynamic";
import Price from "@/components/Price/Price";
import Features from "@/components/Feautures/Features";
import UltraFooter from "@/components/UltraFooter/UltreFuter";
import { FirstWindow } from "@/components/FirstWindow";
import { useState } from "react";

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

export default function Home() {
  const [activePage, setActivePage] = useState("");

  return (
    <>
      <LandingHeader activePage={activePage} />
      <FirstWindow setActivePage={setActivePage} />
      <Projects />
      <Advantages/>
      {/* <Team setActivePage={setActivePage} /> */}
      <Footer setActivePage={setActivePage} />
      <UltraFooter />
    </>
  );
}

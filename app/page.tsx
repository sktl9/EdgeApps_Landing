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
import { useEffect, useState } from "react";
import Media from "@/components/Media/Media";
import Team from "@/components/Team/Team";
import Clients from "@/components/Clients/Clients";
import Academy from "@/components/Academy/Academy";
import CallUs from "@/components/CallUs/CallUs";
import Service from "@/components/services/service";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash; // Получаем якорь из URL
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 500); // Даем время на загрузку страницы перед скроллом
      }
    }
  }, [pathname]); // Следим за изменением маршрута
  return (
    <>
      {/* <NextSeo
        title="EdgeApps – Инновационные решения для бизнеса"
        description="EdgeApps – передовая платформа для управления бизнес-процессами. Ускорьте работу, автоматизируйте рутину и достигайте новых высот!"
        canonical="http://178.22.171.60:3331"
        openGraph={{
          title: "EdgeApps – Оптимизируйте свой бизнес",
          description:
            "Современные технологии, удобные инструменты и максимальная эффективность – всё это EdgeApps. Узнайте, как мы можем помочь вашему бизнесу расти!",
          url: "http://178.22.171.60:3331",
          images: [
            {
              url: "http://178.22.171.60:3331/preview.jpg",
              width: 1200,
              height: 630,
              alt: "EdgeApps – передовые решения для бизнеса",
            },
          ],
          site_name: "EdgeApps",
        }}
       
      /> */}

      <Head>
        <title>EdgeApps – Инновационные решения для бизнеса</title>
        <meta name="description" content="EdgeApps – передовая платформа для управления бизнес-процессами. Ускорьте работу, автоматизируйте рутину и достигайте новых высот!" />
        <link rel="canonical" href="http://178.22.171.60:3331" />
      </Head>


      <LandingHeader />
      <FirstWindow />
      <div id="products">
        <Projects />
      </div>
      <div id="services">
        <Service />
      </div>
      <Advantages />
      <Media />
      <Team />
      <div id="partners">
        <Academy />
      </div>
      <div id="callUs">
        <CallUs />
      </div>
      {/* <Team setActivePage={setActivePage} /> */}
      <Footer />
      <UltraFooter />
    </>
  );
}

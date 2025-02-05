"use client";

import "../../public/scss/style.css"
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
import Media from "@/components/Media/Media";
import Team from "@/components/Team/Team";
import Clients from "@/components/Clients/Clients";
import Academy from "@/components/Academy/Academy";
import CallUs from "@/components/CallUs/CallUs";
import Service from "@/components/services/service";
import { HalfFirstWindow } from "@/components/HalfFirstWindow/HalfFirstWindow";
import Director from "@/components/Director/Director";
import Value from "@/components/Values/Value";

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
    ssr: false,
});

export default function Home() {
    const [activePage, setActivePage] = useState("");

    return (
        <>
            <LandingHeader activePage={activePage} />
            <HalfFirstWindow />
            <Director />
            <Value/>
            <UltraFooter />
            
        </>
    );
}

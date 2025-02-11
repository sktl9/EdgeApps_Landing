"use client";
import Image from "next/image";
import style from "../HalfFirstWindow/HalfFirstWindow.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import content from "../../public/content.json";


export const HalfFirstWindow = ({ setActivePage }: any) => {

    const scrollToBottomMinus64 = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const position = scrollHeight - viewportHeight - 64; // Учитываем высоту окна просмотра

        window.scrollTo({
            top: position > 0 ? position : 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={style.container}>
            <video
                src="/static/webm/ifellow.webm"
                autoPlay
                loop
                muted
                className={style.backgroundVideo}
            />
            <div className={style.content}>
                <div className={style.headerText}>
                    <span className={style.mainText}>{content.HalfFirstWindow.title}</span>
                </div>
                <div className={style.underContent}>
                    <div className={style.blockAbout1}>
                        <span className={style.textAbout}>{content.HalfFirstWindow.description}</span>
                    </div>
                    <div className={style.blockAbout2}>
                    </div>
                </div>
            </div>
        </div>


    );
};

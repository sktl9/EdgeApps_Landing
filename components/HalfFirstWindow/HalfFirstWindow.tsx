"use client";
import Image from "next/image";
import style from "../HalfFirstWindow/HalfFirstWindow.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const HalfFirstWindow = ({ setActivePage }: any) => {
    const [firstRef, inView] = useInView({
        threshold: 0.5,
    });

    const inViewValue = inView;

    useEffect(() => {
        if (inViewValue) {
            setActivePage("");
        }
    }, [inViewValue]);

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
                    <span className={style.mainText}>О компании</span>
                </div>
                <div className={style.underContent}>
                    <div className={style.blockAbout1}>
                        <span className={style.textAbout}>Компания EdgeApps работает на рынке информационных технологий с 2015 года и показывает кратный рост по обороту и численности сотрудников от года к году. Основная специализация — развитие собственных продуктов, заказная разработка, ИТ-консалтинг, тестирование и сопровождение программного обеспечения.</span>
                        
                    </div>
                    <div className={style.blockAbout2}>
  
                       

                       
                    </div>
                </div>
            </div>
        </div>


    );
};

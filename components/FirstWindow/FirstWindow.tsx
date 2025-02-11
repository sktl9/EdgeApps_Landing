"use client";
import Image from "next/image";
import style from "../../public/scss/components/firstWindow.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import content from "../../public/content.json";

export const FirstWindow = ({ setActivePage }: any) => {
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
          <span className={style.mainText}>{content.firstWindow.companyTitle1}</span>
          <span className={style.mainText}>{content.firstWindow.companyTitle2}</span>
        </div>
        <div className={style.underContent}>
          <div className={style.blockAbout1}>
            <span className={style.textAbout}>{content.firstWindow.description}</span>
            <div className={style.miniNav}>
              <div className={style.label_container}>
              {content.firstWindow.productsLabel}
                <span className={style.notification_badge}>7</span>
              </div>
              <div className={style.label_container}>
              {content.firstWindow.servicesLabel}
                <span className={style.notification_badge}>9</span>
              </div>
            </div>
          </div>
          <div className={style.blockAbout2}>
            <span className={style.flex}>
              <img src="/static/icons/logo-mini-intro.svg" alt="" className={style.logoMini} />
              <span >
              {content.firstWindow.announcements}
              </span>


            </span>
            <div className={style.news}>
              <span className={style.spanAbout}>{content.firstWindow.news[0]}</span>
              <span className={style.spanAbout}>{content.firstWindow.news[1]}</span>
            </div>

            <div className={style.news}>
              <span>{content.firstWindow.news[2]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

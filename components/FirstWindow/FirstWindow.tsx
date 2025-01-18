"use client";
import Image from "next/image";
import style from "../../public/scss/components/firstWindow.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
          <span className={style.mainText}>IT-компания</span>
          <span className={style.mainText}>Высоких скоростей</span>
        </div>
        <div className={style.underContent}>
          <div className={style.blockAbout1}>
            <span className={style.textAbout}>Быстрая реакция на изменения
              и сервисно-ориентированный
              подход к проектам</span>
            <div className={style.miniNav}>
              <div className={style.label_container}>
                Продукты
                <span className={style.notification_badge}>7</span>
              </div>
              <div className={style.label_container}>
                Услуги
                <span className={style.notification_badge}>9</span>
              </div>
            </div>
          </div>
          <div className={style.blockAbout2}>
            <span className={style.flex}>
              <img src="/static/icons/logo-mini-intro.svg" alt="" className={style.logoMini} />
              <span >
                Анонсы
              </span>


            </span>
            <div className={style.news}>
              <span className={style.spanAbout}>Компания iFellow начала оказывать поддержку в миграции Jira и Confluence из зарубежных облаков</span>
              <span className={style.spanAbout}>Подбирать IТ-специалистов сложно, но интересно</span>
            </div>

            <div className={style.news}>
              <span>Как оценить ИТ-инициативы заказчиков и выстроить прозрачные процессы</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

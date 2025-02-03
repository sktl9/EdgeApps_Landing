"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import style from "../../public/scss/components/footer.module.scss";
// http://localhost:3000/ru/authorization/

const LandingHeader = () => {
  const pathname = usePathname();
  const locale = pathname;
  const locale1 = pathname.split("/")[1];
  const isKazakh = pathname === "/";
  const isEnglish = pathname === "/en";
  const isRussian = pathname === "/ru";
  const isKazakh1 = pathname === "/kz";
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [contactRef, inView] = useInView({
    threshold: 0.5,
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wobxutq",
        "template_ifxt8tp",
        form.current || "",
        "eiq-JASidCV3D9jxF"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000); // Скрыть сообщение через 5 секунд
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row w-full px-[10%] mt-[50px] gap-[20px]">
          <div className="min-w-[45%] h-[280px] flex flex-col bg-[#f9f9f9] rounded-[2rem] p-10">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="text-[16px] font-semibold">Подписывайтесь на рассылку наших новостей и мероприятий</span>
              </div>
              <div className="input-group flex items-center border-b border-gray-400">
                <input type="email" id="mailSend" className={style.input_field} placeholder="" required />
                <label htmlFor="mailSend" className={style.input_label}>Почта</label>
                <span className={style.input_bar}></span>
                <button className="ml-2 px-4 py-2 text-black ">
                  Подписать
                </button>
              </div>
            </div>
          </div>
          <div className="w-full justify-center gap-[20px] hidden sm:flex">
             <div className="flex flex-col gap-1 w-[33%]">
            <span>Клиентам и Партнерам</span>
            <div className="font-extralight flex flex-col items-start text-nowrap">
              <button>Продукты</button>
              <button>Услуги</button>
              <button>Импортзамещение</button>
              <button>Проекты</button>
              <button>Отрасли</button>
              <button>Медиацентр</button>
            </div>

          </div>
          <div className="flex flex-col gap-1 w-[33%]">
            <span>Соискателям</span>
            <div className="font-extralight flex flex-col items-start text-nowrap">
              <button>Карьера</button>
              <button>Жизнь в компании</button>
              <button>Вакансии</button>
            </div>

          </div>
          <div className="flex flex-col gap-1 w-[33%]">
            <span>О компании</span>
            <div className="font-extralight flex flex-col items-start text-nowrap">
              <button>О компании</button>
              <button>Контакты</button>
              <button>Наша команда</button>
              <button>Клиенты</button>
              <button>Партнеры</button>

            </div>
          </div>
         

          </div>
        </div>
      </div>

    </>
  );
};

export default LandingHeader;

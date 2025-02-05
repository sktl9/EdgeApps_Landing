"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import style from "../../public/scss/components/callUs.module.scss";
import ButtonLink from "@/public/static/UI/ButtonLink";
import Link from "next/link";
import Image from "next/image";

const CallUs = () => {
    const [captchaValue, setCaptchaValue] = useState(null);

    const contacts = [
        {
            icon: `/static/icons/marker.svg`,
            title: "НАШ ГЛАВНЫЙ ОФИС",
            content: "SoHo 94 Broadway St Нью-Йорк, NY 1001",
        },
        {
            icon: `/static/icons/phone.svg`,
            title: "ТЕЛЕФОННЫЙ НОМЕР",
            content: "234-9876-5400\n888-0123-4567 (бесплатно)",
        },
        {
            icon: `/static/icons/wathup.svg`,
            title: "WatsUp",
            content: "1-234-567-8900",
        },
        {
            icon: `/static/icons/google.svg`,
            title: "ЭЛЕКТРОННОЕ ПИСЬМО",
            content: <a href="mailto:hello@theme.com" className="text-blue-600 underline">hello@theme.com</a>,
        },
        {
            icon: `/static/icons/in.svg`,
            title: "LinkedIn",
            content: <a href="mailto:hello@theme.com" className="text-blue-600 underline">hello@theme.com</a>,
        },
        {
            icon: `/static/icons/instagram.svg`,
            title: "Instagram",
            content: <a href="mailto:hello@theme.com" className="text-blue-600 underline">hello@theme.com</a>,
        },
        {
            icon: `/static/icons/facebook.svg`,
            title: "Facebook",
            content: <a href="mailto:hello@theme.com" className="text-blue-600 underline">hello@theme.com</a>,
        },
        {
            icon: `/static/icons/telegram.svg`,
            title: "Twitter",
            content: <a href="mailto:hello@theme.com" className="text-blue-600 underline">hello@theme.com</a>,
        },
    ];


    return (

        <>
            <div className="px-[10%] mt-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex justify-between pb-4 border-b border-gray-400">
                        <span className="">Свяжитесь с нами</span>
                    </div>
                    <div className="flex flex-wrap justify-between gap-6 pt-[20px]">
                        {contacts.map((contact, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center text-center bg-white h-[200px] shadow-lg rounded-xl p-6 w-full 
      transition-transform duration-300 ease-in-out hover:scale-105 xl:max-w-[23%] lg:max-w-[48%] sm:max-w-full 
      overflow-hidden group-hover:text-white"
                            >
                                {/* Пузырь-эффект */}
                                <div className="absolute inset-0 bg-blue-500 scale-0 opacity-0 transition-all duration-500 ease-out rounded-full group-hover:scale-150 group-hover:opacity-100"></div>

                                {/* Контент поверх анимации */}
                                <Link href={`/`} className="relative z-10">
                                    <Image src={contact.icon} alt="Logo" width={40} height={40} />
                                </Link>
                                <h3 className="relative z-10 text-lg mt-4">{contact.title}</h3>
                                <p className="relative z-10 text-gray-400 mt-2">{contact.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default CallUs
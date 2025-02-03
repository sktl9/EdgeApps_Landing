"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import style from "../../public/scss/components/callUs.module.scss";
import ButtonLink from "@/public/static/UI/ButtonLink";
import Link from "next/link";

const CallUs = () => {
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Подтвердите, что вы не робот!");
            return;
        }
        alert("Форма отправлена!");
    };
    return (

        <>
            <div className="px-[10%] mt-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="bg-[#3770eb] rounded-[2rem] min-h-[600px] p-[50px] flex">
                        <div className=" flex flex-col text-white lg:w-[55%]">
                            <span className="text-[22px] font-medium lg:text-[55px]">Свяжитесь с нами</span>
                            <form onSubmit={handleSubmit} className="flex-row">
                                <div className="flex flex-col lg:flex-row  lg:gap-[20px]">
                                    <div className="lg:w-[50%]">
                                        <div className="flex flex-col gap-[20px]">
                                            <div className="w-full ">
                                                <div className="input-group">
                                                    <input type="text" id="name" className="input-field" placeholder="" required />
                                                    <label htmlFor="name" className="input-label">ФИО</label>
                                                    <span className="input-bar"></span>
                                                </div>
                                                <div className="input-group">
                                                    <input type="text" id="company" className="input-field" placeholder="" required />
                                                    <label htmlFor="company" className="input-label">Компания</label>
                                                    <span className="input-bar"></span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="lg:w-[50%] flex flex-col gap-[20px] ">
                                        <div>
                                            <div className="input-group">
                                                <input type="text" id="telephone" className="input-field" placeholder="" required />
                                                <label htmlFor="telephone" className="input-label">Телефон</label>
                                                <span className="input-bar"></span>
                                            </div>
                                            <div className="input-group">
                                                <input type="email" id="mail" className="input-field" placeholder="" required />
                                                <label htmlFor="mail" className="input-label">Почта</label>
                                                <span className="input-bar"></span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="flex flex-col gap-[20px] w-full justify-between " >
                                    <ReCAPTCHA
                                        sitekey="ВАШ_КЛЮЧ_САЙТА"
                                        onChange={(value: any) => setCaptchaValue(value)}
                                    />
                                    <Link href="#ultraFooter" className={style.callUs}>
                                        <span>
                                            Отправить
                                        </span>
                                    </Link>
                                </div>

                            </form>



                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CallUs
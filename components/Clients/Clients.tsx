"use client";
import { useRef, useState } from "react";
import style from "../../public/scss/components/media.module.scss";
import classNames from "classnames";
import ButtonLink from "@/public/static/UI/ButtonLink";

const Clients = () => {
    const [page,setPage] = useState(1)

    return (
        <>
            <div className="px-[10%] mt-[50px] ">
                <div className="flex flex-col gap-[20px]">
                    <span className="pb-4 border-b border-gray-400">Наши клиенты</span>
                    <div className="flex gap-[10px] text-[11px] ">
                        <span onClick={()=>setPage(1)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==1 ? 'bg-[#0041F9] text-white':''}`}>Все отрасли</span>
                        <span onClick={()=>setPage(2)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==2 ? 'bg-[#0041F9] text-white':''}`}>Банки и финансовые организации</span>
                        <span onClick={()=>setPage(3)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==3 ? 'bg-[#0041F9] text-white':''}`}>Платежные системы и сервисы</span>
                        <span onClick={()=>setPage(4)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==4 ? 'bg-[#0041F9] text-white':''}`}>Страхование и НПФ</span>
                        <span onClick={()=>setPage(5)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==5 ? 'bg-[#0041F9] text-white':''}`}>Ритейл</span>
                        <span onClick={()=>setPage(6)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==6 ? 'bg-[#0041F9] text-white':''}`}>Строительство</span>
                        <span onClick={()=>setPage(7)} className={`cursor-pointer border border-gray-400 px-3 py-[5px] rounded-[6rem] hover:bg-[#0041F9] hover:text-white transition-all duration-300 ${page ==7 ? 'bg-[#0041F9] text-white':''}`}>Промышленность</span>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-row gap-[2%]">
                            <div className="bg-[#f9f9f9] w-[32%] h-[260px] rounded-[5%] p-4">
                                <div className="flex justify-between pb-3 border-b border-gray-400 h-[25%]">
                                    <div className="flex flex-col text-[12px] gap-[5px]">
                                        <span className="text-[15px] font-bold">Сбер</span>
                                        <span className="text-[12px]">Банки и финансовые организации</span>
                                    </div>
                                    <div className="flex bg-red-200 items-centerx p-5 rounded-full">

                                    </div>
                                </div>
                                <div className="h-[75%] flex flex-col  justify-between mt-2">
                                    <div className="text-[13px]">Разработка функциональности для мобильного приложения Сбербанк Онлайн и бэкенд систем для взаимодействия с ФНС. Разработка процессинга «Спасибо». Единая фронтальная система – фронт для клиентов Сбера и внутренних пользователей</div>
                                    <span className="flex">Читать о клиенте</span>
                                </div>

                            </div>
                            <div className="bg-[#f9f9f9] w-[32%] h-[260px] rounded-[5%] p-4">
                                <div className="flex justify-between pb-3 border-b border-gray-400 h-[25%]">
                                    <div className="flex flex-col text-[12px] gap-[5px]">
                                        <span className="text-[15px] font-bold">Сбер</span>
                                        <span className="text-[12px]">Банки и финансовые организации</span>
                                    </div>
                                    <div className="flex bg-red-200 items-centerx p-5 rounded-full">

                                    </div>
                                </div>
                                <div className="h-[75%] flex flex-col  justify-between mt-2">
                                    <div className="text-[13px]">Разработка функциональности для мобильного приложения Сбербанк Онлайн и бэкенд систем для взаимодействия с ФНС. Разработка процессинга «Спасибо». Единая фронтальная система – фронт для клиентов Сбера и внутренних пользователей</div>
                                    <span className="flex">Читать о клиенте</span>
                                </div>

                            </div>
                            <div className="bg-[#f9f9f9] w-[32%] h-[260px] rounded-[5%] p-4">
                                <div className="flex justify-between pb-3 border-b border-gray-400 h-[25%]">
                                    <div className="flex flex-col text-[12px] gap-[5px]">
                                        <span className="text-[15px] font-bold">Сбер</span>
                                        <span className="text-[12px]">Банки и финансовые организации</span>
                                    </div>
                                    <div className="flex bg-red-200 items-centerx p-5 rounded-full">

                                    </div>
                                </div>
                                <div className="h-[75%] flex flex-col  justify-between mt-2">
                                    <div className="text-[13px]">Разработка функциональности для мобильного приложения Сбербанк Онлайн и бэкенд систем для взаимодействия с ФНС. Разработка процессинга «Спасибо». Единая фронтальная система – фронт для клиентов Сбера и внутренних пользователей</div>
                                    <span className="flex">Читать о клиенте</span>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row gap-[2%]">
                            <div className="bg-[#f9f9f9] w-[32%] h-[260px] rounded-[5%] p-4">
                                <div className="flex justify-between pb-3 border-b border-gray-400 h-[25%]">
                                    <div className="flex flex-col text-[12px] gap-[5px]">
                                        <span className="text-[15px] font-bold">Сбер</span>
                                        <span className="text-[12px]">Банки и финансовые организации</span>
                                    </div>
                                    <div className="flex bg-red-200 items-centerx p-5 rounded-full">

                                    </div>
                                </div>
                                <div className="h-[75%] flex flex-col  justify-between mt-2">
                                    <div className="text-[13px]">Разработка функциональности для мобильного приложения Сбербанк Онлайн и бэкенд систем для взаимодействия с ФНС. Разработка процессинга «Спасибо». Единая фронтальная система – фронт для клиентов Сбера и внутренних пользователей</div>
                                    <span className="flex">Читать о клиенте</span>
                                </div>

                            </div>
                            <div className="bg-[#f9f9f9] w-[32%] h-[260px] rounded-[5%] p-4">
                                <div className="flex justify-between pb-3 border-b border-gray-400 h-[25%]">
                                    <div className="flex flex-col text-[12px] gap-[5px]">
                                        <span className="text-[15px] font-bold">Сбер</span>
                                        <span className="text-[12px]">Банки и финансовые организации</span>
                                    </div>
                                    <div className="flex bg-red-200 items-centerx p-5 rounded-full">

                                    </div>
                                </div>
                                <div className="h-[75%] flex flex-col  justify-between mt-2">
                                    <div className="text-[13px]">Разработка функциональности для мобильного приложения Сбербанк Онлайн и бэкенд систем для взаимодействия с ФНС. Разработка процессинга «Спасибо». Единая фронтальная система – фронт для клиентов Сбера и внутренних пользователей</div>
                                    <span className="flex">Читать о клиенте</span>
                                </div>

                            </div>
                            <div className="bg-[#f9f9f9] w-[32%] h-[260px] rounded-[5%] p-4">
                                <div className="flex justify-between pb-3 border-b border-gray-400 h-[25%]">
                                    <div className="flex flex-col text-[12px] gap-[5px]">
                                        <span className="text-[15px] font-bold">Сбер</span>
                                        <span className="text-[12px]">Банки и финансовые организации</span>
                                    </div>
                                    <div className="flex bg-red-200 items-centerx p-5 rounded-full">

                                    </div>
                                </div>
                                <div className="h-[75%] flex flex-col  justify-between mt-2">
                                    <div className="text-[13px]">Разработка функциональности для мобильного приложения Сбербанк Онлайн и бэкенд систем для взаимодействия с ФНС. Разработка процессинга «Спасибо». Единая фронтальная система – фронт для клиентов Сбера и внутренних пользователей</div>
                                    <span className="flex">Читать о клиенте</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Clients
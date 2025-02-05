"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../../public/scss/components/projects.module.scss";
import { useInView } from "react-intersection-observer";

// http://localhost:3000/ru/authorization/

const Service = () => {
    const [actual, setActual] = useState('products')
    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.actual}>
                    {/* <span className={style.actualSpan}>Актуальное</span> */}
                    <div className="flex lg:flex-col  ">
                        <div className=" flex-col justify-between lg:flex lg:flex-row w-[50%] lg:w-full gap-[5px] ">
                            <span className={`${style.label_container} text-[25px] md:text-[50px] sm:text-[40px] cursor-pointer ${actual == 'products' ? '' : 'opacity-25 hover:opacity-40 transition-opacity duration-300'}`}
                                onClick={() => setActual('products')}
                            >Услуги
                                <span className={style.notification_badge}>7</span>
                            </span>
                            <span className="flex font-[16px] max-w-[50%] items-center pl-[1%]">
                            От консалтинга и заказной разработки до технической поддержки с необходимым уровнем SLA
                            </span>
                        </div>
                        <div className="flex-col lg:flex lg:flex-row w-[50%] lg:w-full gap-[5px] items-center">
                            <div className="flex w-[50%]">
                               
                            </div>

                            <Link href="#ultraFooter" className={style.callUs}>
                                <span>
                                     Смотреть все услуги
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[1rem] lg:flex ">
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>01</span>
                                    <div className={style.textGroup}>
                                        <span>Разработка</span>
                                        <span>EdgeApps</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        Орион: управление проектами и ресурсами
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        Подробнее
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground2}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>01</span>
                                    <div className={style.textGroup}>
                                        <span>Разработка</span>
                                        <span>EdgeApps</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        Орион: управление проектами и ресурсами
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        Подробнее
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground3}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>01</span>
                                    <div className={style.textGroup}>
                                        <span>Разработка</span>
                                        <span>EdgeApps</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        Орион: управление проектами и ресурсами
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        Подробнее
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground4}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>01</span>
                                    <div className={style.textGroup}>
                                        <span>Разработка</span>
                                        <span>EdgeApps</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        Орион: управление проектами и ресурсами
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        Подробнее
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;

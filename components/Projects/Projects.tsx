"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../../public/scss/components/projects.module.scss";
import { useInView } from "react-intersection-observer";
import content from "../../public/content.json";

// http://localhost:3000/ru/authorization/
interface ProjectsProps {
    id?: string;
}
const Price: React.FC<ProjectsProps> = ({ id }) => {
    const [actual, setActual] = useState('products')
    return (
        <>
            <div id={id} className={style.mainContainer}>
                <div className={style.actual}>
                    <span className={style.actualSpan}>{content.projects.title}</span>
                    <div className="flex lg:flex-col  ">
                        <div className=" flex-col justify-between lg:flex lg:flex-row w-[50%] lg:w-full gap-[5px] ">
                            <span className={`${style.label_container} text-[25px] md:text-[50px] sm:text-[40px] cursor-pointer ${actual == 'products' ? '' : 'opacity-25 hover:opacity-40 transition-opacity duration-300'}`}
                                onClick={() => setActual('products')}
                            >{content.projects.categories.label}
                                <span className={style.notification_badge}>{content.projects.categories.count}</span>
                            </span>
                            <span className="flex font-[16px] max-w-[50%] items-center pl-[1%]">
                                {content.projects.categories.description}</span>
                        </div>
                        <div className="flex-col lg:flex lg:flex-row w-[50%] lg:w-full gap-[5px] items-center">
                            <div className="flex w-[50%]">

                            </div>

                            <Link href="#ultraFooter" className={style.callUs}>
                                <span>
                                    {actual == 'products' ? "Смотреть все продукты" : "Смотреть все услуги"}
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
                                        <span>{content.projects.items[0].category}</span>
                                        <span>{content.projects.items[0].company}</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        {content.projects.items[0].name}
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        {content.projects.items[0].details}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground2}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>02</span>
                                    <div className={style.textGroup}>
                                        <span>{content.projects.items[1].category}</span>
                                        <span>{content.projects.items[1].company}</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        {content.projects.items[1].name}
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        {content.projects.items[1].details}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground3}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>03</span>
                                    <div className={style.textGroup}>
                                        <span>{content.projects.items[2].category}</span>
                                        <span>{content.projects.items[2].company}</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        {content.projects.items[2].name}
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        {content.projects.items[2].details}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} group`}>
                            <div className={style.greenBackground4}></div>
                            <div className={style.content}>
                                <div className={style.top}>
                                    <span className={style.number}>04</span>
                                    <div className={style.textGroup}>
                                        <span>{content.projects.items[3].category}</span>
                                        <span>{content.projects.items[3].company}</span>
                                    </div>
                                </div>
                                <div className="relative text-[16px] w-[60%] ">
                                    <div className="transition-all duration-300 ease-in-out group-hover:translate-y-[-15px]">
                                        {content.projects.items[3].name}
                                    </div>
                                    <div className=" text-[12px] font-light absolute left-0 right-0 top-[93%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        {content.projects.items[3].details}
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

export default Price;

"use client";
import { useRef, useState } from "react";
import style from "../../public/scss/components/media.module.scss";
import classNames from "classnames";
import ButtonLink from "@/public/static/UI/ButtonLink";

const Team = () => {

    return (
        <>
            <div className="px-[10%] mt-[50px] ">
                <div className="lg:min-h-[500px] h-full  flex flex-col lg:flex-row gap-[20px]">
                    <div className="flex lg:w-[40%]  items-center">
                        <div className="flex flex-col gap-[20px]">
                            <span className="text-[14px] pb-4 border-b border-gray-400">Команда EdgeApss</span>
                            <span className="text-[22px] font-bold  lg:text-[55px] leading-none">Технологии делают люди</span>
                            <span className="text-[14px]">Команда — наша главная ценность.
                                Задача EdgeApps — раскрыть потенциал каждого сотрудника и сфокусировать его на возможностях, которые может дать сфера информационных технологий.</span>
                            <ButtonLink href="#ultraFooter" text="Карьера" />
                        </div>
                    </div>
                    <div className="relative w-full lg:w-[60%] h-[500px]">
                        {/* Блок 1 */}
                        <div className="absolute w-[50%] sm:w-[30%] h-[170px] top-[45%] sm:top-[25%]  bg-cyan-300 p-4 rounded-lg shadow-md">
                            <div className="flex gap-2 mb-2">
                                <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded-full">Астана</span>

                            </div>
                            <p className="text-lg font-semibold">Вакансия</p>
                        </div>

                        {/* Блок 2 */}
                        <div className="absolute top-[5%] sm:left-[40%]  w-[50%] sm:w-[35%] h-[180px] bg-green-300 p-4 rounded-lg shadow-md">
                            <div className="flex gap-2 mb-2">
                                <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded-full">Астана</span>

                            </div>
                            <p className="text-lg font-semibold">Вакансия</p>
                        </div>

                        {/* Блок 3 */}
                        <div className="absolute sm:w-[30%] w-[45%] h-[150px] sm:top-[45%] top-[30%] sm:left-[55%] left-[55%] bg-cyan-300 p-4 rounded-lg shadow-md">
                            <div className="flex gap-2 mb-2">
                                <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded-full">Астана</span>

                            </div>
                            <p className="text-lg font-semibold">Вакансия</p>
                        </div>

                        {/* Изображения */}
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Person 1"
                            className="opacity-0 sm:opacity-100 absolute w-[13%]  h-[60px] top-[10%] left-[22%] rounded-lg shadow-md bg-red-200"
                        />
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Person 2"
                            className="absolute sm:w-[21%] w-[18%] h-[60px] sm:h-[100px] sm:top-[5%] top-[15%] sm:left-[78%] left-[55%] rounded-lg shadow-md bg-red-200"
                        />
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Person 3"
                            className="absolute sm:w-[13%] w-[18%] h-[60px] sm:top-[29%] top-[10%] sm:left-[78%] left-[75%] rounded-lg shadow-md bg-red-200"
                        />
                        <img
                            src="https://via.placeholder.com/200x100"
                            alt="Group"
                            className="absolute sm:w-[22%] w-[40%] h-[100px] sm:top-[65%] top-[65%] sm:left-[30%] left-[55%] rounded-lg shadow-md bg-red-200"
                        />
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Person 4"
                            className=" opacity-0 sm:opacity-100 absolute w-[13%] h-[60px] top-[65%] left-[15%] rounded-lg shadow-md bg-red-200"
                        />
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Person 5"
                            className="opacity-0 sm:opacity-100 absolute w-[13%]  h-[60px] top-[80%] left-[55%] rounded-lg shadow-md bg-red-200"
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Team
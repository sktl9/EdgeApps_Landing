"use client";
import { useRef, useState } from "react";
import style from "../experts/experts.module.scss";
import classNames from "classnames";
import ButtonLink from "@/public/static/UI/ButtonLink";
import content from "../../public/content.json";


const Experts = () => {
    const blocks = content.experts.members

    // Состояние для текущего видимого индекса
    const [currentIndex, setCurrentIndex] = useState(0);

    // Обработчики для кнопок
    const handleNext = () => {
        if (currentIndex < blocks.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <>
            <div className="px-[10%] mt-[50px]">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex justify-between pb-4 border-b border-gray-400">
                        <span className="">{content.experts.title}</span>

                    </div>
                    <div className="relative w-full flex flex-col items-center">
                        <span className="text-[52px] font-medium mb-[20px]">{content.experts.experts_title}</span>
                        <div className="relative w-full ">
                            <div className="flex transition-transform duration-300">
                                <div className={`block_container flex gap-[10px] gap-y-4 w-full flex-wrap rounded-[5%] justify-center sm:justify-normal bg-white`}>
                                    {blocks.map((block) => (
                                        <div
                                            key={block.id}
                                            className="w-full xl:max-w-[24%] max-w-[48%] flex flex-col items-center min-w-[226px]" // flex-1 позволяет элементам адаптироваться
                                        >
                                            <div key={block.id} className={`${style.block1}`}>
                                                <img src={`/static/image/${block.image}`} alt="" />
                                            </div>
                                            {/* Текст под квадратом */}
                                            <div className="flex flex-col justify-center text-center mt-[10px]">
                                                <span>{block.title}</span>
                                                <p className="mt-2 text-center text-[15px] font-extralight w-[90%]">{block.content}</p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Experts
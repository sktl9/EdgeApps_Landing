"use client";
import { useRef, useState } from "react";
import style from "../experts/experts.module.scss";
import classNames from "classnames";
import ButtonLink from "@/public/static/UI/ButtonLink";

const Experts = () => {
    const blocks = [
        { id: 1, image: 'sergey.jpg', title: 'Гусаков Сергей', content: 'Middle Frontend Developer' },
        { id: 2, image: 'kuralay.jpg', title: 'Сарсенова Куралай', content: 'Project Manager'  },
        { id: 3, image: 'salima.jpg', title: 'Каирбекова Салима', content: 'HR' },
        { id: 4, image: 'igor.jpg', title: 'Гусаков Игорь', content: 'Team-Lead Frontend Developer' },
        { id: 5, image: 'irina.jpg', title: 'Михеева Ирина', content: 'Lead Analyst'  },
        { id: 6, image: 'ainur.jpg', title: 'Исмагулова Айнур', content: 'Analyst'  },
        { id: 7, image: 'dauren.jpg', title: 'Абсаматов Даурен', content: 'Analyst'  },
        { id: 8, image: 'faina.jpg', title: 'Бейсенбекова Фаина', content: 'Analyst'  },
        { id: 9, image: 'aizan.jpg', title: 'Гусакова Айжан', content: 'Analyst'  },
        { id: 9, image: 'anastsiya.jpg', title: 'Щербакова Анастасия', content: 'Analyst'  },
    ];

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
                        <span className="">Наша команда</span>

                    </div>
                    <div className="relative w-full flex flex-col items-center">
                        <span className="text-[52px] font-medium mb-[20px]">Эксперты</span>
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
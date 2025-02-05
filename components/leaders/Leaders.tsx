"use client";
import { useRef, useState } from "react";
import style from "../Values/values.module.scss";
import classNames from "classnames";
import ButtonLink from "@/public/static/UI/ButtonLink";

const Value = () => {
    const blocks = [
        { id: 1, image: 'peoples.png', title: 'Блок 1', content: 'Мы – команда. Доверие и поддержка – основа нашего единства.' },
        { id: 2, image: 'abitions.png', title: 'Блок 2', content: 'Мы ставим далеко идущие цели, решаем сложные задачи и достигаем высоких результатов.' },
        { id: 3, image: 'partners.png', title: 'Блок 3', content: 'Любые отношения мы рассматриваем как партнерские – равноправные и взаимовыгодные. Мы честны друг с другом и со своими партнёрами.' },
        { id: 4, image: 'adaptive.png', title: 'Блок 4', content: 'Мы – компания высоких скоростей. Изменения для нас – это вызов и новые возможности.' },
        { id: 5, image: 'responsibility.png', title: 'Блок 5', content: 'Мы понимаем и принимаем ответственность за себя и компанию. Мы отвечаем за результат и взятые на себя обязательства.' },
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
                        <span className="">Ценности</span>

                    </div>
                    <div className="relative w-full flex flex-col items-center">
                        <div className="relative w-full overflow-hidden">
                            <div className="flex transition-transform duration-300">
                                <div className="flex justify-center gap-[10px] gap-y-4 w-full flex-wrap rounded-[5%]  bg-white">
                                {blocks.map((block) => (
                                        <div
                                            key={block.id}
                                            className="w-full xl:max-w-[19%] lg:max-w-[48%] sm:max-w-full" // flex-1 позволяет элементам адаптироваться
                                        >
                                            <div className={style.block1}>
                                                <img src={`/static/image/${block.image}`} alt="" />
                                            </div>
                                            {/* Текст под квадратом */}
                                            <p className="mt-2 text-center text-[15px] font-extralight">{block.content}</p>
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

export default Value
"use client";
import { useRef, useState } from "react";
import style from "../../public/scss/components/media.module.scss";
import classNames from "classnames";
import ButtonLink from "@/public/static/UI/ButtonLink";

const Media = () => {
    const blocks = [
        { id: 1, title: 'Блок 1', content: 'Контент блока 1' },
        { id: 2, title: 'Блок 2', content: 'Контент блока 2' },
        { id: 3, title: 'Блок 3', content: 'Контент блока 3' },
        { id: 4, title: 'Блок 4', content: 'Контент блока 4' },
        { id: 5, title: 'Блок 5', content: 'Контент блока 5' },
        { id: 6, title: 'Блок 6', content: 'Контент блока 6' },
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
                        <span className="">Надежный ИТ-партнер</span>
                        <ButtonLink href="#ultraFooter" text="Смотреть все" />
                    </div>
                    <div className=" relative w-full flex flex-col items-center">
                        {/* Контейнер для блоков */}<button
                            onClick={handlePrev}
                            className="z-[1000] absolute top-[42%] -translate-y-1/2 left-[-10px] px-3 py-2 text-black hover:text-[#ffffff] bg-white rounded-full shadow-md disabled:opacity-0 hover:bg-[#0041F9] transition-colors duration-300"

                            disabled={currentIndex === 0}
                        >
                            ←
                        </button>
                        <button
                            onClick={handleNext}
                            className="z-[1000]  absolute top-[42%] -translate-y-1/2 right-[-10px] px-3 py-2 text-black hover:text-[#ffffff] bg-white rounded-full shadow-md disabled:opacity-0 hover:bg-[#0041F9] transition-colors duration-300"
                            disabled={currentIndex >= blocks.length - 2}
                        >
                            →
                        </button>
                        <div className="relative w-full overflow-hidden">

                            <div
                                className="flex transition-transform duration-300"
                                style={{ transform: `translateX(-${currentIndex * 200}px)` }} // 200px = ширина одного блока
                            >
                                <div className="flex gap-[1%] gap-y-4">
                                    {blocks.map((block) => (
                                        <div
                                            key={block.id}
                                            className="  flex-col"
                                        >
                                            {/* Синий квадрат */}
                                            <div className={block.id % 2 === 0 ? style.block1 : style.block2}>
                                                <span className="relative text-lg font-bold bg-[#defdff] rounded-[6rem] py-[5px] px-[8px] z-[1000]">
                                                    {block.title}
                                                </span>
                                            </div>

                                            {/* Текст под синим квадратом */}
                                            <p className="mt-2 text-center">{block.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Кнопки переключения */}

                    </div>

                </div>
            </div>
        </>
    );
};

export default Media
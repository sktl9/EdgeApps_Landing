"use client";
import ButtonLink from "@/public/static/UI/ButtonLink";
import style from "../../public/scss/components/academy.module.scss";
import AcademyBg from '../../public/academyBg.svg';
import content from "../../public/content.json";

interface ProjectsProps {
    id?: string;
}

const Academy: React.FC<ProjectsProps> = ({ id }) => {

    return (
        <>
            <div id={id} className="px-[10%] mt-[100px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col bg-[#f9f9f9] rounded-[2rem] overflow-hidden">
                        <div className="min-h-[500px] p-[50px] flex overflow-hidden flex-col lg:flex-row">
                            <div className="lg:max-w-[60%] flex flex-col gap-[20px]">
                                <span className="text-[22px] font-bold  lg:text-[55px]">{content.academy.title}</span>
                                <div className=" flex flex-col lg:flex-row ">
                                    <div className="flex flex-col gap-[5px] lg:w-[50%] text-gray-500">
                                        {content.academy.description}                                    </div>

                                </div>
                                {/* <ButtonLink href={123} text="Хочу учиться" /> */}
                            </div>

                            <div className="relative flex flex-col w-full items-center mt-[50px] gap-[20px]">
                                {/* SVG фон */}
                                <div className="absolute z-[1] w-[100%] sm:w-[90%] sm md:w-[80%] lg:w-[120%] 2xl:top-[20%] lg:top-[15%] md:top-[27%] sm:top-[20%] top-[13%] lg:left-[45%] left-[47%]"
                                    style={{
                                        transform: 'translate(-50%, -50%)', // Центрируем SVG относительно второго кружка
                                        transformOrigin: 'center center', // Точка вращения — центр SVG
                                    }}>
                                    <img
                                        src="/academyBg.svg"
                                        alt="Background"
                                        className={style.spin_slow} // Класс для анимации вращения
                                    />
                                </div>

                                {/* Контент */}
                                <div className="flex flex-row z-[100] relative">
                                    <div className="bg-red-200 w-[10vw] lg:w-[8vw] h-[10vw] lg:h-[8vw] p-[5%] rounded-full"></div>
                                    <div className="bg-red-200 w-[10vw] lg:w-[8vw] h-[10vw] lg:h-[8vw] p-[5%] rounded-full"></div>
                                    <div className="bg-red-200 w-[10vw] lg:w-[8vw] h-[10vw] lg:h-[8vw] p-[5%] rounded-full"></div>
                                    <span className="flex items-center text-[2vw] font-thin">+40</span>
                                </div>
                                <span className="text-[20px] font-normal max-w-[40%]">
                                    {content.academy.additional_info}
                                </span>
                            </div>

                        </div>
                        <div className={style.marqueeContainer}>
                            {/* Первая полоса - слева направо */}
                            <div className={`${style.marquee} ${style.first}`}>
                                <span>
                                    {content.academy.marquee_text}                                </span>

                            </div>

                            {/* Вторая полоса - справа налево */}
                            <div className={`${style.marquee} ${style.second}`}>
                                <span>
                                    {content.academy.marquee_text}                                    </span>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Academy;
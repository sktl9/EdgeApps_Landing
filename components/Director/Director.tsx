"use client";
import ButtonLink from "@/public/static/UI/ButtonLink";
import style from "../../public/scss/components/academy.module.scss";
import AcademyBg from '../../public/academyBg.svg';

const Director = ({ setActivePage }: any) => {

    return (
        <>
            <div className="px-[10%] mt-[50px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col  border rounded-[2rem] overflow-hidden">
                        <div className="h-auto p-[20px] sm:p-[50px] flex overflow-hidden flex-col gap-[50px]">
                            <div className="h-[30%] hidden w-full sm:flex flex-row justify-center gap-[50px]">
                                <div className="flex flex-col w-[31%] items-center gap-[10px] text-center">
                                    <span className="sm:text-[50px] text-[30px]">67+</span>
                                    <span className="max-w-[70%]">клиентов в enterprise-сегменте</span>
                                </div>
                                <div className="flex flex-col w-[31%] items-center gap-[10px] text-center">
                                    <span className="sm:text-[50px] text-[30px]">ТОП-5</span>
                                    <span className="max-w-[70%] ">Skolkovo Fintech Hub</span>
                                </div>
                                <div className="flex flex-col w-[31%] items-center gap-[10px] text-center">
                                    <span className="sm:text-[50px] text-[30px]">1000+</span>
                                    <span className="max-w-[70%]">сотрудников</span>
                                </div>
                            </div>
                            <div className="lg:flex flex-row bg-[#f9f9f9] rounded-[2rem] h-[500px] w-full hidden">
                                <div className="flex justify-center  w-[50%]">
                                    <img src={`/static/image/Alzhan.png`} alt="" />
                                </div>
                                <div className="w-[50%] px-[5%] flex flex-col gap-4 justify-center">
                                    <span className="text-[30px] font-semibold">Абдрахманов Альжан</span>
                                    <span className="text-[10px] font-light">Генеральный директор EdgeApps</span>
                                    <span className="text-[15px] font-light">Бизнес EdgeApps выстроен таким образом, чтобы легко трансформировать портфель продуктов и услуг вслед за изменяющимися потребностями рынка. Модель data-driven была положена в основу компании и культивировалась все эти годы. В итоге мы пришли к тому, что прирастаем в объеме бизнеса, не теряя гибкости и скорости реакции.</span>
                                </div>
                            </div>
                            <div className="flex flex-col  rounded-[2rem]  h-auto w-full lg:hidden gap-[30px]" >
                                <div className="flex flex-row gap-[15px] items-center">
                                    <div className="bg-white rounded-full min-w-[70px] w-[70px] h-[70px] overflow-hidden">
                                        <img src={`/static/image/Alzhan.png`} className="h-[130%] mx-auto" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[18px] font-semibold">Абдрахманов Альжан</span>
                                        <span className="text-[10px]">Генеральный директор EdgeApps</span>
                                    </div>
                                </div>
                                <span className="text-[15px] font-light">Бизнес EdgeApps выстроен таким образом, чтобы легко трансформировать портфель продуктов и услуг вслед за изменяющимися потребностями рынка. Модель data-driven была положена в основу компании и культивировалась все эти годы. В итоге мы пришли к тому, что прирастаем в объеме бизнеса, не теряя гибкости и скорости реакции.</span>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Director;
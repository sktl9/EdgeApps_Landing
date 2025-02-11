"use client";
import ButtonLink from "@/public/static/UI/ButtonLink";
import style from "../../public/scss/components/academy.module.scss";
import AcademyBg from '../../public/academyBg.svg';
import content from "../../public/content.json";


const Director = ({ setActivePage }: any) => {

    return (
        <>
            <div className="px-[10%] mt-[50px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col  border rounded-[2rem] overflow-hidden">
                        <div className="h-auto p-[20px] sm:p-[50px] flex overflow-hidden flex-col gap-[50px]">
                            <div className="h-[30%] hidden w-full sm:flex flex-row justify-center gap-[50px]">
                                <div className="flex flex-col w-[31%] items-center gap-[10px] text-center">
                                    <span className="sm:text-[50px] text-[30px]">{content.director.company_stats.count}</span>
                                    <span className="max-w-[70%]">{content.director.company_stats.clients}</span>
                                </div>
                                <div className="flex flex-col w-[31%] items-center gap-[10px] text-center">
                                    <span className="sm:text-[50px] text-[30px]">{content.director.company_stats.count2}</span>
                                    <span className="max-w-[70%] ">{content.director.company_stats.ranking}</span>
                                </div>
                                <div className="flex flex-col w-[31%] items-center gap-[10px] text-center">
                                    <span className="sm:text-[50px] text-[30px]">{content.director.company_stats.count3}</span>
                                    <span className="max-w-[70%]">{content.director.company_stats.employees}</span>
                                </div>
                            </div>
                            <div className="lg:flex flex-row bg-[#f9f9f9] rounded-[2rem] h-[500px] w-full hidden">
                                <div className="flex justify-center  w-[50%]">
                                    <img src={`/static/image/Alzhan.png`} alt="" />
                                </div>
                                <div className="w-[50%] px-[5%] flex flex-col gap-4 justify-center">
                                    <span className="text-[30px] font-semibold">{content.director.director.name}</span>
                                    <span className="text-[10px] font-light">{content.director.director.position}</span>
                                    <span className="text-[15px] font-light">{content.director.director.statement}</span>
                                </div>
                            </div>
                            <div className="flex flex-col  rounded-[2rem]  h-auto w-full lg:hidden gap-[30px]">
                                <div className="flex flex-row gap-[15px] items-center">
                                    <div className="bg-white rounded-full min-w-[70px] w-[70px] h-[70px] overflow-hidden">
                                        <img src={`/static/image/Alzhan.png`} className="h-[130%] mx-auto" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[18px] font-semibold">{content.director.director.name}</span>
                                        <span className="text-[10px]">{content.director.director.position}</span>
                                    </div>
                                </div>
                                <span className="text-[15px] font-light">{content.director.director.statement}</span>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Director;
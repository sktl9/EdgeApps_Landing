"use client";
import style from "../../public/scss/components/advantages.module.scss";
import content from "../../public/content.json";


const Advantages = ({ setActivePage }: any) => {

    return (
        <>
            <div className="px-[10%] mt-[50px]">
                <div className="flex flex-col gap-[20px]">
                    <span className="pb-4 border-b border-gray-400">{content.advantages.title}</span>
                    <div className="bg-[#f9f9f9] rounded-[2rem] min-h-[600px] h-auto p-[50px] flex">
                        <div className="lg:max-w-[60%] flex flex-col gap-[30px]">
                            <span className="text-[22px] font-bold  lg:text-[55px]">{content.advantages.subtitle}</span>
                            <div className=" flex flex-col lg:flex-row gap-[20px]">
                                <div className="flex flex-col gap-[5px] lg:w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        1
                                    </span>
                                    <span className="text-[19px]">{content.advantages.advantages[0].title}</span>
                                    <span className="text-[12px]">{content.advantages.advantages[0].description}</span>
                                </div>
                                <div className="flex flex-col gap-[5px] lg:w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        2
                                    </span>
                                    <span className="text-[19px]">{content.advantages.advantages[1].title}</span>
                                    <span className="text-[12px]">{content.advantages.advantages[1].description}</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-[20px]">
                                <div className="flex flex-col gap-[5px] lg:w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        3
                                    </span>
                                    <span className="text-[19px]">{content.advantages.advantages[2].title}</span>
                                    <span className="text-[12px]">{content.advantages.advantages[2].description}</span>
                                </div>
                                <div className="flex flex-col gap-[5px] lg:w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        4
                                    </span>
                                    <span className="text-[19px]">{content.advantages.advantages[3].title}</span>
                                    <span className="text-[12px]">{content.advantages.advantages[3].description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Advantages
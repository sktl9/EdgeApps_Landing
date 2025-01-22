"use client";
import style from "../../public/scss/components/advantages.module.scss";

const Advantages = ({ setActivePage }: any) => {

    return (
        <>
            <div className="px-[10%] mt-[50px]">
                <div className="flex flex-col gap-[20px]">
                    <span className="pb-4 border-b border-gray-400">Надежный ИТ-партнер</span>
                    <div className="bg-[#f9f9f9] rounded-[2rem] min-h-[600px] h-auto p-[50px] flex">
                        <div className="lg:max-w-[60%] flex flex-col gap-[30px]">
                            <span className="text-[55px]">Преимущества работы с edgeApps</span>
                            <div className=" flex gap-[20px]">
                                <div className="flex flex-col gap-[5px] w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        1
                                    </span>
                                    <span className="text-[19px]">Высокие скорости</span>
                                    <span className="text-[12px]">Развитая внутренняя автоматизация, быстрое принятие решений и гибкое управление проектами</span>
                                </div>
                                <div className="flex flex-col gap-[5px] max-w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        2
                                    </span>
                                    <span className="text-[19px]">Сильные команды</span>
                                    <span className="text-[12px]">Стабильные команды, низкая текучесть кадров, инвестиции в развитие сотрудников</span>
                                </div>

                            </div>
                            <div className="flex gap-[20px]">
                                <div className="flex flex-col gap-[5px] w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        3
                                    </span>
                                    <span className="text-[19px]">Центры компетенций</span>
                                    <span className="text-[12px]">Формирование команд с подтвержденным опытом работы и компетенциями в отрасли</span>
                                </div>
                                <div className="flex flex-col gap-[5px] max-w-[50%]">
                                    <span className="bg-[#c4ffb7] w-[40px] h-[40px] flex items-center justify-center rounded-full text-black font-extralight">
                                        4
                                    </span>
                                    <span className="text-[19px]">Опыт работы с ТОП-50</span>
                                    <span className="text-[12px]">Знание потребностей и процессов крупных и территориально-распределенных холдингов</span>
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
"use client";

import React, { useEffect, useState } from "react";
import style from "../../public/scss/components/projects.module.scss";
import { useInView } from "react-intersection-observer";

// http://localhost:3000/ru/authorization/

const Price = () => {

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.actual}>
                    <span className={style.actualSpan}>Актуальное</span>
                    <div className={style.flex}>
                    <span className="bg-red-500">Продукты</span>
                        <span className={style.secondHalfActual}>Собственные продукты и программное обеспечение ведущих вендоров для решения бизнес-задач любой сложности</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price;

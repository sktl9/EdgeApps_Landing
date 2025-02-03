import React from 'react';
import Link from 'next/link';
import style from './ButtonLink.module.scss';

interface ButtonLinkProps {
    href: string | number; // Укажите правильный тип данных для `href`
    text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, text}) => {
    return (
        <Link href={String(href)} className={`${style.callUs} w-[100px] `}>
            <span>{text}</span>
        </Link>
    );
};

export default ButtonLink;

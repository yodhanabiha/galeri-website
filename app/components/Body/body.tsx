"use client";
import style from "./body.module.css"
import { showSidebar, useSelector } from "@/lib/redux";

interface Children {
    children: React.ReactNode
}

export const Body = (children: Children) => {
    const showValue = useSelector(showSidebar);

    return (
        <div className={`${style.body} ${showValue ? `${style.full}` : ''}`}>
            {children.children}
        </div>
    )
}
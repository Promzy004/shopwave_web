"use client"

import React from "react";

interface IHeadingProps {
    title: string,
    desc: string
}

const Heading: React.FC<IHeadingProps> = ({ title, desc }) => {
    return (
        <div className="mx-auto flex flex-col gap-4 items-center text-center w-[80%] max-w-[614px] mb-10">
            <h2 className="text-5xl">{title}</h2>
            <p>{desc}</p>
        </div>
    );
}
 
export default Heading;
import Image from "next/image";
import React from "react";

interface IProductCardProps {
    title: string,
    desc: string,
    amount: number,
    status: string,
    image: string
}

const ProductCard: React.FC<IProductCardProps> = ({ title, desc, amount, status, image }) => {
    return (
        <div className="flex flex-col gap-5 bg-white rounded-lg shadow-lg p-4">
            <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                <Image src={image} alt="" fill className="object-cover object-top" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="mb-5">{desc}</p>
                <div className="flex justify-between">
                    <p>{amount}</p>
                    <p className={`${status === "Still Available" ? "text-green-500" : "text-red-500"} text-xs`}>{status}</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCard;
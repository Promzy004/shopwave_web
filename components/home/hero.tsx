"use client"

import Image from "next/image";
import manLeft from "@/assets/images/man-hero.png"
import manRight from "@/assets/images/man-hero2.png"
import womenHero from "@/assets/images/women-hero.png"
import groupHero from "@/assets/images/group-hero.png"


const Hero = () => {
    return (
        <section className="md:h-screen box-border pt-20 px-4 md:px-10 mb-10">
            <div className="grid md:grid-cols-3 gap-5 py-10">
                <div className="h-full relative hidden md:flex justify-center rounded-xl bg-[#e0e0e0] pt-40 box-border">
                    <Image src={manLeft} alt="" className="w-[90%] bottom-0 absolute" />
                </div>
                <div className="h-full flex flex-col justify-between gap-5">
                    <div className="bg-[#e0e0e0] flex justify-center pt-2 rounded-xl px-3">
                        <Image src={groupHero} alt="" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="uppercase text-center text-5xl lg:text-6xl">
                            ultimate 
                            <br /> 
                            <span className="text-8xl lg:text-9xl">sale</span>
                        </h3>
                        <p className="uppercase mt-2">New Collection</p>
                        <button className="uppercase mt-2 bg-black py-3 px-5 rounded-2xl text-white text-sm">Shop now</button>
                    </div>
                    <div className="w-full">
                        <Image src={womenHero} alt="" className="w-full" />
                    </div>
                </div>
                <div className="relative h-full hidden md:flex justify-center rounded-xl bg-[#e0e0e0] pt-40 box-border">
                    <Image src={manRight} alt="" className="w-[60%] left-10 bottom-0 absolute" />
                </div>
            </div>

            {/* Brands section here */}
            <div></div>
        </section>
    );
}
 
export default Hero;
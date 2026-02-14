"use client"

import Link from "next/link";
import { Store } from "@/assets/icons";
import { User } from "@/assets/icons";
import { Search } from "@/assets/icons";
import { Ham } from "@/assets/icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 top-0">
            <NavbarDesktop />
            <NavbarMobile />
        </div>
    );
}
 
export default Navbar;




const NavbarDesktop = () => {
    return (
        <header className="hidden md:flex justify-between items-center px-10 py-5">
            <Link href="" className="text-4xl">ShopWave</Link>

            <div className="flex gap-5">
                <Link href="">Home</Link>
                <Link href="">Shop</Link>
                <Link href="">Products</Link>
                <Link href="">Contact us</Link>
            </div>
            <div className="flex gap-5">
                <Link href="">
                    <Search />
                </Link>
                <Link href="">
                    <User />
                </Link>
                <Link href="">
                    <Store />
                </Link>
            </div>
        </header>
    );
}


const NavbarMobile = () => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    useEffect(() => {
        if(isOpen) {
            window.document.body.style.overflowY = "hidden";
        } else {
            window.document.body.style.overflowY = "";
        }
        
        return () => {
            window.document.body.style.overflowY = "";
        };
    }, [isOpen]);

    return (
        <header className="flex md:hidden justify-between items-center px-10 py-5">
            <Link href="" className="text-4xl">ShopWave</Link>
            
            <div className="flex gap-6 items-center">
                <Link href="">
                    <User />
                </Link>
                <button onClick={() =>setIsOpen(true)}>
                    <Ham />
                </button>
            </div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <div className="w-full fixed z-10 top-0 right-0">
                        <div 
                            className="fixed top-0 right-0 z-10 w-full h-screen bg-black opacity-20"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav 
                            className="flex flex-col gap-5 fixed top-0 right-0 z-20 w-[60%] px-5 py-7 h-screen bg-red-300"
                            initial={{ x: "50%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "50%", opacity: 0 }}
                            transition={{ duration: 0.2, type: "tween" }}
                        >
                            <Link href="" className="text-xl">Home</Link>
                            <Link href="" className="text-xl">Shop</Link>
                            <Link href="" className="text-xl">Products</Link>
                            <Link href="" className="text-xl">Contact us</Link>
                            <Link href="" className="text-xl">
                                <Store />
                            </Link>
                        </motion.nav>
                    </div>
                )}
            </AnimatePresence>
        </header>
    );
}
 
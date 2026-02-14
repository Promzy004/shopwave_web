"use client"

import Image from "next/image";
import loginImage from "@/assets/images/login-image.png";
import ConfirmationForm from "./confirmationForm";

const Confirmation = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-100">
                <Image 
                    src={loginImage}
                    alt="Register"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                <ConfirmationForm />
            </div>
        </div>
    );
}
 
export default Confirmation;
"use client"

import Image from "next/image";
import registerImage from "@/assets/images/register-image.png";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-100">
                <Image 
                    src={registerImage}
                    alt="Register"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                <LoginForm />
            </div>
        </div>
    );
}
 
export default Login;
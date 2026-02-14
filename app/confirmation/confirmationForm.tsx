"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

const ConfirmationForm = () => {
    const [ code, setCode ] = useState<string>('')
    const [ codeError, setCodeError ] = useState<string>()

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            x: -50,
            transition: {
                duration: 0.3
            }
        }
    };

    // handles form input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
    }

    const validate_input = () => {
        const regex = /[0-9]{6}/

        if (!code) return 'verification code is required'
        if (!regex.test(code)) return 'Code must be 6 digits only'
        
        return '';
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation_errors = validate_input();
        setCodeError(validation_errors)

        if (Object.keys(validation_errors).length === 0) {
            alert(code)
        }
    };

    return (
        <motion.div 
            className="w-full max-w-[500px]"
            initial="hidden"
            animate="visible"
            variants={formVariants as any}
        >
            {/* Logo/Brand */}
            <motion.h2 
                className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                SHOPWAVE
            </motion.h2>

            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                {/* Title */}
                <motion.h4 
                    className="text-lg md:text-xl font-semibold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Forget Password
                </motion.h4>

                {/* Form Fields */}
                <motion.div 
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {/* Email input section */}
                    <div>
                        <input
                            type="text"
                            name="code"
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={`${codeError && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                        />
                        <span className="text-xs text-red-400">{codeError}</span>
                    </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors mt-8"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    Send Confirmation code
                </motion.button>

                {/* Login Link */}
                <motion.p 
                    className="text-center text-sm text-gray-600 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Already have an account?{" "}
                    <Link 
                        href="/login" 
                        className="text-blue-600 hover:underline font-medium"
                    >
                        login
                    </Link>
                </motion.p>
            </form>

            {/* Terms & Conditions */}
            <motion.p 
                className="text-xs text-gray-500 text-right mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                SHOPWAVE Terms & Conditions
            </motion.p>
        </motion.div>
    );
}
 
export default ConfirmationForm;
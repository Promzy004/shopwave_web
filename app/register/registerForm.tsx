"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

interface IFormData {
    firstname: string,
    lastname: string,
    email: string,
    tel: string,
    password: string,
    cpassword: string
}

interface IFormErrors {
    firstname?: string,
    lastname?: string,
    email?: string,
    tel?: string,
    password?: string,
    cpassword?: string
}

const RegisterForm = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [ formData, setFormData ] = useState<IFormData>({
        firstname: "",
        lastname: "",
        email: "",
        tel: "",
        password: "",
        cpassword: ""
    })
    const [ formErrors, setFormErrors ] = useState<IFormErrors>({})

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    const handleValidate = () => {
        const errors:IFormErrors = {}

        //email validation
        const email_regex = /^([a-z]+(\.?)(\w+)?@[a-z]+(-?)(\w+)?(\.[a-z]+)+)$/i
        const email_test = email_regex.test(formData.email)

        if(!formData.email.trim()) {
            errors.email = 'Email is required'
        } else if (!email_test) {
            errors.email = 'Invalid Email Address'
        }

        //firstname validation
        if(!formData.firstname.trim()) {
            errors.firstname = "firstname is required"
        }

        //lastname validation
        if(!formData.lastname.trim()) {
            errors.firstname = "lastname is required"
        }

        //password validation
        const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@,%$#:])[a-zA-Z0-9@,%$#:]{8,}$/i
        const password_test = password_regex.test(formData.password)

        //password validation
        if(!formData.password.trim()){
            errors.password = 'Password is required'
        } else if (!password_test) {
            errors.password = 'Password must contain capital letter, small letter, number and special chars'
        } else if (formData.password !== formData.cpassword) {
            errors.password = 'password and confirm password does not match'
            errors.cpassword = 'password and confirm password does not match'
        }

        //confirm password validation
        if(!formData.cpassword.trim()) {
            errors.cpassword = "confirm password is required"
        }

        return errors
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation_errors = handleValidate();
        setFormErrors(validation_errors)

        if (Object.keys(validation_errors).length === 0) {
            console.log(formData)
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
                    className="text-2xl md:text-3xl font-semibold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Create Account
                </motion.h4>

                {/* OAuth Buttons */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {/* Google Button */}
                    <button 
                        type="button"
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span className="text-sm font-medium">Sign up with Google</span>
                    </button>

                    {/* Email Button */}
                    <button 
                        type="button"
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <Mail className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium">Sign up with Email</span>
                    </button>
                </motion.div>

                {/* OR Divider */}
                <motion.div 
                    className="flex items-center gap-4 my-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                    <span className="text-gray-500 font-medium text-sm">OR</span>
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                </motion.div>

                {/* Form Fields */}
                <motion.div 
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {/* First Row - First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                onChange={handleChange}
                                className={`${formErrors.firstname && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                            />
                            <span className="text-xs text-red-400">{formErrors.firstname}</span>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                onChange={handleChange}
                                className={`${formErrors.lastname && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                            />
                            <span className="text-xs text-red-400">{formErrors.lastname}</span>
                        </div>
                    </div>

                    {/* Second Row - Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="Email Address"
                                className={`${formErrors.email && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                            />
                            <span className="text-xs text-red-400">{formErrors.email}</span>
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="tel"
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className={`${formErrors.tel && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                            />
                            <span className="text-xs text-red-400">{formErrors.tel}</span>
                        </div>
                    </div>

                    {/* Third Row - Password & Confirm Password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                className={`${formErrors.password && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                            />
                            <span className="text-xs text-red-400">{formErrors.password}</span>
                        </div>
                        <div>
                            <input
                                type="password"
                                name="cpassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                className={`${formErrors.cpassword && "border-red-400 focus:border-red-400"} w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400`}
                            />
                            <span className="text-xs text-red-400">{formErrors.cpassword}</span>
                        </div>
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
                    Create Account
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
                        onClick={() => setIsLogin(true)}
                    >
                        Login
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
 
export default RegisterForm;
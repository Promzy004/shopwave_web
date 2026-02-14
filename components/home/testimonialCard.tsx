"use client"


import { useState } from "react";
import image1 from "@/assets/images/testimonial/testimonial1.png";
import image2 from "@/assets/images/testimonial/testimonial2.png";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    id: number;
    image: any;
    quote: string;
    rating: number;
    name: string;
    title: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        image: image2,
        quote: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        rating: 5,
        name: "James K.",
        title: "Traveler"
    },
    {
        id: 2,
        image: image1,
        quote: "I was looking for. Thank you for making it feasant and most of all hassle free! All are great.*",
        rating: 5,
        name: "John W.",
        title: "Customer"
    },
    {
        id: 3,
        image: image1,
        quote: "I was looking for. Thank you for making it feasant and most of all hassle free! All are great.*",
        rating: 5,
        name: "John W.",
        title: "Customer"
    },
    // Add more testimonials as needed
];

const TestimonialCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    // Animation variants for the cards
    const cardVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            zIndex: 10
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.8
        })
    };

    const sideCardVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 0.65
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -500 : 500,
            opacity: 0
        })
    };

    return (
        <div className="px-4 sm:px-6 md:px-10 py-12 md:py-20">
            <div className="max-w-[1200px] mx-auto relative">
                {/* Testimonials Container */}
                <div className="flex items-center justify-center relative min-h-[400px]">
                    {/* Left Partial Card - Hidden on mobile and tablet */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={`left-${prevIndex}`}
                            custom={direction}
                            variants={sideCardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                            className="hidden xl:block bg-white shadow-lg p-4 lg:p-6 rounded-tl-lg rounded-bl-lg"
                        >
                            <div className="relative w-[100px] lg:w-[140px] h-[100px] lg:h-[140px] bg-[#e5e5e5] rounded-lg overflow-hidden">
                                <div className="absolute -bottom-2 lg:-bottom-3 -right-2 lg:-right-3 w-full h-full">
                                    <Image 
                                        src={testimonials[prevIndex].image} 
                                        alt="" 
                                        className="w-full h-full object-cover rounded-lg" 
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Center Active Card */}
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 }
                            }}
                            className="bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-start w-full md:max-w-[600px] lg:max-w-[700px]"
                        >
                            {/* Image Section */}
                            <motion.div 
                                className="relative shrink-0 mx-auto md:mx-0"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <div className="relative w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] bg-[#e5e5e5] rounded-lg overflow-hidden">
                                    <div className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-3 w-full h-full">
                                        <Image 
                                            src={currentTestimonial.image} 
                                            alt={currentTestimonial.name} 
                                            className="w-full h-full object-cover rounded-lg" 
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div 
                                className="flex flex-col gap-3 md:gap-4 py-2 text-center md:text-left"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    "{currentTestimonial.quote}"
                                </p>
                                
                                {/* Star Rating */}
                                <div className="flex gap-1 justify-center md:justify-start">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ 
                                                delay: 0.4 + (i * 0.1),
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                        >
                                            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 pt-3 md:pt-4 mt-2">
                                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm">
                                        {currentTestimonial.title}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right Partial Card - Hidden on mobile and tablet */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={`right-${nextIndex}`}
                            custom={direction}
                            variants={sideCardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                            className="hidden xl:block bg-white shadow-lg p-4 lg:p-6 rounded-tr-lg rounded-br-lg"
                        >
                            <div className="relative w-[100px] lg:w-[140px] h-[100px] lg:h-[140px] bg-[#e5e5e5] rounded-lg overflow-hidden">
                                <div className="absolute -bottom-2 lg:-bottom-3 -right-2 lg:-right-3 w-full h-full">
                                    <Image 
                                        src={testimonials[nextIndex].image} 
                                        alt="" 
                                        className="w-full h-full object-cover rounded-lg" 
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-3 sm:gap-4 mt-8 md:mt-12">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevTestimonial}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-gray-600 hover:text-gray-900"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextTestimonial}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-gray-600 hover:text-gray-900"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialCard;
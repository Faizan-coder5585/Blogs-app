"use client"
import Image from "next/image";
import Link from "next/link";
import hero from "./public/home/bghome.jpg"
import { motion } from 'framer-motion';
import { IoLogoFacebook } from "react-icons/io";
import { GoCodescanCheckmark } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import Header from "../components/Header";




const content = [
    {
        title: 'Start Turning your Leads',
        descriptionOne: 'free social media Review',
        heading: "Starting from ",
        descriptionTow: '100% Guaranteed Results',
        descriptionThree: 'Flexible Payment Options',
        iconOne: <IoLogoFacebook className='md:h-[45px] md:w-[45px] inline mr-2' />,
        iconTwo: <GoCodescanCheckmark className='md:h-[45px] md:w-[45px] inline mr-2' />,
        iconThree: <MdPayment className='md:h-[45px] md:w-[45px]  inline mr-2' />,
    },
];

const Hero = () => {
    return (
        <section className="relative bg-gray-800 text-white ">
            <div className="absolute inset-0">
                <Image src={hero} alt="Hero Image" className="w-full h-full h-full object-cover opacity-55 " />
            </div>
            <div>
                {content.map((service, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-start justify-center md:ml-50 mx-20 h-screen text-center "
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.1 }}
                    >
                        <h1 className="text-4xl  sm:text-4xl  sm:mr-3 font-bold md:text-5xl">{service.title}</h1>
                        <h1 className="text-3xl  sm:text-2xl  sm:mb-4 md:text-3xl font-bold flex sm:gap-3 mb-3">
                            into
                            <Typewriter
                                options={{
                                    strings: ['Success', 'Sales', 'Revenue', 'Loyal Costumers'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 95,
                                    deleteSpeed: 60,
                                    pauseFor: 2000,
                                }}
                            />
                        </h1>
                        <p className="text-3xl md:text-2xl md:mb-4 mb-3 font-bold">{service.heading}<span className="text-[#4ce6e0] text-4xl md:text-5xl font-bold ml-2  title">AED 999</span></p>
                        <p className="text-2xl sm:text-lg sm:mb-4 mb-2">{service.iconOne}{service.descriptionOne}</p>
                        <p className="text-2xl sm:text-lg sm:mb-4 mb-2">{service.iconTwo}{service.descriptionTow}</p>
                        <p className="text-2xl sm:text-lg sm:mb-4 mb-3">{service.iconThree}{service.descriptionThree}</p>
                        <div className="md:flex">
                            <div className="">
                                <li className="bg-green-400 text-white hover:bg-slate-800 hover:text-red-400 rounded-full font-bold px-4 py-2  text-[20px] sm:text-[12px] sm:text-sm lg:text-base  list-none"> <Link href="/login">
                                    Free Social Media Review
                                    <button className=""></button>
                                </Link></li>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Header/>
        </section>
    )
}

export default Hero

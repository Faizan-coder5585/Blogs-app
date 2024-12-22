"use client"

import { motion } from 'framer-motion';
import { RxTarget } from "react-icons/rx";
import { GrBusinessService } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { TbBrandIntercom } from "react-icons/tb";
import { BiSolidBookContent } from "react-icons/bi";
import { IoShareSocial } from "react-icons/io5";

const services = [
    {
        title: 'Social Media',
        description: 'Turn your scroll-stoppers into loyal followers with our killer social media moves, dazzling visuals, and algorithm-savvy posts!.',
        icon: <IoShareSocial className='w-[85px] h-[110px] inline' />,
    },
    {
        title: 'SEO and Campaigns',
        description: 'Boost your search game and crank up the traffic with our SEO wizardry, market mojo, and campaign mastery!.',
        icon: <RxTarget className='w-[85px] h-[110px] inline' />,

    },
    {
        title: 'Design & Branding',
        description: 'Transform your brand into a visual sensation with standout designs, killer logos, and a seamless UX/UI that makes your customers go wow!.',
        icon: <TbBrandIntercom className='w-[85px] h-[110px] inline' />,

    },
    {
        title: 'Content Creation & Marketing',
        description: 'Transform your brand into a visual sensation with standout designs, killer logos, and a seamless UX/UI that makes your customers go wow!.',
        icon: <BiSolidBookContent className='w-[85px] h-[110px] inline' />,

    },
    {
        title: 'Web/App Development',
        description: 'Build your digital kingdom with sleek websites, killer apps, and custom software that’s as user-friendly as it is jaw-dropping!.',
        icon: <CgWebsite className='w-[85px] h-[110px] inline' />,

    },
    {
        title: 'Business Development',
        description: 'Kickstart your biz with our creative fuel—whether it’s launching, managing startups, or opening accounts, we’ve got your back!.',
        icon: <GrBusinessService className='w-[85px] h-[110px] inline' />,
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center max-w-screen-xl">
                <h2 className="text-4xl font-bold mb-5">Explore our Services, Find your Solutions</h2>
                <p className="mb-14">Discover the Perfect Solutions at NS Marketing for your Business</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6  card border-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.1 }}
                        >
                            <div>{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Services

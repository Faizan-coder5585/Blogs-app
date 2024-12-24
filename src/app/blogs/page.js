"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import ecommerce from "../public/blogs/e-commerce.jpg"



const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: 'Luxury Communities',
            description: 'From gorgeous websites to strategic digital advertising campaigns, we work closely with your team to showcase the best views and angles of your luxury communities to your online customers.',
            image: <Image src={ecommerce} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />,
        },

        {
            id: 2,
            title: 'Franchise',
            description: 'Take your franchise to the next level with a digital marketing strategy that amplifies your online footprint. Capture new customers on any platform, from social media networks to the biggest search engines around the world.',
            image: <Image src={ecommerce} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />,
        },
        {
            id: 3,
            title: 'Ecommerce',
            description: 'Get more clicks and conversions for your e-commerce store and scale your sales to record highs.          Promote your brand across the web and gain new followers who spread the word for you.',
            image: <Image src={ecommerce} className="w-full h-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />,
        },

        {
            id: 4,
            title: 'Crypto',
            description: 'Usher in the most cutting edge Web3 technology and reveal your crypto project to users throughout the digital landscape. Use proven SEO, PPC, and social media tactics to accumulate interest in your blockchain business.',
            image: <Image src={ecommerce} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />,
        },
        {
            id: 5,
            title: 'Others',
            description: 'Whether you operate  digital marketing strategy that’s designed to give you a competitive advantage in your niche and tackle your most pressing business goals.',
            image: <Image src={ecommerce} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />,
        }
    ];

    return (
        <section className="mx-auto mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid- md:grid-cols-2  lg:grid-cols-5 lg:auto-cols-fr lg:grid-flow-col  gap-1">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        className={`group relative cursor-pointer flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 
                        ${index === 2 ? "col-sapn-1  sm:col-span-2 md:col-span-2 lg:col-span-2" : "col-span-1"}
                    `}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="h-96 w-full ">
                        {blog.image}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black from-black/60 via-black/60 :to-black/60"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-wrap sm:px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
                            <h3 className="font-dmserif text-2xl md:text-3xl font-bold text-white">{blog.title}</h3>
                            <p className="mb-3 text-1xl truncate text-balance sm:text-base italic text-white opacity-0 transition-opacity duration-300  group-hover:opacity-100 ">{blog.description}</p>
                            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com md:text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Blogs

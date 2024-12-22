"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import crowd from "../public/marketing/crowd.webp"
import mask from "../public/marketing/Mask_Group.webp"


const Brand = () => {

     const brands = [
         {
             heading: 'Nominated',
             heading2: 'Digital BIMA Award',
             heading3: 'DIGITAL DESIGN',
             heading4: 'United States',
             image: <Image src={mask} className="absolute right-0 top-0" alt="image" />,
             imageSecond: <Image src={crowd} alt="image" className="w-[120px] h-[120px]" />
         },
         {
             heading: 'Nominated',
             heading2: 'Digital BIMA Award',
             heading3: 'DIGITAL DESIGN',
             heading4: 'United States',
             image: <Image src={mask} className="absolute right-0 top-0" alt="image" />,
             imageSecond: <Image src={crowd} alt="image" className="w-[120px] h-[120px]" />
         },
         {
             heading: 'Nominated',
             heading2: 'Digital BIMA Award',
             heading3: 'DIGITAL DESIGN',
             heading4: 'United States',
             image: <Image src={mask} className="absolute right-0 top-0" alt="image" />,
             imageSecond: <Image src={crowd} alt="image" className="w-[120px] h-[120px]" />
         },
         {
             heading: 'Nominated',
             heading2: 'Digital BIMA Award',
             heading3: 'DIGITAL DESIGN',
             heading4: 'United States',
             image: <Image src={mask} className="absolute right-0 top-0" alt="image" />,
             imageSecond: <Image src={crowd} alt="image" className="w-[120px] h-[120px]" />
         },
     ]

    return (
        <>

            <div class="text-center pb-10 max-w-[513px] mx-auto mt-8">
                <p data-aos="fade-up" class="text-1xl sm:text-2xl  font-bold tracking-widest f-f-DM leading-tight text-blue-700 uppercase mb-4 aos-init aos-animate">DIGITAL MARKETING AGENCY</p><p data-aos="fade-up" className="text-base font-extrabold f-f-Lato sm:text-1xl leading-6 text-center text-[#1B1D28] aos-init">We have achieved lot of Awards &amp; Recognitions Check some of our Achievements</p>
            </div>

             <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4">
                {brands.map((brand, index) => (
                    <motion.div
                        key={index}
                        className=""
                        initial={{ y: 50 }}
                        whileInView={{ y: 5 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.1 }}
                    >

                        <div className="gap-6  relative shadow-cs h-[373px]  transition-all ease-in-out duration-300 g-white hover:bg-[#181E4E] group cursor-pointer">
                            <div className="absolute inset-0 w-full pl-10 pr-14 border transition-all ease-in-out duration-300 text-[#181E4E] hover:text-white border-[#E2E4F0] hover:border-[#181E4E]">
                                {brand.image}
                                <div className="flex items-center justify-between">
                                    {brand.imageSecond}
                                    <p className="f-f-DM font-bold text-[15px] leading-[22.5px]">
                                    </p>
                                </div>
                                <p className="text-[#1B1D28] group-hover:text-white  f-f-DM font-bold text-base mt-6 uppercase">
                                    {brand.heading}
                                </p>
                                <h4 className="f-f-Lato font-black text-xl md:text-2xl lg:text-3xl xl:text-[32px] xl:leading-[35px] py-3">
                                    {brand.heading2}
                                </h4>
                                <p className="f-f-DM font-bold text-[15px] leading-[22.5px] uppercase ">
                                    {brand.heading3}
                                </p><p className=" group-hover:text-[#FFD231] f-f-DM pt-5 font-normal text-[15px] leading-[22.5px] transition-all ease-in-out duration-300 text-[#666666]  ">
                                    {brand.heading4}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </section> 
        </>

    )
}

export default Brand
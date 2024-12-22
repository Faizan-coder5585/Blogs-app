import Image from "next/image";
import aboutone from "../public/about/aboutone.jpg"
import aboutSecond from "../public/about/aboutSecond.jpg"


const About = () => {
    
    return (
        <section className="py-4 bg-gray-100 mt-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-12">About Us</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        We are a dedicated team committed to delivering the best service to our clients.
                        Our mission is to innovate and inspire, creating solutions that lead to growth.
                    </p>
                    <p className="text-lg text-gray-700">
                        With years of experience, we pride ourselves on our expertise and passion for what we do.
                    </p>
                </div>

                <div className="md:w-1/2 relative p-6">
                    <Image src={aboutone}
                        alt="Image 1"
                        className="w-[70%] h-auto z-10 transition-transform duration-300 transform hover:scale-105 absolute top-0 left-1/4"
                    />
                    <Image src={aboutSecond}
                        alt="Image 2"
                        className="w-[80%] h-auto z-10 transition-transform  duration-300 transform hover:scale-105"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
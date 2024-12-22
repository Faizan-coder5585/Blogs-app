import Image from "next/image";
import contact from "../public/contact/Contact.jpg"


const Contact = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 relative p-6">
                    <Image src={contact}
                        alt="Contact Us"
                        className="w-full h-[50vh] rounded-lg transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We would love to hear from you! If you have any questions, feel free to reach out.
                    </p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="bg-sky-800  text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact
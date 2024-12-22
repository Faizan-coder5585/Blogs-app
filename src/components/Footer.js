import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white mt-16 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Company</h4>
          <p className="mb-2">About Us</p>
          <p className="mb-2">Careers</p>
          <p className="mb-2">Blog</p>
          <p>Contact</p>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Services</h4>
          <p className="mb-2">Consulting</p>
          <p className="mb-2">Support</p>
          <p className="mb-2">Sales</p>
          <p>Training</p>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms of Service</p>
          <p className="mb-2">FAQ</p>
          <p>Help Center</p>
        </div>

        <div className="text-center">
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-2xl hover:text-blue-500 transition duration-200" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-blue-400 transition duration-200" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-pink-500 transition duration-200" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-2xl hover:text-blue-700 transition duration-200" />
            </a>
          </div>
            <h4 className="text-xl font-bold mt-4 px-2 text-start">Follow Us</h4>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer
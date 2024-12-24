'use client'

import Link from "next/link";
import { useState } from "react";

const Header = () => {
const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="absolute top-0 right-0 left-0  border-b-[2px] border-gray-500 ">
      <div className="container mx-auto  lg:px-8 flex items-center justify-between  h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <li className="text-2xl font-bold text-blue-500 list-none">
            <Link href="/">MyLogo</Link>
          </li>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3 lg:space-x-6 list-none text-nowrap">
          <li className="text-green-400 hover:text-blue-500 list-none text-base font-bold uppercase">
            <Link href="/"> Home</Link>
          </li>
          <li className="text-green-400 hover:text-blue-500 list-none text-base font-bold uppercase">
            <Link href="/about"> About Us</Link>
          </li>
          <li className="text-green-400 hover:text-blue-500 list-none text-base font-bold uppercase">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-green-400 hover:text-blue-500 list-none text-base font-bold uppercase">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-green-400 hover:text-blue-500 list-none text-base font-bold uppercase">
            <Link href="/brand">brand</Link>
          </li>
          <li className="text-green-400 hover:text-blue-500 list-none text-base font-bold uppercase">
            <Link href="/blogs">Blogs</Link>
          </li>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-500 md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex ">
          <div className="flex gap-2 w-full">
          <Link href="/account">
            <button  className="bg-green-400 text-white hover:bg-slate-800 hover:text-red-400 rounded-full  font-bold md:px-4 md:py-2 text-1xl lg:text-base text-nowrap md:text-[15px]">Login</button>
          </Link>
          <Link href="/account">
            <button  className="text-nowrap text-1xl lg:text-base md:text-[15px] border-2 border-green-400 white rounded-full d-blog px-4 py-[6px]  font-bold" >Sign Up</button></Link>
          </div>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-full bg-white shadow-md transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4  border-b-4">
          <h2 className="text-lg font-bold text-blue-500">Logo</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex  flex-col space-y-2 p-4">
          <li className="text-gray-700 hover:text-blue-500 list-none text-xl font-bold uppercase border-b-2 w-full text-center py-2">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 list-none text-xl font-bold uppercase border-b-2 w-full text-center py-2">
            <Link href="/about" >About Us</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 list-none text-xl font-bold uppercase border-b-2 w-full text-center py-2">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-500 list-none text-xl font-bold uppercase border-b-2 w-full text-center py-2">
            <Link href="/contact">Contact</Link>
          </li>
        </nav>

        <div className="flex  items-center justify-center">
          <div className="flex flex-col gap-2 text-center justify-center w-[50%] ">
          <Link href="/account">
            <button  className="text-2xl bg-yellow-400 text-slate-800 hover:bg-slate-800 hover:text-red-400 rounded-full  font-bold  py-2  text-1xl lg:text-base text-nowrap ">Login</button>
          </Link>
          <Link href="/account">
              <button className="text-2xl text-nowrap text-1xl lg:text-base  border-2 border-[#CEFF00] text-slate-800 rounded-full d-blog  py-2  font-bold" >Sign Up</button>
          </Link>
          </div>
        </div>

      </div>

      {/*  for Mobile Menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black bg-opacity-25 md:hidden"
        />
      )}
    </header>
  );
};

export default Header;

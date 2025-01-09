"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../images/logo.png";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="p-2 text-black-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-8 w-8 text-blue-400" />
        ) : (
          <Menu className="h-8 w-8 text-black-400" />
        )}
      </button>

      <ul
        className={`fixed right-0 top-0 z-50 h-full w-2/3 transform flex-col gap-6 bg-white-400 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="p-4 text-right">
          <button
            className="p-2 text-black-400 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X className="absolute right-4 top-4 h-8 w-8 text-blue-400" />
          </button>
        </li>
        <li className="p-4">
          <Link href="/" className="text-black-400 hover:text-blue-400">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link href="/#about" className="text-black-400 hover:text-blue-400">
            About Us
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/#services"
            className="text-black-400 hover:text-blue-400"
          >
            Services
          </Link>
        </li>
        <li className="p-4">
          <Link href="/#contact" className="text-black-400 hover:text-blue-400">
            Contact
          </Link>
        </li>
        <li className="p-4">
          <Link href="/gallery" className="text-black-400 hover:text-blue-400">
            Gallery
          </Link>
        </li>
      </ul>
    </>
  );
};

const DesktopMenu = () => {
  return (
    <ul className="flex flex-row justify-end gap-6 bg-transparent">
      <li>
        <Link href="/" className="text-black-400 hover:text-blue-400">
          Home
        </Link>
      </li>
      <li>
        <Link href="/#about" className="text-black-400 hover:text-blue-400">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/#services" className="text-black-400 hover:text-blue-400">
          Services
        </Link>
      </li>
      <li>
        <Link href="/#contact" className="text-black-400 hover:text-blue-400">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/gallery" className="text-black-400 hover:text-blue-400">
          Gallery
        </Link>
      </li>
    </ul>
  );
};

export const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between pl-4 pr-8 shadow-md">
      <Link href="/">
        <img src={Logo.src} alt="Serrano Construction Logo" className="w-28" />
      </Link>

      <div className="md:hidden">
        <MobileMenu />
      </div>

      <div className="hidden md:flex">
        <DesktopMenu />
      </div>
    </nav>
  );
};

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Nave = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href) => pathname === href ? 'font-semibold text-[#FBC76A]' : '';

  return (
    <div className="w-full fixed top-0 left-0  px-3 bg-[#3D3E42] lg:bg-opacity-90 z-50"
    >
      <nav role="navigation" className="flex justify-between items-center max-w-[1400px] mx-auto py-4">
        {/* Logo */}
        <Link href="/" >
          <h1 className="text-2xl lg:text-3xl font-semibold">Enamul.</h1>
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-md">
          <li>
            <Link href="/" className={`cursor-pointer hover:text-gray-300 transition ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={`cursor-pointer hover:text-gray-300 transition ${isActive('/portfolio')}`}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/free-tools" className={`cursor-pointer hover:text-gray-300 transition ${isActive('/free-tools')}`}>
              Free Tools
            </Link>
          </li>
          {/* <li>
            <Link href="/for-sell" className={`cursor-pointer hover:text-gray-300 transition ${isActive('/for-sell')}`}>
              For Sell
            </Link>
          </li> */}
          <li>
            <Link href="/contact" className={`cursor-pointer hover:text-gray-300 transition ${isActive('/contact')}`}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'flex' : 'hidden'
            } md:hidden absolute top-16 left-0 w-full bg-[#3D3E42] border-t border-#fff shadow-lg flex-col items-center gap-4 py-4 text-md transition-all duration-300 ease
                
                System: -out z-50`}
        >
          <ul className="flex flex-col items-center gap-4 w-full">
            <li className={`cursor-pointer hover:text-gray-300 transition w-full text-center py-1 ${isActive('/')}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`cursor-pointer hover:text-gray-300 transition w-full text-center py-1 ${isActive('/portfolio')}`}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={`cursor-pointer hover:text-gray-300 transition w-full text-center py-1 ${isActive('/free-tools')}`}>
              <Link href="/free-tools">
                Free Tools
              </Link>
            </li>
            <li className={`cursor-pointer hover:text-gray-300 transition w-full text-center py-1 ${isActive('/contact')}`}>
              <Link href="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nave;

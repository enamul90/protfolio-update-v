"use client"
import React from 'react';
import Image from 'next/image'
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const HeroComponent = () => {

    const HeroBG = () => {
        return (
            <div className="h-full w-full absolute top-0 left-0 HeroBG z-10">
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px]"></div>
                <div className="h-[150px]  w-[150px] background rounded-full blur-[150px] absolute bottom-[-100px] right-0"></div>
                <Image
                    src="/images/BgPattarn.png"
                    alt="Hero"
                    className="absolute top-0 left-0 w-full h-full z-50"
                    height={100}
                    width={100}
                    quality={100}
                />
            </div>
        )
    }

    const HeroText = () => {
        return (
            <>
                <h3 className="text-lg font-normal text-gray-800 companyText flex">
                    Are You Looking
                    <span className="typing-animation ms-1">Javascript Developer</span>
                </h3>
  
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold companyText mt-2">
                    Here I&apos;m Enamul Hossen
                </h1>
                <p className="text-white text-sm lg:text-base mt-2">
                    I specialize in JavaScript development, creating dynamic web
                    applications using React.js and Node.js. Proficient in REST APIs, CRUD operations, and UI/UX design,
                    I deliver efficient, scalable,
                    and user-friendly solutions.
                </p>

                <div className="mt-6 flex items-center gap-4 lg:gap-5">
                    <a
                      href="/files/cvMdEnamulHossen.pdf" 
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="companyText px-5 py-2 border text-base lg:text-xl rounded-lg borderColor hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        Resume
                      </button>
                    </a>
                    <Link href="https://github.com/enamul90" target='_blank'>
                        <button
                            className="companyText px-5 py-3 text-lg lg:text-2xl rounded-lg boxShadow companyBG hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <FaGithub/>
                        </button>
                    </Link>
                    <Link href="https://www.behance.net/mdenamulhossen90" target='_blank'>
                        <button
                            className="companyText px-5 py-3 text-lg lg:text-2xl rounded-lg boxShadow companyBG hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <FaBehance/>
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/md-enamul-hossen-64ab24296/" target='_blank'>
                        <button
                            className="companyText px-5 py-3 text-lg lg:text-2xl rounded-lg boxShadow companyBG hover:scale-110 transition-transform duration-300 cursor-pointer"
                        >
                            <FaLinkedinIn/>
                        </button>
                    </Link>
                </div>
            </>
        )
    }

    const HeroImage = () => {
        return (
            <div className="flex items-center justify-center h-full p-2 pt-[100px] animate-fade-in">
                <Image
                    src="/images/myphoto.png"
                    quality={100}
                    height={100}
                    width={100}
                    alt="Hero"
                    className="min-h-full w-fit"
                />
            </div>
        )
    }

    return (
        <div className="h-screen w-screen overflow-hidden px-3">
            <HeroBG />
            <div className="relative z-10 lg:max-w-[1400px] max-w-[550px] mx-auto h-full">
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-28 h-full">
                    <div className="col-span-4 flex flex-col justify-center">
                        <HeroText />
                    </div>
                    <div className="col-span-4 items-end justify-center hidden lg:flex">
                        <HeroImage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;

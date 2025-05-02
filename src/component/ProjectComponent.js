"use client";
import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Link from 'next/link';
import Image from "next/image";
import { useRef } from "react";


const ProjectComponent = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }

    };

    const ProjectData = [
        {
            "project_name": "Social Media Project - Full Stack Development",
            "project_url": "https://matrix-media.vercel.app/",
            "screenshot": "/images/social-media.png"
        },
        {
            "project_name": "Rest API Development - Back Development ",
            "project_url": "https://github.com/enamul90/Task_Manager_API_ES6",
            "screenshot": "/images/rest-api-development.png"
        },
        {
            "project_name": "Patient Management - Full Stack Development ",
            "project_url": "https://doctorproject.searchfriend.pro/",
            "screenshot": "/images/patient-management .png"
        },
        {
            "project_name": "Portfolio Project - Figma To HTML",
            "project_url": "https://enamul90.github.io/Multiple-Page-portfolio/index.html",
            "screenshot": "/images/Figma.png"
        },
        {
            "project_name": "E - Commerce App - UIUX Design",
            "project_url": "https://www.figma.com/proto/KSu53HtvBfgIJ2Ho3mBxAL/Ubizz---App-%2F-Web?page-id=2%3A1400&node-id=664-1373&viewport=1034%2C459%2C0.12&t=vxx9cf50RYURG3js-1&scaling=scale-down&content-scaling=fixed",
            "screenshot": "/images/figma-design.png"
        },
        {
            "project_name": "Food Delivery Product - UIUX Design",
            "project_url": "https://www.figma.com/proto/xbxErCSbC72O0WNxG09YHv/UVIOM-Food-Web?page-id=4%3A1485&node-id=369-4085&viewport=1978%2C401%2C0.04&t=XdKrzFKSx1UOiRk7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A2086",
            "screenshot":  "/images/FoodApp.png"
        },
    ]


    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col md:flex-row  justify-between items-end  mt-[100px] gap-y-3 px-3 ">
                <div className="me-auto">
                    <h5 className="text-base companyText font-medium flex gap-2 items-center">
                        <span className="block w-[15px] border borderColor"></span>
                        PROJECTS
                    </h5>
                    <h2 className="text-xl text-white font-medium ">RECENT COMPLETED WORK</h2>
                </div>

                <div className="flex justify-end items-center gap-3 ">
                    <button
                        onClick={() => scroll("left")}
                        className="h-[32px] w-[32px] border borderColor rounded-md hover:scale-110 transition-transform duration-300 ">
                        <IoIosArrowBack className="companyText mx-auto  block text-xl" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="h-[32px] w-[32px] border borderColor rounded-md hover:scale-110 transition-transform duration-300  ">
                        <IoIosArrowForward className="companyText mx-auto block text-xl  " />
                    </button>
                </div>
            </div>
        )
    }

    const ProjectList = ({data}) => {
        return (
            <div
                ref={scrollRef}
                className="scrollbar-hide relative z-20 mt-[30px] w-full h-fit flex flex-row gap-6 overflow-x-auto scrollbar "
            >
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="col-span-1 w-[300px] flex-shrink-0 ">
                                <div className="h-[360px]  rounded-lg overflow-hidden  ">
                                    <Image
                                        src={item.screenshot} alt="project image"
                                        className="w-full h-full"
                                        width={100}
                                        height={100}
                                        quality={100}
                                    />
                                </div>

                                <Link href={item.project_url} target="_blank">
                                    <h5
                                        className="px-4 py-3 relative z-20 bg-[#3D3E42]  font-medium text-lg mt-[-16%] w-[90%]
                                    border-s-8 border-[#FBC76A] cursor-pointer rounded-e-lg

                                    ">
                                        {item.project_name}
                                    </h5>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const BackgroundEffect = () => {
        return (
            <div className="h-[200px] w-full bg-[#FBC76A] absolute mt-[-150px] left-0 blur-[100px] opacity-35"></div>
        )
    }


    return (
        <div className="max-w-[1400px] mx-auto">
            <SectionTittle />
            <ProjectList data={ProjectData} />
            <BackgroundEffect />
        </div>
    );
};

export default ProjectComponent;
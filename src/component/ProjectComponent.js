"use client";
import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import ProjectList from "./ProjectList"

const ProjectComponent = () => {



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
            <div className="flex flex-col md:flex-row  justify-between items-end  mt-[100px] gap-y-3 px-3 mb-[30px] ">
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

    
    const BackgroundEffect = () => {
        return (
            <div className="h-[200px] w-full bg-[#FBC76A] absolute mt-[-150px] left-0 blur-[100px] opacity-35"></div>
        )
    }


    return (
        <div className="max-w-[1400px] mx-auto">
            <SectionTittle />
            <div className= "grid grid-cols-4 gap-5 px-3">
                <ProjectList data={ProjectData} />
            </div>
            
            <BackgroundEffect />
        </div>
    );
};

export default ProjectComponent;
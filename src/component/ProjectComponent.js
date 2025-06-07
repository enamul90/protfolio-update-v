"use client";
import React from "react";

import ProjectList from "./ProjectList"

const ProjectComponent = () => {



    const ProjectData = [
        {
            "project_name": "Patient Management  ",
            "project_type":"Full Stack Development",
            "project_url": "https://doctorproject.searchfriend.pro/",
            "project_code": "",
            "screenshot": "/images/loremHomeo.webp"
        },

        {
            "project_name": "Rest API Development",
            "project_type":"Back Development",
            "project_url": "https://github.com/enamul90/Task_Manager_API_ES6",
            "project_code": "",
            "screenshot": "/images/rest-api-development.webp"
        },

        {
            "project_name": "Portfolio Template ",
            "project_type":" Figma To HTML",
            "project_url": "https://enamul90.github.io/Multiple-Page-portfolio/index.html",
            "project_code": "",
            "screenshot": "/images/portfolio-project.webp"
        },
        {
            "project_name": "E - Commerce App ",
            "project_type":" UIUX Design",
            "project_url": "https://www.figma.com/proto/KSu53HtvBfgIJ2Ho3mBxAL/Ubizz---App-%2F-Web?page-id=2%3A1400&node-id=664-1373&viewport=1034%2C459%2C0.12&t=vxx9cf50RYURG3js-1&scaling=scale-down&content-scaling=fixed",
            "project_code": "",
            "screenshot": "/images/e-commerce-app.webp"
        }

    ]


    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col md:flex-row  justify-between items-end  mt-[100px] gap-y-3 px-3 mb-[30px] ">
                <div className="me-auto">
                    <h5 className="text-base lg:text-lg companyText font-medium flex gap-2 items-center">
                        <span className="block w-[15px] border borderColor"></span>
                        PROJECTS
                    </h5>
                    <h2 className="text-xl lg:text-2xl text-white font-medium ">RECENT COMPLETED PROJECT</h2>
                </div>

                <div className="flex justify-end items-center gap-3 border-2 borderColor h-6 rounded-full hidden  md:block"></div>
            </div>
        )
    }


    const BackgroundEffect = () => {
        return (
            <div className="h-[200px] w-full bg-[#FBC76A] absolute mt-[-150px] left-0 blur-[100px] opacity-35 z-[-1]"></div>
        )
    }


    return (
        <div className="max-w-[1400px] mx-auto">
            <SectionTittle />
            <div className= "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 px-3 z-20">
                <ProjectList data={ProjectData} />
            </div>

            <BackgroundEffect />
        </div>
    );
};

export default ProjectComponent;

"use client";
import React from 'react';
import ProjectList from "@/component/ProjectList";
import { useState } from "react";

const ForSellComponent = () => {
    const ProjectData = [
        {
            "project_name": "Social Media Project",
            "project_type":"Full Stack Development",
            "project_url": "https://matrix-media.vercel.app/",
            "project_code": "https://www.facebook.com/gazienamul.hossain/",
            "screenshot": "/images/social-media.png"
        },
        {
            "project_name": "Rest API Development",
            "project_type":"Back Development",
            "project_url": "https://github.com/enamul90/Task_Manager_API_ES6",
            "project_code": "https://www.facebook.com/gazienamul.hossain/",
            "screenshot": "/images/rest-api-development.png"
        },
        {
            "project_name": "Patient Management  ",
            "project_type":"Full Stack Development",
            "project_url": "https://doctorproject.searchfriend.pro/",
            "project_code": "https://www.facebook.com/gazienamul.hossain/",
            "screenshot": "/images/patient-management .png"
        },
        {
            "project_name": "Portfolio Project ",
            "project_type":" Figma To HTML",
            "project_url": "https://enamul90.github.io/Multiple-Page-portfolio/index.html",
            "project_code": "https://www.facebook.com/gazienamul.hossain/",
            "screenshot": "/images/Figma.png"
        },
        {
            "project_name": "E - Commerce App ",
            "project_type":" UIUX Design",
            "project_url": "https://www.figma.com/proto/KSu53HtvBfgIJ2Ho3mBxAL/Ubizz---App-%2F-Web?page-id=2%3A1400&node-id=664-1373&viewport=1034%2C459%2C0.12&t=vxx9cf50RYURG3js-1&scaling=scale-down&content-scaling=fixed",
            "project_code": "https://www.facebook.com/gazienamul.hossain/",
            "screenshot": "/images/figma-design.png"
        },
        {
            "project_name": "Food Delivery Product ",
            "project_type":" UIUX Design",
            "project_url": "https://www.figma.com/proto/xbxErCSbC72O0WNxG09YHv/UVIOM-Food-Web?page-id=4%3A1485&node-id=369-4085&viewport=1978%2C401%2C0.04&t=XdKrzFKSx1UOiRk7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A2086",
            "project_code": "https://www.facebook.com/gazienamul.hossain/",
            "screenshot":  "/images/FoodApp.png"
        },
    ]


    const PortfolioTittle = () => {
        const [activeTab, setActiveTab] = useState("HTML");

        const tabs = ["HTML", "BOOSTRAP", "REACT", "NEXT"];

        return (
            <div className="flex flex-col md:flex-row justify-between items-end mt-[100px] gap-y-3 px-3 mb-[30px]">

                {/* Left Title Block */}
                <div className="me-auto">
                    <h5 className="text-base lg:text-lg companyText font-medium flex gap-2 items-center">
                        <span className="block w-[15px] border borderColor"></span>
                        For Sell
                    </h5>
                    <h2 className="text-xl lg:text-2xl text-white font-medium uppercase">
                        Ready Web Template
                    </h2>
                </div>

                {/* Nav-style Buttons */}
                <div className="flex flex-wrap md:justify-end items-center gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer 
              ${
                                activeTab === tab
                                    ? "bg-[#FBC76A] text-black shadow-md"
                                    : "bg-transparent border border-[#FBC76A] text-white hover:bg-[#FBC76A] hover:text-black"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-[1400px] mx-auto">
            <PortfolioTittle/>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 px-3 z-20">
                <ProjectList data={ProjectData}/>
            </div>
        </div>
    );
};

export default ForSellComponent;

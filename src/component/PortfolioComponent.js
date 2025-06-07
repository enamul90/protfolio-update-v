"use client";
import React from 'react';
import ProjectList from "@/component/ProjectList";
import { useState } from "react";


import {WebProject, AppProject, TemplateProject, BackendProject} from "@/content/data"

const PortfolioComponent = () => {

    const [activeTab, setActiveTab] = useState("Website");
    const PortfolioTittle = () => {

        const tabs = ["Website", "App", "Template", "Backend"];

        return (
            <div className="flex flex-col md:flex-row justify-between items-end mt-[100px] gap-y-3 px-3 mb-[30px]">

                {/* Left Title Block */}
                <div className="me-auto">
                    <h5 className="text-base lg:text-lg companyText font-medium flex gap-2 items-center">
                        <span className="block w-[15px] border borderColor"></span>
                        PROJECTS
                    </h5>
                    <h2 className="text-xl lg:text-2xl text-white font-medium uppercase">
                        Already Completed Work
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
                {
                    activeTab === "Website" &&   <ProjectList data={WebProject}/>
                }

                {
                    activeTab === "App" &&   <ProjectList data={AppProject}/>
                }

                {
                    activeTab === "Template" &&    <ProjectList data={TemplateProject}/>
                }

                {
                    activeTab === "Backend" &&     <ProjectList data={BackendProject}/>
                }

            </div>
        </div>
    );
};

export default PortfolioComponent;

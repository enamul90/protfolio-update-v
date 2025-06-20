"use client";
import React from 'react';
import ProjectList from "@/component/ProjectList";
import { useState } from "react";

import  {HTMLProject, BootstrapProject, ReactProject, NextProject } from  "../content/Sell"

const ForSellComponent = () => {

    const [activeTab, setActiveTab] = useState("HTML");

    const PortfolioTittle = () => {

        const tabs = [
            "E commerce", 
            "BOOSTRAP", 
            "REACT",
             "NEXT",
        ] ;

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
                {
                    activeTab ==="HTML" && <ProjectList data={HTMLProject}/>
                }

                {
                    activeTab ==="BOOSTRAP" && <ProjectList data={BootstrapProject}/>
                }

                {
                    activeTab ==="REACT" && <ProjectList data={ReactProject}/>
                }

                {
                    activeTab ==="NEXT" && <ProjectList data={NextProject}/>
                }
            </div>
        </div>
    );
};

export default ForSellComponent;

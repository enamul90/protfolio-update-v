import React from 'react';
import {IoCheckmarkDone} from "react-icons/io5";

const WorkExperience = () => {

    const companyList = [
        {
            post: "UI UX Designer",
            timeline: "2018 - Present",
            tittle : "Freelancing | Fiver",
            description : [
                {content : "E-Commerce UI focuses on creating a user-friendly, responsive design with smooth navigation, appealing product displays, and an optimized checkout experience."},
                {content : "Food Delivery UI focuses on a user-friendly design with easy navigation, seamless ordering, real-time tracking, and an optimized checkout experience for better user engagement."},
                {content : "Ride Share UI focuses on a seamless user experience with easy ride booking, real-time tracking, fare estimation, and an intuitive interface for drivers and passengers."},
            ]
        },
        {
            post: "Javascript Developer",
            timeline: "2022 - Present",
            tittle : "Project Work | Local Client",
            description : [
                {content : "Social media development with MERN stack involves using MongoDB, Express.js, React.js, and Node.js to create interactive, scalable platforms."},
                {content : "Develop a patient management system using the MERN stack to handle patient records, appointments, billing, and communication efficiently."},
                {content : "Figma to HTML service converts Figma designs into responsive, pixel-perfect HTML code, ensuring seamless integration and fast performance."},
            ]
        }
    ]

    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col items-center w-fit mx-auto mt-[150px]">

                <h5 className="text-center text-base lg:text-lg companyText font-semibold">EXPERIENCE </h5>
                <h2 className="text-xl lg:text-2xl text-white font-medium mt-1 ">PREVIOUS WORK EXPERIENCE</h2>
                <div className="flex gap-2 mt-2 w-[70%]">
                    <span className=" h-[2px] lg:h-[2.5px] rounded-full background block flex-grow "></span>
                    <span className=" h-[2.5px] lg:h-[3px] rounded-full background block w-[5px] "></span>
                    <span className=" h-[2.5px] lg:h-[3px] rounded-full background block w-[5px] "> </span>
                </div>
            </div>
        )
    }

    const Experience = ({data}) => {
        return (
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-3 mt-[60px] max-w-[1100px] mx-auto">
                <div
                    className="h-[200px] w-[200px] bg-red-400 blur-3xl absolute bottom-[-70px] left-[-70px] opacity-35 "></div>
                <div
                    className="h-[200px] w-[200px] bg-red-400 blur-3xl absolute top-[-70px] right-[-70px] opacity-35 "></div>
                {
                    data.map((item, index) => {
                        return (
                            <div className="companyBG rounded-lg p-6" key={index}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-base">{item.post}</h2>
                                    <h2 className="text-base">{item.timeline}</h2>
                                </div>
                                <h1 className="text-3xl font-semibold mt-3 mb-4">{item.tittle}</h1>
                                {
                                    item.description.map((item, index) => {
                                        return (
                                            <ul key={index} className="opacity-90 mb-1 flex gap-2">
                                                <li >
                                                    <IoCheckmarkDone className="text-base mt-1"/>
                                                </li>
                                                <li className="flex gap-2">
                                                    {item.content}
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        )
    }


    return (
        <div className="h-fit">
            <SectionTittle/>
            <Experience data={companyList}/>
        </div>
    );
};

export default WorkExperience;
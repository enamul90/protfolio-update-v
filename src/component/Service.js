import React from 'react';
import { MdOutlineWebAsset} from "react-icons/md";
import { AiTwotoneApi} from "react-icons/ai";
import {TbBrandFigma, TbDeviceMobileCode, TbFileTypeHtml} from "react-icons/tb";
import {RiNextjsLine, RiReactjsLine} from "react-icons/ri";


const Service = () => {

    const CardData = [
        {
            icon : <MdOutlineWebAsset className="text-5xl" />,
            title : "Web Developer",
            description : "MERN stands for MongoDB, Express.js, React.js, and Node.js, a popular JavaScript stack used to build full-stack web applications with both frontend and backend integration",
        },
        {
            icon : <AiTwotoneApi className="text-5xl" />,
            title : "Api Developer",
            description : "I build scalable APIs using Node.js, Express.js, and MongoDB. Experienced in RESTful development, authentication, database integration, and performance optimization.",
        },
        {
            icon : <TbDeviceMobileCode className="text-5xl" />,
            title : "Mobile App Developer",
            description : "Experienced in building cross-platform apps using React Native, Redux, and APIs. Skilled in performance optimization, debugging, and deploying apps for Android and iOS.",
        },
        {
            icon : <RiReactjsLine className="text-5xl" />,
            title : "Figma To React",
            description : "React.js is a JavaScript library for building user interfaces. It uses a component-based architecture to create dynamic, responsive, and fast-rendering web applications.",
        },
        {
            icon : <RiNextjsLine className="text-5xl" />,
            title : "Figma To Next",
            description : "Next.js is a React framework for building server-side rendered (SSR) and static web applications. It offers automatic routing, performance optimization, and easy deployment features.",
        },
        {
            icon : <TbFileTypeHtml className="text-5xl" />,
            title : "Figma To HTML ",
            description : "Figma to HTML involves converting Figma designs into clean, responsive HTML and CSS code, ensuring accurate layout, styling, and functionality for web development projects.",
        },
        {
            icon : <TbBrandFigma className="text-5xl" />,
            title : "UI UX Design",
            description : "UI/UX Design focuses on creating user-friendly, visually appealing interfaces for mobile apps and websites. It involves wireframing, prototyping, and ensuring seamless user experiences.",
        },
    ]


    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col items-center w-fit mx-auto mt-[150px]">
                <h5 className="text-center text-base lg:text-lg companyText font-semibold">SERVICE </h5>
                <h2 className="text-xl lg:text-2xl text-white font-medium mt-1 uppercase ">provide for my clients</h2>
                <div className="flex gap-2 mt-2 w-[70%]">
                    <span className=" h-[2px] lg:h-[2.5px] rounded-full background block flex-grow "></span>
                    <span className=" h-[2.5px] lg:h-[3px] rounded-full background block w-[5px] "></span>
                    <span className=" h-[2.5px] lg:h-[3px] rounded-full background block w-[5px] "> </span>
                </div>
            </div>
        )
    }

    const  SectionCard = ({data})=>{
        return (
            <div className="mt-[35px] lg:mt-[60px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5  relative">
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute top-[-10px] left-[-10px]"></div>
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute bottom-[-10px] right-[-10px]"></div>
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute bottom-[45%] right-[45%] z-[-1] "></div>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i}
                                 className="col-span-1 companyBG rounded-lg p-6 cursor-pointer  hover:scale-105 transition-transform duration-300">
                                <div className="flex gap-3 items-center">
                                    {
                                        item.icon
                                    }
                                    <h1 className="text-xl font-normal">
                                        {item.title}
                                    </h1>
                                </div>

                                <p className="mt-4 opacity-80 text-base">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    return (
        <div className="max-w-[1400px] mx-auto px-3 xl:px-0 ">
            <SectionTittle/>
            <SectionCard data={CardData}/>
        </div>
    );
};

export default Service;
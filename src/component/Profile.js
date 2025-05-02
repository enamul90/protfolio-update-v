"use client"
import React from 'react';
import {MdOutgoingMail} from "react-icons/md";
import {FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import {PiSkypeLogoBold} from "react-icons/pi";
import Link from "next/link";

const Profile = () => {
    const [active, setActive] = React.useState("code");

    const DesignSkills = [
        {
            "tools": "Fimga",
            "availity": "95%",
            "class": "w-[95%]",
        },
        {
            "tools": "Adobe XD",
            "availity": "95%",
            "class": "w-[95%]",
        },
        {
            "tools": "Adobe illustrator",
            "availity": "80%",
            "class": "w-[80%]",
        },
        {
            "tools": "Adobe Photoshop",
            "availity": "70%",
            "class": "w-[70%]",
        },
        {
            "tools": "Miro",
            "availity": "95%",
            "class": "w-[95%]",
        },
        {
            "tools": "Google Form",
            "availity": "99%",
            "class": "w-[99%]",
        },
    ]

    const DevSkills = [
        {
            "tools": "HTML 5",
            "availity": "99%",
            "class": "w-[99%]"
        },
        {
            "tools": "CSS 3",
            "availity": "95%",
            "class": "w-[95%]",

        },
        {
            "tools": "Javascript ES6",
            "availity": "96%",
            "class": "w-[96%]"
        },
        {
            "tools": "Node js",
            "availity": "95%",
            "class": "w-[95%]"
        },
        {
            "tools": "Express js",
            "availity": "98%",
            "class": "w-[98%]"
        },
        {
            "tools": "MongoDB",
            "availity": "98%",
            "class": "w-[98%]"
        },
        {
            "tools": "React js",
            "availity": "95%",
            "class": "w-[95%]"
        },
        {
            "tools": "Next js",
            "availity": "95%",
            "class": "w-[95%]"
        },
    ]

    const PersonalDetails = ()=>{
        return (
            <>
                <h1 className="text-xl py-2">PERSONAL DETAILS</h1>
                <p className="mt-2 text-base opacity-95">
                    I am MD Enamul Hossen, a JavaScript Developer with expertise in building dynamic web applications. I specialize in React.js, Node.js,
                    and MongoDB, crafting responsive user interfaces and efficient back-end systems. With experience in RESTful APIs, CRUD operations, and authentication,
                    I develop scalable and user-friendly solutions, ensuring seamless performance across both web and mobile platforms.
                </p>
                <div className="mt-5 flex flex-row gap-4">
                    <Link href="mailto:mdenamulh1998@gmail.com?subject= &body="
                          target={"_blank"}
                    >
                        <button
                            className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300">
                            <MdOutgoingMail/>
                        </button>
                    </Link>

                    <Link href="https://wa.me/+88001722924089?text=Hello%2C%20I%20have%20a%20question%21"
                          target={"_blank"}
                    >
                        <button
                            className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300">
                            <FaWhatsapp/>
                        </button>

                    </Link>
                    <Link href="https://t.me/+88001722924089?text=Hello%2C%20I%20have%20a%20question%21"
                          target={"_blank"}
                    >
                        <button
                            className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300">
                            <FaTelegramPlane/>
                        </button>

                    </Link>
                    <Link href="https://join.skype.com/invite/s2ERgKMfO6Mq"
                          target={"_blank"}
                    >
                        <button
                            className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300">
                            <PiSkypeLogoBold/>
                        </button>
                    </Link>

                </div>
            </>
        )
    }


    const Skills = ({DesSkills, DevSkills}) => {
        return (
            <>
                <div className="flex flex-col lg:flex-row  justify-between items-center gap-y-3">
                <h1 className="text-xl">MY PROFESSIONAL SKILLS</h1>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setActive("code")
                            }
                            }
                            className={active === "code" ? "px-3 py-2 background rounded-md lg:text-base text-sm text-neutral-800 hover:scale-105 transition-transform duration-300" :
                                "hover:scale-105 transition-transform px-3 py-2 companyBG companyText rounded-md text-base boxShadow duration-300 "}
                        >
                            Code Skills
                        </button>
                        <button
                            onClick={() => {
                                setActive("design")
                            }
                            }
                            className={active === "design" ? "hover:scale-105 transition-transform px-3 py-2 background rounded-md lg:text-base text-sm text-neutral-800 duration-300" :
                                "hover:scale-105 transition-transform px-3 py-2 companyBG companyText rounded-md text-base boxShadow duration-300 "}

                        >
                            Design Skills
                        </button>
                    </div>
                </div>
                <div className="lg:mt-3 mt-5 grid grid-cols-2 gap-x-3 ">

                    {
                        active === "code" ? (
                            DevSkills.map((skill, i) => {
                                return (
                                    <div className="py-2 col-span-1 " key={i}>
                                        <div className="flex justify-between">
                                            <h6 className="text-sm">{skill.tools}</h6>
                                            <h6 className="text-sm">{skill.availity}</h6>
                                        </div>
                                        <div className="h-1 w-full bg-orange-100  rounded-full">
                                            <div className={`h-1  background mt-2 rounded-full ${skill.class}`}></div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            DesSkills.map((skill, i) => {
                                return (
                                    <div className="py-2 col-span-1" key={i}>
                                        <div className="flex justify-between">
                                            <h6 className="text-sm">{skill.tools}</h6>
                                            <h6 className="text-sm">{skill.availity}</h6>
                                        </div>
                                        <div className="h-1 w-full bg-orange-100  rounded-full">
                                            <div className={`h-1  background mt-2 rounded-full ${skill.class}`}></div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }

                </div>
            </>
        )
    }


    return (
        <div className="grid grid-cols-5  lg:grid-cols-9  relative z-10 max-w-[1400px] rounded-2xl mx-auto
        lg:p-6 p-4   companyBG border borderColor mt-[-100px] gap-x-20 gap-y-10
        ">
            <div className="col-span-5 lg:col-span-4 ">
                <PersonalDetails/>
            </div>
            <div className="col-span-5 ">
                <Skills DesSkills={DesignSkills} DevSkills={DevSkills}/>
            </div>
        </div>
    );
};

export default Profile;
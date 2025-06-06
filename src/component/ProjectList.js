import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const ProjectList = ({data}) => {


    return (
        <>
            {
                data.map((item, index) => {
                    return (

                        <div key={index} className="col-span-1">
                            <div className="relative h-[300px] rounded-lg overflow-hidden cursor-pointer group">
                                <Image
                                    src={item.screenshot}
                                    alt="project image"
                                    className="w-full h-full object-cover"
                                    width={100}
                                    height={100}
                                    quality={100}
                                />

                                {/* Overlay and Buttons on Hover */}
                                <div
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex flex-col items-center gap-4">
                                        <Link href={item.project_url} target="_blank" >
                                            <button
                                                className="bg-[#FBC76A] cursor-pointer text-black/80 px-4 py-2 rounded-md font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                                            >
                                                Live Preview
                                            </button>
                                        </Link>

                                        <Link href={item.project_code} target="_blank">
                                            <button
                                                className={`${item.project_code === "" && "hidden"} bg-white cursor-pointer text-black/80 px-4 py-2 rounded-md font-semibold transform translate-y-4 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100`}

                                            >
                                            Source Code
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            <div
                                className="px-4 py-4 pt-5 bg-[#3D3E42] mt-[-5px] w-full border-s-8 border-[#FBC76A] cursor-pointer rounded-e-lg">
                                <h5 className="font-medium text-xl">{item.project_name}</h5>
                                <h6 className="text-white/80">{item.project_type}</h6>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default ProjectList;

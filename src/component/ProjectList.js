import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const ProjectList = ({ data }) => {

    // div className="scrollbar-hide relative z-20 mt-[30px] w-full h-fit flex flex-row gap-6 overflow-x-auto scrollbar "
    
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="col-span-1 ">
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
                                    className="px-4 py-3 relative z-20 bg-[#3D3E42]  font-medium text-lg mt-[-16px] w-full
                                    border-s-8 border-[#FBC76A] cursor-pointer rounded-e-lg

                                    ">
                                    {item.project_name}
                                </h5>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}


export default ProjectList;
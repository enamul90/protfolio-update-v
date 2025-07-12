import Link from 'next/link';
import React from 'react';

const FreeTools = () => {
    return (
        <div className =" px-5 mx-auto z-50 py-[150px] text-center ">
            <Link  href={"https://unrivaled-profiterole-065686.netlify.app/"}
                className="inline-flex  hover:border-b cursor-pointer items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                Image To Text Converter
            </Link>

            <Link href={"https://dulcet-naiad-856776.netlify.app/"}
                className="inline-flex hover:border-b cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >

                Temp Mail
            </Link>

            <Link href={"https://beamish-cajeta-c8e24f.netlify.app/"}
                className="inline-flex hover:border-b cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                Image Formats Converter
            </Link>
            
        </div>
    );
};

export default FreeTools;
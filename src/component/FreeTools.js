import React from 'react';

const FreeTools = () => {
    return (
        <div className =" px-5 mx-auto z-50 py-[150px] text-center ">
            <button
                
                className="inline-flex  hover:border-b cursor-pointer items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                Image To Text Converter
            </button>

            <button
                
                className="inline-flex hover:border-b cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >

                Temp Mail
            </button>

            <button
                
                className="inline-flex hover:border-b cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                Image Formats Converter
            </button>
            
        </div>
    );
};

export default FreeTools;
import React from 'react';

const FreeTools = () => {
    return (
        <div className ="w-[600px] mx-auto z-50 px-3 py-[150px] text-center ">
            <button
                // onClick={() => navigate('/your-target-page')}
                className="inline-flex  hover:border-b cursor-pointer items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                Image To Text Converter
            </button>

            <button
                // onClick={() => navigate('/your-target-page')}
                className="inline-flex hover:border-b cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >

                Temp Mail
            </button>

            <button
                // onClick={() => navigate('/your-target-page')}
                className="inline-flex hover:border-b cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                Image Formats Converter
            </button>
            
        </div>
    );
};

export default FreeTools;
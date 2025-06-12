import React from 'react';

const FreeTools = () => {
    return (
        <div className ="w-[600px] mx-auto z-50 px-3 py-[100px] text-center ">
            <button
                // onClick={() => navigate('/your-target-page')}
                className="inline-flex   cursor-pointer items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Image To Text Converter
            </button>

            <button
                // onClick={() => navigate('/your-target-page')}
                className="inline-flex cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Temp Mail
            </button>

            <button
                // onClick={() => navigate('/your-target-page')}
                className="inline-flex cursor-pointer  items-center gap-1 px-3 py-1.5 text-lg font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Image Formats Converter
            </button>
            
        </div>
    );
};

export default FreeTools;
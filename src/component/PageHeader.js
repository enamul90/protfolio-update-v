import React from 'react';
import Image from 'next/image';

const PageHeader = ({tittle, bg}) => {
  return (
    <>
      <div className="shadow-lg h-[280px] mt-[76px] bg-amber-50 relative overflow-hidden">
        <Image
          src={bg}
          alt="Portfolio Header"
          fill
          className="object-cover object-center h-full w-full rounded-md"
        />

        <div className="absolute inset-0 bg-[#FBC76A] opacity-30 rounded-md"></div>
        <div className="absolute inset-0 rounded-md flex items-center justify-center">
            <h1 className="text-4xl font-bold uppercase ">{tittle}</h1>
        </div>

      </div>
    </>
  );
};

export default PageHeader;

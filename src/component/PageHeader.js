import React from 'react';
import Image from 'next/image';

const PageHeader = ({tittle, bg}) => {
  return (
    <>
      <div className="shadow-lg h-[200px] mt-[73px] relative overflow-hidden">
        <Image
          src={bg}
          alt="Portfolio Header"
          fill
          className="object-cover object-center h-full w-full rounded-md opacity-80"
        />

        <div className="absolute inset-0 bg-[#34353A] opacity-60 rounded-md"></div>
        <div className="absolute inset-0 rounded-md flex items-center justify-center">
            <h1 className="text-4xl font-bold uppercase ">{tittle}</h1>
        </div>

      </div>
    </>
  );
};

export default PageHeader;

import React from 'react';
import Image from 'next/image';

const PageHeader = () => {
    return (
        <header className="flex justify-center p-5 bg-gray-200">
      <div className="border-8 border-black shadow-lg bg-gradient-to-br from-white/10 to-white/30 p-6">
        <Image
          src="/images/portfolio-header.jpg"
          alt="Portfolio Header"
          width={1200}
          height={300}
          className="rounded-md"
        />
        <div className="text-center mt-4 text-white font-bold text-2xl bg-black bg-opacity-70 py-2">
          My Portfolio
        </div>
      </div>
    </header>
    );
};

export default PageHeader;
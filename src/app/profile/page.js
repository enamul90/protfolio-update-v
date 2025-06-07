import React from 'react';
import Nave from "@/component/Nave";
import PageHeader from "@/component/PageHeader";

const Page = () => {
    return (
        <div className="overflow-hidden ">
            <Nave />
            <PageHeader tittle="About Me" bg="/images/portfolio-header.jpg" />

        </div>
    );
};

export default Page;

import React from 'react';
import Nave from "@/component/Nave";
import PageHeader from "@/component/PageHeader";

import Footer from "@/component/Footer";

const page = () => {
    return (
        <div className="overflow-hidden ">
            <Nave />
            <PageHeader tittle="Free Tools" bg="/images/portfolio-header.webp" />



            < Footer />

        </div>
    );
};

export default page;
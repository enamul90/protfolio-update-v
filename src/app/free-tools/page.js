import React from 'react';
import Nave from "@/component/Nave";
import PageHeader from "@/component/PageHeader";

import Footer from "@/component/Footer";
import FreeTools from "@/component/FreeTools";

const page = () => {
    return (
        <div className="overflow-hidden  ">
            
            <Nave />
            <PageHeader tittle="Free Tools" bg="/images/free-header.jpeg" />

            <FreeTools />

            < Footer />

        </div>
    );
};

export default page;
import React from 'react';
import Nave from "@/component/Nave";
import PageHeader from "@/component/PageHeader";
import PortfolioComponent from "@/component/PortfolioComponent";
import Footer from "@/component/Footer";



const Page = () => {
    return (
        <div className="overflow-hidden ">
            <Nave />
            <PageHeader tittle="portfolio" bg="/images/portfolio-header.jpg" />
            <PortfolioComponent />

            < Footer />

        </div>
    );
};

export default Page;

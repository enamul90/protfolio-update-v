import Nave from "@/component/Nave";
import PageHeader from "@/component/PageHeader";
import ForSellComponent from "@/component/ForSellComponent";
import Footer from "@/component/Footer";
import React from "react";


const Page = () => {
    return (
        <div className="overflow-hidden ">
            <Nave />
            <PageHeader tittle="For - Sell" bg="/images/for-sell.webp" />
            <ForSellComponent />

            < Footer />

        </div>
    );
};

export default Page;

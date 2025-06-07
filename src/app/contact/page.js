import React from 'react';
import Nave from "@/component/Nave";
import PageHeader from "@/component/PageHeader";
import ContactFrom from "@/component/ContactFrom";
import ContactMap from "@/component/ContactMap";
import ContactInfo from "@/component/ContactInfo";
import Footer from "@/component/Footer";

const Page = () => {
    return (
        <div className="overflow-hidden ">
            <Nave/>
            <PageHeader tittle="Contract Form" bg="/images/portfolio-header.jpg"/>

            <div className='companyBG py-2 lg:py-10'>
                <div className='lg:my-[60px] container mx-auto  lg:grid grid-cols-5 gap-5'>
                    <div className="lg:col-span-2">
                        <ContactMap/>
                    </div>

                    <div className="lg:col-span-3">
                        <ContactFrom/>
                    </div>
                </div>
            </div>

            <ContactInfo />

            <Footer/>

        </div>
    );
};

export default Page;

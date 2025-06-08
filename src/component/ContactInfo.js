import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const ContactInfo = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
                {/* Email */}
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-[#E6E8F9] rounded-full flex items-center justify-center">
                        <MdMarkEmailUnread className='text-xl text-[#15588D]' />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#fff]">Email</h3>
                    <p className="mt-2 text-[#fff]/70">Our friendly team is here to help.</p>
                    <p className="mt-1 companyText font-medium">mdenamulh1998@gmail.com</p>
                </div>
                {/* Office */}
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-[#E6E8F9] rounded-full flex items-center justify-center">
                        <IoLocation className='text-xl text-[#15588D]' />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#fff]">Office</h3>
                    <p className="mt-2 text-[#fff]/70 ">Come say hello at our office HQ.</p>
                    <p className="mt-1 companyText font-medium">69/2 Kallanpure Main Road   Dhaka</p>
                </div>
                {/* Phone */}
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-[#E6E8F9] rounded-full flex items-center justify-center">
                        <IoCall className='text-xl text-[#15588D]' />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#fff] ">Phone</h3>
                    <p className="mt-2  text-[#fff]/70 ">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-1 companyText font-medium">+880 1714-734227, 01337364443 </p>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;

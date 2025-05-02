"use client"
import React from 'react';

const Summary = () => {

    const AwadList = [
        {
            number : "20+",
            title : "Job Done Successfully"
        },
        {
            number : "02",
            title : "Award Winner"
        },
        {
            number : "04+",
            title : "Years Experience"
        },

    ]




    const MyAward = ({data})=>{

        return(
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mt-4 lg:mt-0 ">
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h1 className="text-5xl font-semibold  text-center lg:text-center">{item.number} </h1>
                                <p className="text-base mt-1 opacity-80 font-normal text-center lg:text-start ">{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>


        )
    }


    return (
        <div  className="mt-[100px] summary-box py-10 px-3 lg:px-0 ">
            <div className="max-w-[1150px] mx-auto py-8  ">
                <MyAward data={AwadList} />
            </div>
        </div>
    );
};

export default Summary;
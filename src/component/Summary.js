"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Summary = () => {

    const AwardList = [
        {
          number: 3,
          title: "Award Winner"
        },
        {
          number: 8,
          title: "Completed Project"
        },
        {
          number: 4,
          title: "Years Experience"
        },

    ]




    const MyAward = ({data})=>{
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.5
          });
        
          const [countKey, setCountKey] = useState(0);
        
          useEffect(() => {
            if (inView) {
              setCountKey(prev => prev + 1);
            }
          }, [inView]);

        return (
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mt-4 lg:mt-0">
              {
                data.map((item, index) => {
                  return (
                    <div key={index} ref={ref}>
                      <h1 className="text-5xl font-semibold text-center lg:text-center">
                        {
                          inView ? (
                            <CountUp key={countKey} end={item.number} duration={2} />
                          ) : (
                            0
                          )
                        }
                      </h1>
                      <p className="text-base mt-1 opacity-80 font-normal text-center lg:text-start">
                        {item.title}
                      </p>
                    </div>
                  );
                })
              }
            </div>
          );
    }


    return (
        <div  className="mt-[100px] summary-box py-10 px-3 lg:px-0 ">
            <div className="max-w-[1150px] mx-auto py-8  ">
                <MyAward data={AwardList} />
            </div>
        </div>
    );
};

export default Summary;
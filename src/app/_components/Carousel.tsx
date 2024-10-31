"use client";

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { dataCarouselType } from "../_types";

type Props = {
  carousel: dataCarouselType;
};

function Carousel({ carousel }: Props) {

  const [currentIndex, setCurrentIndex] = useState<number>(0);



  const handlePrev: () => void = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };
  const handleNext: () => void = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };


  


  
  return (
    <div className=" overflow-hidden">
      <div className="flex-row gap-4 justify-end  hidden md:flex mr-32">
        <button
          onClick={handlePrev}
          className=" group p-3 rounded hover:bg-zinc-800/50"
        >
          <FaArrowLeft className="fill-zinc-400 group-hover:fill-zinc-50" />
        </button>
        <button
          onClick={handleNext}
          className=" group p-3 rounded hover:bg-zinc-800/50"
        >
          <FaArrowRight className="fill-zinc-400 group-hover:fill-zinc-50" />
        </button>
      </div>

      <div 
        style={{
          transform : `translate-x-[-${currentIndex * 100}%]`,
               transition: 'transform 0.3s ease-in-out'
        }}
      className=" flex flex-row overflow-x-scroll w-auto gap-10 py-5 xl:pl-96 px-5 element">
        {carousel.map((item) => {
          
          return (
            <div key={item.id} className="relative flex-shrink-0 ">
              <Image
                className="min-w-[30em] w-auto  object-cover h-[20em] lg:h-[30em] rounded-xl"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-zinc-950 w-full h-20 flex flex-col  rounded-xl p-5">
                <h2 className="z-10 text-2xl font-mono font-semibold text-white pb-3">
                  {item.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="items-center justify-center flex-row gap-2 py-2 hidden md:flex ">
        {carousel.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-zinc-200 w-4" : "bg-zinc-800 "
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
export default Carousel;

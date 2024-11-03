// eslint-disable-next-line @next/next/no-img-element
"use client";
import ReactPlayer from "react-player";
import Svg from "../_components/Svg";
import { IoPauseOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { RiUser6Line } from "react-icons/ri";
import { dataHeader } from "../data";
import { useState } from "react";

const Header = () => {
  
  const [play, setPlay] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () =>  setIsOpen(!isOpen);
  const stopVideo = () => setPlay(!play)

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <ReactPlayer
            url="https://videos.porsche.com/id/282a7695-b017-48f6-a7ac-eb8a22fec50d/911turbo50yearsintrodesktop/hls.m3u8"
            controls={false}
            playing={play}
            muted
            loop
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <div className="flex flex-row items-center justify-between bg-gradient-to-b from-zinc-800 px-10 lg:px-16 py-4 lg:py-8">
          <button
            onClick={handleOpen}
            className="flex flex-row gap-2 items-center text-white w-1/2 "
          >
            <CiMenuBurger />
            <span className="hidden md:block">{dataHeader[0]}</span>
          </button>
          <div>
            <Svg />
            <img
              className="md:hidden"
              src="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png"
              width="30"
              height="40"
              alt="Porsche"
            />
          </div>

          <div className="w-1/2 flex justify-end">
            <RiUser6Line color="white" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center lg:px-16  bg-gradient-to-t from-zinc-950">
          <h1 className="flex flex-col items-center gap-2 text-3xl sm:flex-row md:text-5xl lg:text-7xl font-semibold text-gray-100 py-12 text-center">
            <span>{dataHeader[2]}</span>
            <span>{dataHeader[3]}</span>
          </h1>
          <div className="flex flex-col lg:flex-row w-full items-center">
            <p className=" font-normal  md:font-medium text-xl lg:text-2xl px-5 text-gray-100 w-full max-w-5xl   justify-center mx-auto lg:translate-x-6 pb-5">
              {dataHeader[4]}
            </p>

            <button
              onClick={stopVideo}
              className="p-1 md:p-3 border-[2px] border-gray-400 rounded w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center hover:bg-gray-700/50 hover:border-gray-500 transition duration-300 ease-in-out"
            >
              {play ? (
                <IoPauseOutline color="grey" />
              ) : (
                <IoIosPlay color="grey" />
              )}
            </button>
          </div>
        </div>
      </div>
      
        <div
          className={`bg-zinc-100 absolute top-0 h-screen  w-full lg:w-[60%]  z-50 transform transition-transform duration-700 ease-in-out   ${
            isOpen ? "-translate-x-1000" : "-translate-x-full"
          }`}
        >
          <button onClick={handleOpen}>X</button>
          modale
        </div>
    </div>
  );
};

export default Header;

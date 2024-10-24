"use client";
import ReactPlayer from "react-player";

import { IoPauseOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";

import { CiMenuBurger } from "react-icons/ci";
import { RiUser6Line } from "react-icons/ri";
import { dataHeader } from "../data";
import { useState } from "react";

const Header = () => {
  const [play, setPlay] = useState<boolean>(true);

  const stopVideo = () => {
    if (play === true) {
      setPlay(!play);
    } else if (play === false) {
      setPlay(!play);
    }
  };
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
        <div className="flex flex-row items-center justify-between bg-gradient-to-b from-zinc-800 px-4 lg:px-16 py-8">
          <span className="flex flex-row gap-2 items-center text-white w-1/2">
            <CiMenuBurger />
            <span className="hidden">{dataHeader[0]}</span>
          </span>

          <svg
            className="fill-gray-100 w-[250px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4500 300"
          >
            <title>Porsche</title>
            <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
          </svg>

          <div className="w-1/2 flex justify-end">
            <RiUser6Line color="white" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center lg:px-16 py-8 bg-gradient-to-t from-zinc-950">
          <h1 className="text-2xl max-w-sm lg:text-7xl font-bold text-gray-100 py-12">
            {dataHeader[2]}
          </h1>
          <div className="flex flex-col lg:flex-row w-full items-center">
            <p className="font-semibold text-xl lg:text-2xl px-5 text-gray-100 w-full max-w-5xl text-center justify-center mx-auto lg:translate-x-6 pb-5">
              {dataHeader[3]}
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
    </div>
  );
};

export default Header;

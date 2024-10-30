"use client"

import Stats from "./_layout/Stats";
import Under from "./_layout/Under";
import Turbo from "./_layout/Turbo";
import Carousel from "./_components/Carousel";
import Image from "next/image";
import turbo2 from "@/public/turbo2.avif";
import portiere from "@/public/portiere.avif";
import { dataNine } from "./data";
import lastturbo from "@/public/lastturbo.avif";


import ReactPlayer from "react-player";


import {
  dataCarouselOne,
  dataCarouselTwo,
  stringCrouselTwo,
  string360view,
} from "../app/data";
import Tittle from "./_components/Tittle";
import { MdOutlineViewInAr } from "react-icons/md";
import test from "@/public/test.png";
import Button from "./_components/Button";

const icon: JSX.Element = <MdOutlineViewInAr />;

export default function Home() {
  return (
    <main>
      <div className="bg-zinc-950  hidden lg:h-52  lg:block"></div>
      <section>
        <Under />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Turbo />
      </section>
      <section>
        <div className="bg-zinc-950 py-14">
          <Carousel carousel={dataCarouselOne} />
        </div>
      </section>
      <section>
        <div className="h-auto">
          <div className="pt-10  lg:pt-20 flex flex-col justify-center  items-center pb-10 lg:pb-16">
            <div>
              <Image
                className="max-w-xl  lg:w-52"
                src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/911.b68f913.svg"
                alt="911"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
            <div className=" px-3 py-5 lg:p-10 ">
              <Image className="rounded-xl " src={turbo2} alt="/" priority />
            </div>
            <div className=" w-full h-auto relative  lg:items-center  flex flex-col lg:flex-row  justify-around  ">
              <div className="px-5 md:text-center lg:text-start flex flex-col justify-center items-center">
                <h1 className="font-medium text-3xl lg:text-5xl pb-5">
                  {dataNine[0]}
                </h1>
                <p className="max-w-md  text-lg md:text-2xl">{dataNine[1]}</p>
              </div>
              <div className="px-6 py-5">
                <Image
                  className="  md:h-[40em] lg:h-[40em] rounded-xl lg:w-auto"
                  src={portiere}
                  alt="#"
                />
              </div>
            </div>
            <div className="px-6">
              <Image
                className="rounded-xl  lg:h-[30em] object-cover "
                src={lastturbo}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="pb-5 text-center lg:pt-20">
            <Tittle text={stringCrouselTwo} color={"text-zinc-950"} />
          </div>
          <Carousel carousel={dataCarouselTwo} />
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center px-7 md:px-52">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center py-8">
              {string360view[0]}
            </h2>
            <div className="rounded-xl h-[30em]    flex flex-col justify-around items-center relative ">
              <Image
                className="absolute -z-10 rounded-xl object-cover w-[100vw] h-full"
                src={test}
                alt="Background Image"
              />

              <div className="max-w-[250px] bg-zinc-900/80 rounded p-2 flex flex-row gap-2 items-center justify-center">
                <Button text={string360view[2]} />
                <Button text={string360view[1]} />
              </div>

              <div className="bg-zinc-900/80 w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 flex flex-col items-center justify-center rounded-full p-5 text-center">
                <p className="text-white text-3xl">{icon}</p>
                <p className="text-white text-lg md:text-xl font-semibold">
                  {string360view[3]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className=" py-40 w-full  flex items-center justify-center relative px-10   ">
          <div className="bg-red-400 rounded-2xl max-w-6xl overflow-hidden">
            <ReactPlayer
              url="https://videos.porsche.com/id/282a7695-b017-48f6-a7ac-eb8a22fec50d/911turbo50yearsintrodesktop/hls.m3u8"
              controls={false}
              playing={true}
              muted
              loop
             width="100%"
              height="100%"
              style={{
                objectFit: "cover",
              }}
            
            />
          </div>
        </div>
      </section>
    </main>
  );
}

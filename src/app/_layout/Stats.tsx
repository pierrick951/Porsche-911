import { motion, animate, useInView } from "framer-motion";
import Image from "next/image";
import back from "@/public/back.avif";
import { dataStats } from "../data";
import Button from "../_components/Button";
import { phraseStat } from "../data";
import { useRef } from "react";

function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div className="h-auto bg-zinc-950 flex  flex-col xl:flex-row lg:gap-10 justify-center items-center py-16">
      <div>
        {dataStats.map((item) => {
          return (
            <div key={item.id}>
              <div className=" flex flex-col justify-center xl:text-start items-center xl:items-start px-6">
                <div
                  ref={containerRef}
                  className=" flex flex-row gap-2 py-3 lg:py-5 items-end bg-red-4 text-nowrap "
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-white text-4xl  md:text-8xl"
                  >
                    {item.title}
                  </motion.h2>
                  <small className="text-white font-semibold text-2xl">
                    {item.sub}
                  </small>
                  <motion.h2
                    className="text-white text-4xl  md:text-8xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <span>{item.title2}</span>
                  </motion.h2>
                  <small className="text-white font-semibold text-xl">
                    {item.sub2}
                  </small>
                </div>
                <p className="text-zinc-500 w-52 lg:w-auto text-center lg:text-start pb-3">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
        <div className="my-10 lg:my-16 px-6 flex justify-center lg:justify-start">
          <Button text={phraseStat} />
        </div>
      </div>
      <Image
        className=" lg:max-w-2xl"
        src={back}
        alt="back of the porsche"
        loading="lazy"
      />
    </div>
  );
}
export default Stats;

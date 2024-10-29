import Image from "next/image";
import back from "@/public/back.avif";
import { dataStats } from "../data";
import Button from "../_components/Button";
import { phraseStat } from "../data";

type Props = {};
function Stats({}: Props) {
  return (
    <div className="h-auto bg-zinc-950 flex  flex-col xl:flex-row lg:gap-10 justify-center items-center py-16">
      <div>
        {dataStats.map((item) => {
          return (
            <div>
              <div className=" flex flex-col justify-center xl:text-start items-center xl:items-start px-6">
                <div className=" flex flex-row gap-2 py-3 lg:py-5 items-end bg-red-4 text-nowrap ">
                  <h2 className="text-white text-4xl  md:text-8xl">
                    {item.title}
                  </h2>
                  <small className="text-white font-semibold text-2xl">
                    {item.sub}
                  </small>
                  <h2 className="text-white text-4xl  md:text-8xl">
                    <span>{item.title2}</span>
                  </h2>
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
      <Image className=" lg:max-w-2xl" src={back} alt="back of the porsche" />
    </div>
  );
}
export default Stats;

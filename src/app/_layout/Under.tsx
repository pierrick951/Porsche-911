import { dataUnder } from "../data";
import Button from "../_components/Button";
import Image from "next/image";
import Svg911 from "../_components/Svg911";
import porsche from "@/public/porsche.avif";
import Tittle from "../_components/Tittle";

type Props = {};
function Under({}: Props) {
  return (
    <div className=" grid grid-cols-3 grid-rows-2 bg-zinc-950">
      <div className="relative  h-[200px] md:h-96 bg-gradient-to-t from-zinc-800 to-zinc-950  row-start-1 col-span-3">
        
          <Svg911 />


        <Image
        className="absolute bottom-0 translate-y-10 lg:translate-y-1/3 xl:translate-x-48 "
          src={porsche}
          alt="porsche 911"
        />
      </div>
      <div className="  flex flex-col justify-center items-center   h-60 sm:h-80 bg-zinc-950 lg:pt-20 row-start-2 col-start-2 ">
        <Tittle text={dataUnder[0]} color="text-zinc-100"/>
        <small className="mt-4 text-gray-100 bg-gray-800/60 rounded py-0.5 px-1 mb-6">
          {dataUnder[1]}
        </small>
        <div className=" flex-col flex lg:flex-row gap-2">
          <Button text={dataUnder[2]} />
          <Button text={dataUnder[3]} />
        </div>
      </div>
    </div>
  );
}
export default Under;

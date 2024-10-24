import { dataUnder } from "../data";
import Image from "next/image";
import porsche from "@/public/porsche.avif";

type Props = {};
function Under({}: Props) {
  return (
    <div className="h-auto bg-zinc-950">
      <div className=" justify-center items-center relative flex h-[500px]">
        <div className="absolute bg-red-400"></div>
        <h2 className="text-8xl">{dataUnder[0]}</h2>
        <Image 
        className="absolute translate-y-44"
        src={porsche} alt="porsche 911" />
      </div>
      <div className=" justify-center items-center h-[500px]"></div>
    </div>
  );
}
export default Under;

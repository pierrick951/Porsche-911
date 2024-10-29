import turbo from "@/public/turbo.avif";
import Image from "next/image";
import { dataTurbo } from "../data";

type Props = {};
function Turbo({}: Props) {
  return (
    <div>
      <div className="relative">
        <div className="absolute bottom-0 h-20 bg-gradient-to-t from-zinc-950 w-full"></div>
        <Image
          className="w-full object-cover object-center h-52 md:h-[30em] lg:h-[40em]"
          src={turbo}
          alt="back"
        />
      </div>
      <div className="h-auto bg-zinc-950 flex flex-col gap-2 items-center justify-center py-10 lg:py-2">
        <div className="max-w-5xl text-center md:-translate-y-1/3 ">
            
              <h1 className=" text-2xl  md:text-4xl lg:text-5xl font-semibold text-white pb-6">{dataTurbo[0]}</h1>
              <p className="text-white text-lg md:text-xl px-4">{dataTurbo[1]}</p>
        </div>
      </div>
    </div>
  );
}
export default Turbo;

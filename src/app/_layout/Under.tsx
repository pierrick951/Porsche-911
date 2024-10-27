import { dataUnder } from "../data";
import Button from "../_components/Button";
import Image from "next/image";
import Svg911 from "../_components/Svg911";
import porsche from "@/public/porsche.avif";
import Tittle from "../_components/Tittle";

type Props = {};
function Under({}: Props) {
  return (
    <div className="h-auto bg-gradient-to-t from-zinc-800 to-zinc-950">
      <div className=" justify-center items-center relative flex h-64">
        <div>
          <Svg911 />
        </div>

        <Image
          className="absolute translate-y-20"
          src={porsche}
          alt="porsche 911"
        />
      </div>
      <div className="  flex flex-col justify-center items-center min-h-96  h-auto bg-zinc-950 lg:pt-20 ">
        <Tittle text={dataUnder[0]} />
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

import Svg from  "../_components/Svg"

import {
  dataFooter,
  dataSectionF,
  datathirdSection,
  stringLinkFooter,
  listFooter,
} from "../data";
import CompFooter from "../_components/CompFooter";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

const tabsIcon = [
  { id: 1, ico: <FaFacebookF /> },
  { id: 2, ico: <FaInstagram /> },
  { id: 3, ico: <FaPinterestP /> },
  { id: 4, ico: <FaXTwitter /> },
  { id: 5, ico: <FaLinkedin /> },
  { id: 6, ico: <IoLogoWechat /> },
  { id: 7, ico: <FaYoutube /> },
];

type Props = {};
function Footer({}: Props) {
  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="text-zinc-100 font-bold text-xl">{dataFooter[0]}</h1>
      <div className=" flex flex-row text-zinc-100 gap-2 text-l py-3">
        <p>🇨🇦 {dataFooter[1]}</p>
        <p className="underline">{dataFooter[2]}</p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-12">
        {dataSectionF.map((item) => {
          return (
            <CompFooter
              key={item.id}
              title={item.title}
              button={item.button}
              under={item.para}
            />
          );
        })}
        <div>
          <h1 className="text-xl font-semibold text-zinc-100">
            {datathirdSection[0]}
          </h1>
          <p className="text-lg text-zinc-100">{datathirdSection}</p>
          <div className="flex flex-wrap gap-2 pt-10">
            {tabsIcon.map((item) => {
              return (
                <button
                  className="bg-zinc-100 p-4 rounded  hover:bg-zinc-400 transition duration-700 ease-in-out "
                  key={item.id}
                >
                  {item.ico}
                </button>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
      <div className="py-12 ">
        <h1 className="text-xl font-semibold text-zinc-100 py-3 px-5">
          {stringLinkFooter}
        </h1>
        <div className=" flex flex-col lg:flex-row gap-5  max-w-lg lg:justify-evenly">
          {listFooter.map((item) => {
            return (
              <ul>
                <li className="text-zinc-100">{item.stringOne}</li>
                <li className="text-zinc-100">{item.stringTwo}</li>
                <li className="text-zinc-100">{item.stringThird}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <hr className=" my-5 border-zinc-600 border-1" />*
      <small className="text-zinc-100 text-center">© 2024 Porsche Cars Canada, Ltd.</small>*
<div className="py-20 flex justify-center items-center">
 <Svg/>
</div>
    </div>
  );
}
export default Footer;

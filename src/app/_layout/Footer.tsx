
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

function Footer() {
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
              <ul key={item.id}>
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
<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4500 300"
      className="fill-gray-100  w-52 "
    >
      <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
    </svg>
</div>
    </div>
  );
}
export default Footer;

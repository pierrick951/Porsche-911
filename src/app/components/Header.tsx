import { IoPauseOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { RiUser6Line } from "react-icons/ri";
import { dataHeader } from "../data";

type Props = {}
function Header({}: Props) {
  return (
    <div className="bg-zinc-600 min-h-screen   flex flex-col justify-between relative">
     <div className=" min-h-screen  w-full absolute bg-red-400">
e
     </div>
    <div className="flex flex-row items-center justify-between bg-gradient-to-b from-zinc-800/70 px-16 py-8 z-10">
    <span className=" flex flex-row gap-2 items-center text-white w-1/2">
      <CiMenuBurger />
      <span>{dataHeader[0]}</span>
    </span>
    <svg
      className=" fill-gray-100 w-[250px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4500 300"
    >
      <title>Porsche</title>
      <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
    </svg>
    <div className="w-1/2 flex justify-end ">
      <RiUser6Line
             color="white"/>
    </div>
  </div>

  <div className="text-center flex flex-col items-center px-16 py-8 bg-gradient-to-t from-zinc-800/70  z-10">
    <h1 className="text-7xl font-bold text-gray-100 py-12">{dataHeader[2]}</h1>
    <div className="flex flex-row  w-full items-end ">
        <p className="font-semibold text-2xl text-gray-100 max-w-5xl text-center justify-center mx-auto translate-x-6">{dataHeader[3]}</p>
        <button className=" p-3 border-[2px] border-gray-400 rounded w-12 h-12 flex justify-center items-center hover:bg-gray-700/50 hover:border-gray-500 transition duration-300 ease-in-out">
            <IoPauseOutline color="grey"/>
        </button>
    </div>
  </div>
  
</div>
  )
}
export default Header
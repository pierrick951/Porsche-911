import Image from "next/image"


type Props = {}
function Svg911({}: Props) {
  return (
    <Image
    className=" w-50 xl:w-[500px] opacity-50 absolute bottom-[40%]  "
    src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/911.b68f913.svg" alt="911"
    width={200}
    height={500}
    />
  )
}
export default Svg911
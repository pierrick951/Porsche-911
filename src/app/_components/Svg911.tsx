import Image from "next/image"


type Props = {}
function Svg911({}: Props) {
  return (
    <Image
    className=" w-52 lg:w-[30em] pt-20"
    src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/911.b68f913.svg" alt="911"
    width={100}
    height={100}
    />
  )
}
export default Svg911
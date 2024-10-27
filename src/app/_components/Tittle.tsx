type Props = {
  text: string;
};
function Tittle({ text }: Props) {
  return <h2 className="text-gray-100 text-2xl  md:text-3xl lg:text-6xl font-semibold">{text}</h2>;
}
export default Tittle;

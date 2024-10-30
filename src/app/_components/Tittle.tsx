type Props = {
  text: string;
  color:string
};
function Tittle({ text,color }: Props) {
  return <h2 className={`${color} text-2xl  md:text-3xl lg:text-6xl font-semibold  text-nowrap`}>{text}</h2>;
}
export default Tittle;

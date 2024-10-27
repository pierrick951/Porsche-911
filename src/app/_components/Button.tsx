type Props = {
  text: string;
};
function Button({ text }: Props) {
  return <button className="w-48  lg:w-auto  px-4 text-sm py-3 border-2 text-gray-100 font-medium rounded-[4px] hover:bg-zinc-800/80 hover:border-zinc-700  transition duration-500 ease-in-out ">{text}</button>;
}
export default Button;

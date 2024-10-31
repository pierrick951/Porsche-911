import {} from "../data";
type Props = {
  title: string;
  under: string;
  button: string;
};
function CompFooter({ title, under, button }: Props) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-zinc-100">{title}</h1>
      <p className="text-lg text-zinc-100">{under}</p>
      <div className="pt-10">
        <button
          className={`bg-zinc-100  max-w-xs w-full py-4 rounded hover:bg-zinc-400 hover:border-zinc-400/50  transition duration-500 ease-in-out`}
        >
          {button}
        </button>
      </div>
    </div>
  );
}
export default CompFooter;

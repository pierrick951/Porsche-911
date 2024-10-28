import Stats from "./_layout/Stats";
import Under from "./_layout/Under";

export default function Home() {
  return (
    <main>
      <div
       className="bg-zinc-950  hidden lg:h-52  lg:block"
      ></div>
      <section>
        <Under />
      </section>
      <section>
      <Stats/>
      </section>
    </main>
  );
}

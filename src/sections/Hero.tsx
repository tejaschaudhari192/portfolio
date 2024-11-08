import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png"
import ArrowDown from "@/assets/icons/arrow-down.svg"
export const HeroSection = () => {
  return <div className="py-32 md:py-48 lg:py-60">
    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="coder" />
        <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Available for new Projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">

        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 capitalize tracking-wide ">
          building exceptional user experience</h1>
        <p className="mt-4 text-center md:text-lg text-white/60">
          cheetah hi kehde</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">
            explore my work
          </span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold ">
            let&apos;s connect
          </span>
        </button>
      </div>
    </div>
  </div>;
};

import { useRef } from "react";

const data = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
];

export default function Testimonials() {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);

  const handlePause = (ref) => {
    ref.current.style.animationPlayState = "paused";
  };

  const handlePlay = (ref) => {
    ref.current.style.animationPlayState = "running";
  };

  return (
    <div className="bg-primary py-12 mt-12">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
        <div className="text-center mb-12">
          <p className="text-3xl md:text-5xl text-center font-semibold mt-4">
            Testimonials
          </p>
          <p className="text-gray-300 text-center mx-auto mt-4 w-full md:w-1/2">
            Discover our creative work, with top on the internet, From awarding
            website to stunning apps see how we bring ideas to life.
          </p>
        </div>
    <div className="relative flex w-full justify-center gap-8 ">


      <div className=" overflow-hidden h-[500px] w-full">

        <div
          ref={column1Ref}
          className="flex flex-col items-center gap-4 animate-scroll-up"
        >
          {[...data, ...data].map((item) => (
            <div
              key={item.id + "-1" + Math.random()}
              onMouseEnter={() => handlePause(column1Ref)}
              onMouseLeave={() => handlePlay(column1Ref)}
              className="w-full h-44 bg-secondary hover:rotate-2 shadow-2xl rounded-md flex items-center justify-center text-lg font-semibold cursor-pointer  transition"
            >
              {item.title}
            </div>
          ))}
        </div>

      </div>

      <div className="overflow-hidden hidden md:block h-[500px] w-full">
        <div
          ref={column2Ref}
          className="flex flex-col items-center gap-4 animate-scroll-down"
        >
          {[...data, ...data].map((item) => (
            <div
              key={item.id + "-2" + Math.random()}
              onMouseEnter={() => handlePause(column2Ref)}
              onMouseLeave={() => handlePlay(column2Ref)}
              className="w-full h-44 bg-secondary shadow-2xl hover:rotate-2 rounded-md flex items-center justify-center text-lg font-semibold cursor-pointer  transition"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden hidden md:block h-[500px] w-full">
        <div
          ref={column3Ref}
          className="flex flex-col items-center gap-4 animate-scroll-slow"
        >
          {[...data, ...data].map((item) => (
            <div
              key={item.id + "-3" + Math.random()}
              onMouseEnter={() => handlePause(column3Ref)}
              onMouseLeave={() => handlePlay(column3Ref)}
              className="w-full h-44 bg-secondary shadow-2xl hover:rotate-2 rounded-md flex items-center justify-center text-lg font-semibold cursor-pointer  transition"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

    </div>
    
    </div>
    </div>
    
  );
}

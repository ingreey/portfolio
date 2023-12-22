import { useState } from "react";
import Coindeed from "./Coindeed";
import Coinvise from "./Coinvise";
import Optifi from "./Optifi";
import Passage from "./Passage";
import StackSupport from "./StackSupport";

function Bento() {
  const workArray = [
    <Coindeed />,
    <Coinvise />,
    <Optifi />,
    <StackSupport />,
    <Passage />,
  ];

  const [active, setActive] = useState("projects");

  return (
    <div>
      <div className="flex text-[24px] pb-8">
        <button
          className={
            active !== "projects" ? "text-[#EAEAEA]" : "text-[#202020]"
          }
          onClick={() => setActive("projects")}
        >
          projects
        </button>
        <span className="px-4">/</span>
        <button
          className={active !== "photos" ? "text-[#EAEAEA]" : "text-[#202020]"}
          onClick={() => setActive("photos")}
        >
          photos
        </button>
      </div>
      <div className="grid auto-rows-[250px] grid-cols-3 gap-4">
        {workArray.map((component, i) => (
          <div
            key={i}
            className={`h-full w-full cursor-pointer row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p- ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }
          hover:scale-105 transition-transform font-extrabold text-2xl hover:text-slate-400/100`}
          >
            <div className="h-full w-full">{component}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bento;

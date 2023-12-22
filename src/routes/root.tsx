import { useState } from "react";
import Bento from "../components/Bento";

function Root() {
  const [active] = useState("projects");
  return (
    <div className="p-8">
      <div className="flex flex-col gap-4 justify-center font-playfair ">
        <div className="w-full text-[#202020] lowercase text-[24px] gap-1 flex flex-col items-end">
          <div>nickey</div>
          <div>web3 Developer</div>
          <button className="italic w-min">email</button>
          <div className="w-full items-start flex justify-between">
            <div className="flex">
              <button
                className={
                  active !== "projects" ? "text-[#EAEAEA]" : "text-[#202020]"
                }
              >
                projects
              </button>
              <button
                className={
                  active !== "photos" ? "text-[#EAEAEA]" : "text-[#202020]"
                }
              >
                /photos
              </button>
            </div>
            {/* Socials */}
            <div className="flex py-1 items-center gap-2">
              <button>
                <img src="/icons/linkedin.svg" alt="linkedin" />
              </button>
              <button>
                <img src="/icons/twitter.svg" alt="twitter" />
              </button>
              <button>
                <img src="/icons/github.svg" alt="github" />
              </button>
            </div>
          </div>
        </div>
        <Bento />
      </div>
    </div>
  );
}

export default Root;

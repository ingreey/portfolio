import { useLayoutEffect, useRef } from "react";
import Bento from "./Bento";
import gsap from "gsap";

function Body() {
  const comp = useRef(null);
  const handleEmailClick = () => {
    window.location.href = "mailto:greeyworks@gmail.com";
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#main", {
        opacity: 0,
        y: "-=30",
        duration: 1,
      });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div className="h-screen absolute w-full hidden" id="intro-slider">
        <div className="h-full text-[#202020] justify-center lowercase text-9xl gap-10 flex flex-col">
          <div>nickey</div>
          <div>web3 Developer</div>
        </div>
      </div>
      <div
        className="flex flex-col gap-20 justify-center font-playfair"
        id="main"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <div className="flex justify-between">
          <div className="text-md flex items-end">
            This site is very much a wip, I haven't even gotten a bio up yet ~
            ideally the projects would lead to pages about the project but
            haven't added them yet, so they're just the GH or Twitter links if I
            have them
          </div>
          <div className="w-full text-[#202020] lowercase text-[24px] gap-1 flex flex-col items-end">
            <div>greey works</div>
            <div>Design & Development studio </div>
            <button className="italic w-min" onClick={handleEmailClick}>
              email
            </button>
            <div className="flex">
              {/* Socials */}
              <div className="flex py-1 items-center gap-2">
                <SocialButton
                  name={"twitter"}
                  url="https://twitter.com/ingreey"
                />
                <SocialButton
                  name={"linkedin"}
                  url="https://linkedin.com/in/nicholasma"
                />
                <SocialButton
                  name={"github"}
                  url="https://github.com/ingreey"
                />
              </div>
            </div>
          </div>
        </div>

        <Bento />
      </div>
    </div>
  );
}

interface SocialButtonProps {
  name: string;
  url: string;
}

function SocialButton({ name, url }: SocialButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={`/icons/${name}.svg`} alt={name} />
    </a>
  );
}

export default Body;

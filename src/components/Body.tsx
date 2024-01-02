import Bento from "./Bento";
import { motion } from "framer-motion";

function Body() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex flex-col gap-20 justify-center font-playfair"
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
            <div>nickey</div>
            <div>web3 Developer</div>
            <button className="italic w-min">email</button>
            <div className="flex">
              {/* Socials */}
              <div className="flex py-1 items-center gap-2">
                <SocialButton
                  name={"twitter"}
                  url="https://twitter.com/nickeym"
                />
                <SocialButton
                  name={"linkedin"}
                  url="https://linkedin.com/in/nicholasma"
                />
                <SocialButton
                  name={"github"}
                  url="https://github.com/nickeym"
                />
              </div>
            </div>
          </div>
        </div>

        <Bento />
      </div>
    </motion.div>
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

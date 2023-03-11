import { motion } from "framer-motion";

import { BsFillSunFill } from "react-icons/bs";

import LeniImage from "../assets/leni.jpg";
import DaryllImage from "../assets/daryll.jpeg";
import WestinImage from "../assets/westin.png";
import ZandrewImage from "../assets/zandrew.png";

interface Member {
  img: string;
  firstName: string;
  lastName: string;
  section: string;
}

function Top() {
  const members: Member[] = [
    {
      img: DaryllImage,
      firstName: "Daryll",
      lastName: "Ko",
      section: "WFW",
    },
    {
      img: WestinImage,
      firstName: "Westin",
      lastName: "Maceda",
      section: "WFW",
    },
    {
      img: ZandrewImage,
      firstName: "Zandrew",
      lastName: "Garais",
      section: "WFW",
    },
  ];
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col items-center border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:flex-row lg:justify-center lg:gap-20 lg:px-20 lg:py-36"
    >
      <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full lg:mb-0 lg:h-72 lg:w-72">
        <img
          src={LeniImage}
          alt="Profile Picture"
          className="h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 lg:max-w-[60%]">
        <h1 className="text-center text-3xl md:text-5xl">
          Hi! We are{" "}
          <span className="relative whitespace-nowrap font-bold">
            &lt;Team Name&gt;
            <motion.span
              whileInView={{ width: ["0%", "100%"] }}
              className="absolute left-0 -bottom-1 h-2 w-full origin-left bg-pink-500/50"
              transition={{ duration: 1.5 }}
            ></motion.span>
            <span className="absolute -bottom-6 left-0 w-full text-xs opacity-60">
              yes, that's our team name
            </span>
          </span>
          .
        </h1>
        <p className="mt-6 text-center text-sm leading-10 text-gray-700 sm:text-base sm:leading-[3rem]">
          This is our project,{" "}
          <span className="font-bold">
            Tweet Analysis on Leni Robredo's Perceived Competence as PH VP
          </span>
          . This is a data science endeavor that aims to use{" "}
          <span className="relative">
            relevant
            <motion.span
              whileInView={{ width: ["0%", "100%"] }}
              className="absolute left-0 -bottom-1 h-1 w-full origin-left bg-purple-500/50"
              transition={{ duration: 1.5 }}
            ></motion.span>
            <span className="absolute -bottom-5 left-0 w-full text-xs opacity-90">
              2016-2022
            </span>
          </span>{" "}
          Twitter data about Leni's perceived competence as Vice President
          during her term. Using{" "}
          <span className="bg-gradient-to-r from-[#336c9b] to-yellow-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
            Python
          </span>{" "}
          and its{" "}
          <span className="relative whitespace-nowrap">
            army of minions
            <motion.span
              whileInView={{ width: ["0%", "100%"] }}
              className="absolute left-0 -bottom-1 h-1 w-full origin-left bg-purple-500/50"
              transition={{ duration: 1.5 }}
            ></motion.span>
            <span className="absolute -bottom-5 left-0 w-full text-xs opacity-90">
              pandas & friends
            </span>
          </span>
          , we'll come up with an analysis that will shed light on the state of{" "}
          <span className="bg-gradient-to-r from-black to-red-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
            truth
          </span>{" "}
          in Twitter's Filipino landscape.
        </p>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:flex-col xl:flex-row">
          {members.map(({ img, firstName, lastName, section }, index) => (
            <motion.div
              animate={{
                scale: [
                  1,
                  1 + 0.025 * (index + 1),
                  1 + 0.025 * (index + 1),
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                ],
              }}
              transition={{
                duration: 6,
                delay: index * 2,
                repeat: Infinity,
              }}
              className="flex w-fit items-center gap-3 rounded-full border-2 border-solid border-black bg-gray-200 px-6 py-2 font-bold drop-shadow-xl"
              key={index}
            >
              <img
                src={img}
                alt={firstName}
                className="h-10 w-10 rounded-full border-2 border-solid border-black"
              />
              <div className="text-sm">
                <p>{lastName},</p>
                <p>{firstName}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gray-400/60 px-2.5 py-0.5 text-xs">
                <BsFillSunFill />
                {section}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Top;

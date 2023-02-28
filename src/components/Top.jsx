import { motion } from "framer-motion";

import LeniImage from "../assets/leni.jpg";
import DaryllImage from "../assets/daryll.jpg";
import WestinImage from "../assets/westin.png";

function Top() {
  const members = [
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
      img: DaryllImage,
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
          <span className="relative font-bold">
            &lt;Team Name&gt;
            <motion.span
              whileInView={{ width: ["0%", "100%"] }}
              className="absolute left-0 -bottom-1 h-2 w-full origin-left bg-pink-500/50"
              transition={{ duration: 1.5 }}
            ></motion.span>
          </span>
          .
        </h1>
        <p className="my-3 text-center text-sm leading-6 text-gray-700 sm:text-base">
          Lorem ipsum dolor sit,{" "}
          <span className="font-bold">
            Tweet Analysis of Leni Robredo's Competence as PH VP
          </span>
          , amet consectetur adipisicing elit. Delectus modi inventore alias
          obcaecati qui, iste nobis exercitationem deserunt magnam asperiores
          voluptatum sit, molestiae, facere maiores eius id odio ullam illum
          minima consequuntur quae ipsam soluta quibusdam! Eum dolor sed
          blanditiis optio deleniti quos vel quasi? Vitae minima reprehenderit
          deserunt veritatis.
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
              <div className="rounded-full bg-gray-400/60 px-2.5 py-0.5 text-xs">
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

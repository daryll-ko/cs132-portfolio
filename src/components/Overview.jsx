import { motion } from "framer-motion";

import { AiOutlineLike } from "react-icons/ai";
import { IoChatbubbleOutline, IoCameraOutline } from "react-icons/io5";

function Overview() {
  const data = [
    {
      icon: <IoChatbubbleOutline size={60} />,
      heading: "Motivation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?",
    },
    {
      icon: <IoCameraOutline size={60} />,
      heading: "Problem",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure?",
    },
    {
      icon: <AiOutlineLike size={60} />,
      heading: "Solution",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, numquam?",
    },
  ];
  return (
    <section
      id="overview"
      className="border-b border-solid border-black py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        Why are we doing this?
      </h1>
      <h3 className="text-center text-lg text-gray-500 md:text-2xl">
        [description of our motivation]
      </h3>
      <div className="my-16 flex flex-wrap justify-center gap-10 text-center">
        {data.map(({ icon, heading, text }, index) => (
          <motion.div
            key={index}
            animate={{ scale: [1, 1.05, 1.05, 1, 1, 1, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 6, delay: index * 2, repeat: Infinity }}
            className="flex h-80 w-80 flex-col justify-center gap-5 rounded-md border border-solid border-black bg-white py-10"
          >
            <div className="mx-auto w-fit text-[#ea8a94]">{icon}</div>
            <div>
              <h3 className="mb-3 text-2xl font-bold">{heading}</h3>
              <p className="px-2">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mb-8 text-center text-lg text-gray-500 md:text-2xl">
        [comment about our problem]
      </p>
      <div className="flex justify-center">
        <a
          href="https://github.com/daryll-ko/cs132-main"
          alt="GitHub repo link"
        >
          <motion.button
            className="mx-auto rounded-md bg-blue-500 py-2 px-6 text-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Look at our data!
          </motion.button>
        </a>
      </div>
    </section>
  );
}

export default Overview;

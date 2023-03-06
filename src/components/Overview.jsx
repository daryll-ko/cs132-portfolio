import { motion } from "framer-motion";

import { BsLightbulb, BsQuestionCircle, BsCheck2Circle } from "react-icons/bs";

function Overview() {
  const data = [
    {
      icon: <BsLightbulb size={60} />,
      heading: "Motivation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?",
    },
    {
      icon: <BsQuestionCircle size={60} />,
      heading: "Problem",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure?",
    },
    {
      icon: <BsCheck2Circle size={60} />,
      heading: "Solution",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, numquam?",
    },
  ];
  return (
    <section
      id="overview"
      className="border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        Why are we doing this?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        [description of our motivation]
      </h2>
      <div className="my-16 flex flex-wrap justify-center gap-10 text-center">
        {data.map(({ icon, heading, text }, index) => (
          <motion.div
            key={index}
            animate={{ scale: [1, 1.05, 1.05, 1, 1, 1, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 6, delay: index * 2, repeat: Infinity }}
            className="flex h-80 w-80 flex-col justify-center gap-5 rounded-md border border-solid border-black bg-gray-100 py-10"
          >
            <div className="mx-auto w-fit text-pink-500">{icon}</div>
            <div>
              <h3 className="mb-3 text-2xl font-bold">{heading}</h3>
              <p className="px-2">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-lg text-gray-700 md:text-2xl">
        [comment about our problem]
      </p>
    </section>
  );
}

export default Overview;

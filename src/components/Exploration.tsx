import { motion } from "framer-motion";

import TwitterImage from "../assets/twitter.png";
import PythonImage from "../assets/python.png";

function Exploration() {
  const data = [
    {
      image: TwitterImage,
      heading: "Collection",
      text: "We scraped our data ipsum dolor sit.",
    },
    {
      image: PythonImage,
      heading: "Processing",
      text: "Python is a programming language.",
    },
  ];
  return (
    <section
      id="data_exploration"
      className="border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        Which tools did we use?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        [description about our methodology]
      </h2>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, text }, index) => (
          <div
            key={index}
            className="h-96 w-96 rounded-md border border-solid border-black bg-gray-100"
          >
            <div className="flex h-[70%] items-center justify-center border-b border-solid border-black">
              <motion.img
                src={image}
                alt="Sample gradient"
                whileInView={{ rotate: [0, 15, -7.5, 0] }}
                className="h-full"
              />
            </div>
            <div className="flex h-[30%] flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-gray-700 md:text-2xl">
        <motion.button
          className="mx-auto rounded-md bg-blue-600 py-2 px-6 text-lg text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://cs-132-portfolio-data-exploration.netlify.app/"
            target="_blank"
          >
            See our data exploration tour!
          </a>
        </motion.button>
      </p>
    </section>
  );
}

export default Exploration;

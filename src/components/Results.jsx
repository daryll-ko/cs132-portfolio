import { motion } from "framer-motion";

import RegressionImage from "../assets/regression.jpeg";
import BarGraph from "../assets/bar-graph.jpeg";

function Results() {
  const data = [
    {
      image: RegressionImage,
      heading: "Correlation",
      text: "y = mx + b",
    },
    {
      image: BarGraph,
      heading: "Graph",
      text: "Graphs are cool!",
    },
  ];
  return (
    <section id="results" className="bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        What did we find out?
      </h1>
      <h3 className="text-center text-lg text-gray-500 md:text-2xl">
        [description about our results]
      </h3>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, text }, index) => (
          <div
            key={index}
            className="h-96 w-96 rounded-md border border-solid border-black bg-white"
          >
            <div className="flex h-[70%] items-center justify-center border-b border-solid border-black">
              <img src={image} alt="Sample gradient" className="h-full" />
            </div>
            <div className="flex h-[30%] flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-8 text-center text-lg text-gray-500 md:text-2xl">
        Want to know more? Check out our GitHub repo!
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
            Look at our repo!
          </motion.button>
        </a>
      </div>
    </section>
  );
}

export default Results;

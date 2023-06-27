import { motion } from "framer-motion";

import CelebrationImage from "../assets/celebration.png";
import RegressionImage from "../assets/regression.jpeg";
import BarGraph from "../assets/bar-graph.jpeg";

import { InlineMath } from "react-katex";

interface Data {
  image: string;
  heading: string;
  text: string | JSX.Element;
}

function Conclusion() {
  const data: Data[] = [
    {
      image: RegressionImage,
      heading: "Correlation",
      text: <InlineMath math="y = mx + b" />,
    },
    {
      image: BarGraph,
      heading: "Graph",
      text: "Graphs are cool!",
    },
  ];
  return (
    <section
      id="discussion"
      className="bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        Now what?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        [anong silbi ng research natin]
      </h2>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, text }, index) => (
          <div
            key={index}
            className="h-96 w-96 overflow-hidden rounded-md border border-solid border-black bg-gray-100"
          >
            <div className="flex h-[70%] items-center justify-center border-b border-solid border-black bg-white">
              <img src={image} alt="Sample gradient" className="h-full" />
            </div>
            <div className="flex h-[30%] flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-8 text-center text-lg text-gray-700 md:text-2xl">
        Want to know more? Check out our GitHub repo!
      </p>
      <div className="flex justify-center">
        <a href="https://github.com/daryll-ko/cs132-main">
          <motion.button
            className="mx-auto rounded-md bg-blue-600 py-2 px-6 text-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Look at our repo!
          </motion.button>
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-10 text-lg text-gray-700 md:text-2xl">
        <img src={CelebrationImage} className="h-96 rounded-xl" />
        <p>Thanks for visiting! :)</p>
      </div>
    </section>
  );
}

export default Conclusion;

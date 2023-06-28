import { motion } from "framer-motion";

import CelebrationImage from "../assets/celebration.png";
import DataScience from "../assets/data_science.png";
import Campaign from "../assets/campaign.png";

interface Data {
  image: string;
  heading: string;
  text: string | JSX.Element;
}

function Conclusion() {
  const data: Data[] = [
    {
      image: DataScience,
      heading: "Impact",
      text: (
        <p>
          Our findings highlight the importance of <b>data-driven approaches</b>{" "}
          in understanding and addressing <b>disinformation dynamics</b>.
        </p>
      ),
    },
    {
      image: Campaign,
      heading: "Applications",
      text: (
        <p>
          Our research can aid the development of <b>targeted interventions</b>{" "}
          such as <b>timely fact-checking</b>, <b>public awareness campaigns</b>
          , and <b>platform policies</b>!
        </p>
      ),
    },
  ];
  return (
    <section
      id="conclusion"
      className="bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        What now?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        Continue investigating!
      </h2>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, text }, index) => (
          <div
            key={index}
            className="h-96 w-96 overflow-hidden rounded-md border border-solid border-black bg-gray-100"
          >
            <div className="flex h-[50%] items-center justify-center border-b border-solid border-black bg-white py-3">
              <img src={image} alt="Sample gradient" className="h-full" />
            </div>
            <div className="flex h-[50%] flex-col justify-center gap-2 px-3">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-16">
        <p className="mb-8 text-center text-lg font-bold text-gray-700 md:text-2xl">
          What's the bottom line?
        </p>
        <p className="text-md mx-auto mb-8 max-w-[75%] text-center text-gray-700 md:text-lg">
          Time is something we cannot stop. Let's do the best we can out of
          that.
        </p>
        <p className="mt-16 mb-8 text-center text-lg font-bold text-gray-700 md:text-2xl">
          What should we do with this info?
        </p>
        <p className="text-md mx-auto mb-8 max-w-[75%] text-center text-gray-700 md:text-lg">
          Build on top of it! Though our final dataset contained over 400
          tweets, a <b>wider dataset</b> could possibly{" "}
          <b>improve model performance</b> and <b>give better insights</b>.
          Using <b>more clusters</b> is also a possibility; there are a lot of
          tweets out there, after all!
        </p>
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
        <img
          src={CelebrationImage}
          className="max-h-80 rounded-xl md:max-h-96"
        />
        <p>Thanks for visiting! :)</p>
      </div>
    </section>
  );
}

export default Conclusion;

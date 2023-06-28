import { motion } from "framer-motion";

import { BsTwitter, BsHourglassSplit } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { InlineMath } from "react-katex";

function Overview() {
  const data = [
    {
      icon: <BsTwitter size={60} />,
      text: (
        <p>
          Twitter has become a prime <b>breeding ground</b> for{" "}
          <b>disinformation campaigns</b> involving <b>political figures</b>.
        </p>
      ),
    },
    {
      icon: <BsHourglassSplit size={60} />,
      text: (
        <p>
          Understanding the <b>temporal patterns</b> of disinformation is
          crucial in combating its impact on <b>public perception</b>.
        </p>
      ),
    },
    {
      icon: <HiMagnifyingGlass size={60} />,
      text: (
        <p>
          Our research focuses on <b>Leni-related</b> disinformation, utilizing{" "}
          <b>scraped tweets</b> to uncover these temporal patterns.
        </p>
      ),
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
        Because the{" "}
        <span className="bg-gradient-to-r from-black to-red-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
          truth
        </span>{" "}
        is in danger.
      </h2>
      <div className="my-16 flex flex-wrap justify-center gap-10 text-center">
        {data.map(({ icon, text }, index) => (
          <motion.div
            key={index}
            animate={{ scale: [1, 1.05, 1.05, 1, 1, 1, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 6, delay: index * 2, repeat: Infinity }}
            className="flex h-80 w-80 flex-col justify-center gap-5 rounded-md border border-solid border-black bg-gray-100 py-10"
          >
            <div className="mx-auto w-fit text-[#e01190]">{icon}</div>
            <div className="px-4">{text}</div>
          </motion.div>
        ))}
      </div>
      <p className="my-16 text-center text-lg font-bold text-gray-700 md:text-2xl">
        What's the plan?
      </p>
      <div className="flex flex-col items-center gap-10">
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">Research Question</h3>
          <p>
            Did topics surfacing from Leni disinformation tweets have increasing
            trends over time?
          </p>
        </div>
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">
            Null Hypothesis <InlineMath math="H_{0}" />
          </h3>
          <p>
            <span className="font-bold">All</span> topics had{" "}
            <span className="font-bold">stable trends</span> over time.
          </p>
        </div>
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">
            Alternative Hypothesis <InlineMath math="H_{a}" />
          </h3>
          <p>
            <span className="font-bold">Some</span> topics had an{" "}
            <span className="font-bold">increasing trend</span> over time.
          </p>
        </div>
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">Action Plan</h3>
          <p>
            We'll use{" "}
            <span className="bg-gradient-to-r from-[#336c9b] to-yellow-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
              Python
            </span>{" "}
            to extract common themes in our dataset.
            <br />
            <br />
            Using tools from statistics and machine learning, we'll come up with
            conclusions that will help us see the big picture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;

import { motion } from "framer-motion";

import Twint from "../assets/twint.png";
import Curation from "../assets/curation.png";
import ManualLabeling from "../assets/manual_labeling.png";
import Plus from "../assets/plus.png";
import Counter from "./Counter";

function Collection() {
  const data = [
    {
      img: Twint,
      heading: "Using twint",
      text: (
        <p>
          We used the{" "}
          <a
            href="https://github.com/twintproject/twint"
            className="text-blue-600"
          >
            <b>twint</b>
          </a>{" "}
          Python library to collect tweets. We first put all our tweets in a{" "}
          <b>fodder spreadsheet</b>.
        </p>
      ),
    },
    {
      img: Curation,
      heading: "Tweet curation",
      text: (
        <p>
          We selected tweets in our <b>fodder spreadsheet</b> that aligned with
          our project interests and moved them to the <b>main spreadsheet</b>.
        </p>
      ),
    },
    {
      img: ManualLabeling,
      heading: "Manual labeling",
      text: (
        <p>
          We manually labeled the <b>Account type</b>, <b>Content type</b>, and{" "}
          <b>Reasoning</b> columns.
        </p>
      ),
    },
    {
      img: Plus,
      heading: "Additional data",
      text: (
        <p>
          We also took in data from Groups <b>14</b>, <b>31</b>, and <b>34</b>{" "}
          to make our results better. Thanks to these groups for their data!
        </p>
      ),
    },
  ];
  return (
    <section
      id="collection"
      className="border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
        How did we collect our data?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        With the help of{" "}
        <span className="bg-gradient-to-r from-[#336c9b] to-yellow-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
          Python
        </span>
        !
      </h2>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ img, heading, text }, index) => (
          <div
            key={index}
            className="h-80 w-80 overflow-hidden rounded-md border border-solid border-black bg-gray-100"
          >
            <div className="flex h-[50%] flex-col justify-center border-b border-solid border-black bg-white p-3">
              <img
                src={img}
                alt="Sample gradient"
                className="mx-auto max-h-full"
              />
            </div>
            <div className="flex h-[50%] flex-col justify-center gap-2">
              <h3 className="text-xl font-bold">{heading}</h3>
              <p className="px-3 py-1 text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-8 text-center text-lg text-gray-700 md:text-2xl">
        We collected{" "}
        <b>
          about <Counter from={0} to={400} />
        </b>{" "}
        data points to be used for exploration.
      </p>
      <div className="flex justify-center">
        <a
          href="https://docs.google.com/spreadsheets/d/1xeTTNx1zVFSfcaIIqL7B2uOQ3gnYt_L5z_ioXfwIL5Q/edit#gid=107810933"
          target="_blank"
        >
          <motion.button
            className="mx-auto rounded-md bg-blue-600 py-2 px-6 text-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Look at our dataset!
          </motion.button>
        </a>
      </div>
    </section>
  );
}

export default Collection;

import { motion } from "framer-motion";

import LDAImage from "../assets/lda.png";
import RegressionImage from "../assets/regression.png";

function Modeling() {
  const data = [
    {
      image: LDAImage,
      heading: "LDA",
      text: (
        <p>
          We used <b>Latent Dirichlet Allocation (LDA)</b> to cluster our tweets
          into different topics.
        </p>
      ),
    },
    {
      image: RegressionImage,
      heading: "Regression",
      text: (
        <p>
          We then used multiple <b>linear regressions</b> against time to
          observe our clusters' trends.
        </p>
      ),
    },
  ];
  return (
    <section
      id="modeling"
      className="border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        How did we model our data?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        Using <span className="italic">another</span>{" "}
        <span className="bg-gradient-to-r from-[#a59186] to-[#c99039] bg-clip-text font-extrabold text-transparent drop-shadow-md">
          Jupyter notebook
        </span>
        !
      </h2>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, text }, index) => (
          <div
            key={index}
            className="h-80 w-80 overflow-hidden rounded-md border border-solid border-black bg-gray-100"
          >
            <div className="flex h-[50%] flex-col justify-center border-b border-solid border-black bg-white py-3">
              <motion.img
                src={image}
                alt="Sample gradient"
                whileInView={{ rotate: [0, 7.5, -7.5, 0] }}
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
      <p className="text-center text-lg md:text-2xl">
        <a
          href="https://cs-132-portfolio-data-modeling.netlify.app/"
          target="_blank"
        >
          <motion.button
            className="mx-auto rounded-md bg-blue-600 py-2 px-6 text-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See our data modeling tour!
          </motion.button>
        </a>
      </p>
    </section>
  );
}

export default Modeling;

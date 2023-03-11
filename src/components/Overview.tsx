import { motion, useMotionValue, useTransform } from "framer-motion";

import { BsLightbulb, BsQuestionCircle, BsCheck2Circle } from "react-icons/bs";

import { InlineMath } from "react-katex";

function Overview() {
  const x = useMotionValue(150);
  const y = useMotionValue(75);

  const rotateX = useTransform(y, [0, 150], [45, -45]);
  const rotateY = useTransform(x, [0, 300], [-45, 45]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function resetMouse() {
    x.set(150);
    y.set(75);
  }

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
        Because the{" "}
        <span className="bg-gradient-to-r from-black to-red-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
          truth
        </span>{" "}
        is in danger.
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
      <motion.div
        className="mx-auto mb-16 flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed border-black bg-gray-100"
        onMouseMove={handleMouse}
        onMouseLeave={resetMouse}
        style={{ perspective: 300 }}
      >
        <motion.div
          className="flex h-[100px] w-[200px] items-center justify-center"
          style={{ rotateX, rotateY }}
        >
          <motion.p className="text-center text-lg">
            What will we be looking at?
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">Research Question</h3>
          <p>
            Were tweets asserting Leni's incompetence as VP more likely to
            mention support for an opposing political entity?
          </p>
        </div>
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">
            Null Hypothesis <InlineMath math="H_{0}" />
          </h3>
          <p>
            Tweets asserting Leni's incompetence as VP were{" "}
            <span className="font-bold">equally likely</span> to explicitly show
            support for an opposing political entity and to not show support for
            any opposing political entity.{" "}
          </p>
        </div>
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">
            Alternative Hypothesis <InlineMath math="H_{a}" />
          </h3>
          <p>
            Tweets asserting Leni's incompetence as VP were{" "}
            <span className="font-bold">more likely</span> to explicitly show
            support for an opposing political entity.{" "}
          </p>
        </div>
        <div className="w-full rounded-md border border-solid border-black bg-gray-100 py-10 px-10 md:max-w-[40rem]">
          <h3 className="mb-5 text-2xl font-bold">Action Plan</h3>
          <p>
            We'll use{" "}
            <span className="bg-gradient-to-r from-[#336c9b] to-yellow-500 bg-clip-text font-extrabold text-transparent drop-shadow-md">
              Python
            </span>{" "}
            to extract common words, phrases, or textual properties in our
            dataset.
            <br />
            <br />
            Using statistical tools, we'll come up with conclusions that will
            help us see the big picture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;

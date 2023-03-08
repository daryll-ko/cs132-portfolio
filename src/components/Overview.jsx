import { motion, useMotionValue, useTransform } from "framer-motion";

import { BsLightbulb, BsQuestionCircle, BsCheck2Circle } from "react-icons/bs";

function Overview() {
  const x = useMotionValue(150);
  const y = useMotionValue(75);

  const rotateX = useTransform(y, [0, 150], [45, -45]);
  const rotateY = useTransform(x, [0, 300], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
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
      <motion.div
        className="mx-auto mb-16 flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed border-black bg-gray-100"
        onMouseMove={handleMouse}
        onMouseLeave={resetMouse}
        style={{ perspective: 300 }}
      >
        <motion.div
          className="flex h-[100px] w-[200px] items-center justify-center"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        >
          <motion.p className="text-center text-lg">
            What will we be looking at?
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-[40rem] rounded-md border border-solid border-black bg-gray-100 py-10 px-10">
          <h3 className="text-2xl font-bold">Research Question</h3>
          <p></p>
        </div>
        <div className="w-[40rem] rounded-md border border-solid border-black bg-gray-100 py-10 px-10">
          <h3 className="text-2xl font-bold">Null Hypothesis</h3>
          <p></p>
        </div>
        <div className="w-[40rem] rounded-md border border-solid border-black bg-gray-100 py-10 px-10">
          <h3 className="text-2xl font-bold">Alternative Hypothesis</h3>
          <p></p>
        </div>
        <div className="w-[40rem] rounded-md border border-solid border-black bg-gray-100 py-10 px-10">
          <h3 className="text-2xl font-bold">Action Plan</h3>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default Overview;

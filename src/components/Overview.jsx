import { AiOutlineLike } from "react-icons/ai";
import { IoChatbubbleOutline, IoCameraOutline } from "react-icons/io5";

function Overview() {
  const data = [
    {
      icon: <IoChatbubbleOutline size={60} />,
      heading: "Motivation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos?",
    },
    {
      icon: <IoCameraOutline size={60} />,
      heading: "Problem",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, iure?",
    },
    {
      icon: <AiOutlineLike size={60} />,
      heading: "Solution",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, numquam?",
    },
  ];
  return (
    <section
      id="overview"
      className="border-b border-solid border-black py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
        Overview
      </h1>
      <h3 className="mb-10 text-center text-lg text-gray-500 md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, earum?
      </h3>
      <div className="mb-10 flex flex-wrap justify-center gap-10 text-center">
        {data.map(({ icon, heading, text }, index) => (
          <div
            key={index}
            className="h-72 w-72 rounded-md border border-solid border-black bg-white py-10"
          >
            <div className="mx-auto mb-6 w-fit text-[#ea8a94]">{icon}</div>
            <h3 className="mb-3 text-2xl font-bold">{heading}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="mb-10 text-center text-lg text-gray-500 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
        dolorem?
      </p>
      <div className="flex justify-center">
        <button className="mx-auto rounded-md bg-blue-500 py-2 px-6 text-lg text-white transition-all hover:scale-110">
          Look at our data!
        </button>
      </div>
    </section>
  );
}

export default Overview;
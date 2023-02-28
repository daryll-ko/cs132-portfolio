import SampleGradient from "../assets/sample-gradient.jpeg";

function Data() {
  const data = [
    {
      heading: "Topic",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Keywords",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Tools",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Topic",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Keywords",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      heading: "Tools",
      text: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <section
      id="data"
      className="border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
        Where did our data come from?
      </h1>
      <h3 className="text-center text-lg text-gray-500 md:text-2xl">
        [description about our data]
      </h3>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ heading, text }, index) => (
          <div
            key={index}
            className="h-72 w-72 rounded-md border border-solid border-black bg-white"
          >
            <div className="h-[65%]">
              <img
                src={SampleGradient}
                alt="Sample gradient"
                className="h-full w-full"
              />
            </div>
            <div className="flex h-[35%] flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-gray-500 md:text-2xl">
        [additional description about our data]
      </p>
    </section>
  );
}

export default Data;

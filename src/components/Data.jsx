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
    <section className="border-b border-solid border-black py-20 px-6 sm:px-10 lg:px-16">
      <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
        We mined Twitter for mis(dis)information.
      </h1>
      <h3 className="mb-10 text-center text-lg text-gray-500 md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, earum?
      </h3>
      <div className="mx-auto mb-14 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ heading, text }, index) => (
          <div
            key={index}
            className="h-72 w-72 rounded-md border border-solid border-black bg-white"
          >
            <img src={SampleGradient} alt="Sample gradient" className="mb-2" />
            <h3 className="mb-3 text-2xl font-bold">{heading}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="mb-10 text-center text-lg text-gray-500 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
        dolorem?
      </p>
    </section>
  );
}

export default Data;

import TwitterImage from "../assets/twitter.png";
import PythonImage from "../assets/python.png";

function Methods() {
  const data = [
    {
      image: TwitterImage,
      heading: "Collection",
      text: "We scraped our data ipsum dolor sit.",
    },
    {
      image: PythonImage,
      heading: "Processing",
      text: "Python is a programming language.",
    },
  ];
  return (
    <section
      id="data"
      className="border-b border-solid border-black py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        Methodology
      </h1>
      <h3 className="text-center text-lg text-gray-500 md:text-2xl">
        [description about our methodology]
      </h3>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, text }, index) => (
          <div
            key={index}
            className="h-96 w-96 rounded-md border border-solid border-black bg-white"
          >
            <div className="flex h-[70%] items-center justify-center border-b border-solid border-black">
              <img src={image} alt="Sample gradient" className="h-full" />
            </div>
            <div className="flex h-[30%] flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-gray-500 md:text-2xl">
        [description about our tools]
      </p>
    </section>
  );
}

export default Methods;

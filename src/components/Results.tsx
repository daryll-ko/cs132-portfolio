import ClusteringResult from "../assets/clustering_result.png";
import RegressionResult from "../assets/regression_result.png";

import { InlineMath } from "react-katex";

interface Data {
  image: string;
  heading: string;
  bg: string;
  text: string | JSX.Element;
}

function Results() {
  const data: Data[] = [
    {
      image: ClusteringResult,
      heading: "Themes",
      bg: "bg-[#ecf1f8]",
      text: (
        <p>
          Our tweets were grouped into themes such as{" "}
          <span className="font-bold text-[#ee563b]">marginalization</span>,{" "}
          <span className="font-bold text-[#656ffa]">credibility</span>, and{" "}
          <span className="font-bold text-[#00cd96]">election fraud</span>. We
          also observed common words across themes.
        </p>
      ),
    },
    {
      image: RegressionResult,
      heading: "Significance",
      bg: "bg-white",
      text: (
        <p>
          The regressions tell us that time only had a <b>significant</b>{" "}
          <InlineMath math="(p < 0.03)" /> relationship with the{" "}
          <span className="font-bold text-[#656ffa]">credibility</span> cluster.
        </p>
      ),
    },
  ];
  return (
    <section
      id="results"
      className="border-b-2 border-solid border-black bg-[#efefef] py-20 px-6 sm:px-10 lg:px-16"
    >
      <h1 className="mb-8 text-center text-3xl font-bold md:text-5xl">
        What did we find out?
      </h1>
      <h2 className="text-center text-lg text-gray-700 md:text-2xl">
        Some cluster <b>did</b> act differently!
      </h2>
      <div className="mx-auto my-16 flex max-w-5xl flex-wrap justify-center gap-10 text-center">
        {data.map(({ image, heading, bg, text }, index) => (
          <div
            key={index}
            className="h-96 w-96 overflow-hidden rounded-md border border-solid border-black bg-gray-100"
          >
            <div
              className={`flex h-[50%] items-center justify-center border-b border-solid border-black ${bg}`}
            >
              <img
                src={image}
                alt="Sample gradient"
                className="mx-auto max-h-full"
              />
            </div>
            <div className="flex h-[50%] flex-col justify-center gap-2 px-3">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-8 text-center text-lg font-bold text-gray-700 md:text-2xl">
        Why should we care?
      </p>
      <p className="text-md mx-auto mb-8 max-w-[75%] text-center text-gray-700 md:text-lg">
        With these results, we see that there are specific <b>topics</b> or{" "}
        <b>points in time</b> that we can investigate further. Doing so may lead
        us to even more <b>insights</b>!
      </p>
      <p className="mt-16 mb-8 text-center text-lg font-bold text-gray-700 md:text-2xl">
        How does this fit into what we already know?
      </p>
      <p className="text-md mx-auto max-w-[75%] text-center text-gray-700 md:text-lg">
        We know that opinions towards <b>political candidates</b> and{" "}
        <b>incumbents</b> tend to develop rapidly over time. As more events
        happen across a political cycle, people gain more <b>context</b> and
        thus have more to say.
      </p>
    </section>
  );
}

export default Results;

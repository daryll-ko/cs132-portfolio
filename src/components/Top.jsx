import TopCircle from "../assets/top-circle.jpeg";

function Top() {
  const members = [
    {
      name: "Daryll Ko",
      section: "WFW",
    },
    {
      name: "Westin Maceda",
      section: "WFW",
    },
    {
      name: "Zandrew Garais",
      section: "WFW",
    },
  ];
  return (
    <section className="min-h-screen border-b border-solid border-black px-6 sm:px-10 lg:px-16">
      <div className="lg:flex lg:items-center lg:py-16">
        <div className="flex w-full justify-center py-10">
          <img
            src={TopCircle}
            alt="Profile Picture"
            className="mx-auto h-48 w-48 rounded-full lg:mx-0 lg:h-72 lg:w-72"
          />
        </div>
        <div className="lg:max-w-[60%]">
          <h1 className="mb-6 text-center text-3xl md:text-5xl">
            Hi! We are <span className="font-bold">ZWD</span>.
          </h1>
          <p className="mb-8 text-center text-sm leading-6 text-gray-500 sm:text-base">
            Lorem ipsum dolor sit,{" "}
            <span className="font-bold">
              Tweet Analysis of Leni Robredo's Competence as PH VP
            </span>
            , amet consectetur adipisicing elit. Delectus modi inventore alias
            obcaecati qui, iste nobis exercitationem deserunt magnam asperiores
            voluptatum sit, molestiae, facere maiores eius id odio ullam illum
            minima consequuntur quae ipsam soluta quibusdam! Eum dolor sed
            blanditiis optio deleniti quos vel quasi? Vitae minima reprehenderit
            deserunt veritatis.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {members.map(({ name, section }, index) => (
          <div className="flex w-48 flex-col items-center" key={index}>
            <div className="mb-3 h-12 w-12 rounded-full bg-black/50" />
            <div>{name}</div>
            <div>{section}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Top;

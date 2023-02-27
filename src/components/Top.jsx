import TopCircle from "../assets/top-circle.jpeg";
import DaryllImage from "../assets/daryll.jpg";

function Top() {
  const members = [
    {
      img: DaryllImage,
      firstName: "Daryll",
      lastName: "Ko",
      section: "WFW",
    },
    {
      img: DaryllImage,
      firstName: "Westin",
      lastName: "Maceda",
      section: "WFW",
    },
    {
      img: DaryllImage,
      firstName: "Zandrew",
      lastName: "Garais",
      section: "WFW",
    },
  ];
  return (
    <section
      id="top"
      className="min-h-screen border-b border-solid border-black py-20 px-6 sm:px-10 lg:flex lg:items-center lg:justify-center lg:gap-20 lg:px-20 lg:py-36"
    >
      <div>
        <img
          src={TopCircle}
          alt="Profile Picture"
          className="mx-auto h-48 w-48 rounded-full lg:mx-0 lg:h-72 lg:w-72"
        />
      </div>
      <div className="flex flex-col gap-8 lg:max-w-[60%]">
        <div>
          <h1 className="mb-6 text-center text-3xl md:text-5xl">
            Hi! We are <span className="font-bold">&lt;Team Name&gt;</span>.
          </h1>
          <p className="text-center text-sm leading-6 text-gray-500 sm:text-base">
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
        <div className="flex justify-center gap-5">
          {members.map(({ img, firstName, lastName, section }, index) => (
            <div
              className="flex items-center gap-3 rounded-full border-2 border-solid border-black bg-gray-200 px-6 py-2 font-bold drop-shadow-lg"
              key={index}
            >
              <img
                src={img}
                alt={firstName}
                className="h-10 w-10 rounded-full border-2 border-solid border-black"
              />
              <div className="text-sm">
                <p>{lastName},</p>
                <p>{firstName}</p>
              </div>
              <div className="rounded-full bg-gray-400/60 px-2.5 py-0.5 text-xs">
                {section}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Top;

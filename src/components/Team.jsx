import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Team() {
  const members = [
    {
      name: "Daryll Ko",
      facebook: "",
      twitter: "",
      github: "",
    },
    {
      name: "Westin Maceda",
      facebook: "",
      twitter: "",
      github: "",
    },
    {
      name: "Zandrew Garais",
      facebook: "",
      twitter: "",
      github: "",
    },
  ];
  return (
    <section
      id="team"
      className="border-b border-solid border-black bg-[#2f2f2f] py-20 px-6 text-white sm:px-10 lg:px-16"
    >
      <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
        Who <span className="italic">are</span> we?
      </h1>
      <h3 className="mb-16 text-center text-lg text-gray-300 md:text-2xl">
        Hit us up if you have any questions!
      </h3>
      <div className="mb-16 flex justify-center gap-16">
        {members.map(({ name }, index) => (
          <div className="flex w-48 flex-col items-center" key={index}>
            <div className="mb-8 h-48 w-48 rounded-full bg-black/50" />
            <div className="mb-3 text-xl font-bold">{name}</div>
            <div className="flex gap-3 items-center">
              <BsFacebook size={28} />
              <AiFillTwitterCircle size={30} />
              <AiFillGithub size={30} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center">
        Ⓒ 2023 &lt;Team Name&gt;. All Rights Reserved.
      </p>
    </section>
  );
}

export default Team;

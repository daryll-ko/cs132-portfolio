import DaryllImage from "../assets/daryll.jpg";
import WestinImage from "../assets/westin.png";

import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsDiscord } from "react-icons/bs";

function Team() {
  const members = [
    {
      img: DaryllImage,
      name: "Daryll Ko",
      facebook: "",
      twitter: "",
      github: "",
      discord: "Daryll#9517",
    },
    {
      img: WestinImage,
      name: "Westin Maceda",
      facebook: "https://www.facebook.com/westin.maceda/",
      facebookText: "westin.maceda",
      discord: "WDTM#8951",
    },
    {
      img: DaryllImage,
      name: "Zandrew Garais",
      facebook: "",
      twitter: "",
      github: "",
      discord: "",
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
        {members.map(
          (
            { img, name, facebook, facebookText, discord, twitter, github },
            index
          ) => (
            <div className="flex w-48 flex-col items-center" key={index}>
              <img
                src={img}
                alt="Profile picture"
                className="mb-8 h-48 w-48 rounded-full"
              />
              <div className="mb-3 text-xl font-bold">{name}</div>
              <div className="flex flex-col items-center gap-3">
                {facebook && (
                  <a
                    href={facebook}
                    alt="Facebook link"
                    className="group hover:text-black"
                  >
                    <div className="flex items-center gap-3 rounded-full border-2 border-solid border-white px-3 py-1 group-hover:border-blue-500 group-hover:bg-white">
                      <BsFacebook
                        size={20}
                        className="group-hover:text-blue-500"
                      />
                      <p>{facebookText}</p>
                    </div>
                  </a>
                )}
                {discord && (
                  <div className="flex items-center gap-3 rounded-full border-2 border-solid border-[#5965f2] bg-white px-3 py-1">
                    <BsDiscord size={20} className="text-[#5965f2]" />
                    <p className="text-[#5965f2]">{discord}</p>
                  </div>
                )}
                {twitter && <AiFillTwitterCircle size={30} />}
                {github && <AiFillGithub size={30} />}
              </div>
            </div>
          )
        )}
      </div>
      <p className="text-center">
        Ⓒ 2023 &lt;Team Name&gt;. All Rights Reserved.
      </p>
      <p className="mt-1 text-center italic">
        Portrait of Leni Robredo by Jojo Mendoza.
      </p>
    </section>
  );
}

export default Team;

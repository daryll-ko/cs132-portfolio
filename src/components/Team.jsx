import DaryllImage from "../assets/daryll.jpeg";
import WestinImage from "../assets/westin.png";
import ZandrewImage from "../assets/zandrew.png";

import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsDiscord, BsFillSunFill } from "react-icons/bs";
import Form from "./Form";

function Team() {
  const members = [
    {
      img: DaryllImage,
      name: "Daryll Ko",
      github: "https://github.com/daryll-ko",
      githubText: "daryll-ko",
      discord: "Daryll#9517",
      description: (
        <p>
          Yahallo! I'm{" "}
          <span className="animate-pulse-light bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-extrabold text-transparent">
            Daryll
          </span>
          . I'm currently a 2<sup>nd</sup> year BS Computer Science student at
          the University of the Philippines, Diliman. My primary fields of
          interest are <span className="font-bold">complexity theory</span> (
          <span className="italic">what</span> things we can do with CS),{" "}
          <span className="font-bold">algorithms & data structures</span> (
          <span className="italic">how</span> we do things in CS), and{" "}
          <span className="font-bold">scientific computing</span> (
          <span className="italic">where</span> we can apply CS). I enjoy seeing
          theory and application work together: it fulfills me whenever I see my
          thoughts turn into realities.
          <br />
          <br />
          On the side, I enjoy reading Japanese light novels, doing algorithmic
          problem-solving, exploring web development, and figuring out ways to
          make my life a happier and more exciting journey.
        </p>
      ),
    },
    {
      img: WestinImage,
      name: "Westin Maceda",
      facebook: "https://www.facebook.com/westin.maceda/",
      facebookText: "westin.maceda",
      discord: "WDTM#8951",
      description: (
        <p>
          Hello! I'm{" "}
          <span className="animate-pulse-light bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-extrabold text-transparent">
            Westin
          </span>
          . I am a national scholar on my 2<sup>nd</sup> year in pursuing a
          degree on BS Computer Science at the University of the Philippines,
          Diliman. I am currently taking up Data Science under Professor Paul
          Regonia. I hope to contribute in tackling fake news, which I believe
          to be among the most pressing issues that plague our country. I aspire
          to gain a solid foundation on fundamental concepts in computer science
          to eventually work on aiding the Philippines as a developing nation.
        </p>
      ),
    },
    {
      img: ZandrewImage,
      name: "Zandrew Garais",
      facebook: "https://www.facebook.com/zandrew.molecules/",
      facebookText: "zandrew.molecules",
      discord: "zands#1665",
      description: (
        <p>
          Hi! I'm{" "}
          <span className="animate-pulse-light bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-extrabold text-transparent">
            Zandrew
          </span>
          . I am a 2<sup>nd</sup> year undergraduate student of BS Computer
          Science in the University of the Philippines, Diliman. I am planning
          to join data science courses offered by the DICT. I currently aim to
          land in the field of data science, computer security, or service
          science.
        </p>
      ),
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
      <h2 className="mb-16 text-center text-lg text-gray-300 md:text-2xl">
        Hit us up if you have any questions...
      </h2>
      <div className="mb-16 flex flex-col items-center justify-center gap-16">
        {members.map(
          (
            {
              img,
              name,
              github,
              githubText,
              facebook,
              facebookText,
              discord,
              description,
            },
            index
          ) => (
            <div
              className="flex max-w-[90%] flex-col items-center md:max-w-[75%] lg:max-w-[50%]"
              key={index}
            >
              <img
                src={img}
                alt="Profile picture"
                className="mb-8 h-48 w-48 rounded-full"
              />
              <div className="flex items-center gap-3">
                <div className="text-xl font-bold">{name}</div>
                <div className="flex items-center gap-2 rounded-full bg-black px-2.5 py-0.5 text-xs font-bold text-yellow-500">
                  <BsFillSunFill />
                  <p>WFW</p>
                </div>
              </div>
              <div className="my-8">{description}</div>
              <div className="flex flex-col items-center gap-4">
                {github && (
                  <a
                    href={github}
                    alt="GitHub link"
                    className="group hover:text-black"
                  >
                    <div className="flex items-center gap-3 rounded-full border-2 border-solid border-white px-3 py-1 group-hover:border-black group-hover:bg-white">
                      <AiFillGithub
                        size={20}
                        className="group-hover:text-black"
                      />
                      <p>{githubText}</p>
                    </div>
                  </a>
                )}
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
              </div>
            </div>
          )
        )}
      </div>
      <h2 className="mb-16 text-center text-lg text-gray-300 md:text-2xl">
        ...or contact us via this form!
      </h2>
      <Form />
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

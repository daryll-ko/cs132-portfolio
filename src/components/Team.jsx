import DaryllImage from "../assets/daryll.jpeg";
import WestinImage from "../assets/westin.png";
import ZandrewImage from "../assets/zandrew.png";

import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsDiscord } from "react-icons/bs";

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
          <span class="animate-pulse-light bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-extrabold text-transparent">
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
      description: <p></p>,
    },
    {
      img: ZandrewImage,
      name: "Zandrew Garais",
      facebook: "https://www.facebook.com/zandrew.molecules/",
      facebookText: "zandrew.molecules",
      discord: "zands#1665",
      description: <p></p>,
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
        Hit us up if you have any questions!
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
            <div className="flex max-w-[50%] flex-col items-center" key={index}>
              <img
                src={img}
                alt="Profile picture"
                className="mb-8 h-48 w-48 rounded-full"
              />
              <div className="mb-3 text-xl font-bold">{name}</div>
              <div className="flex flex-col items-center gap-3">
                <div className="my-5">{description}</div>
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

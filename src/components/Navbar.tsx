import { motion, useScroll, useSpring } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const sections = [
    "Top",
    "Overview",
    "Collection",
    "Exploration",
    "Modeling",
    "Results",
    "Conclusion",
    "Team",
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-5 gap-7 bg-[#282828] py-3 md:flex md:items-center md:justify-center md:gap-10 md:py-5">
        {sections.map((section, index) => (
          <a
            key={index}
            href={`#${section.toLowerCase().split(" ").join("_")}`}
            className="transition-all hover:scale-110"
          >
            <div
              className="text-sm font-bold text-white md:text-base"
              key={index}
            >
              {section}
            </div>
          </a>
        ))}
      </div>
      <motion.div className="h-2 origin-left bg-[#282828]" style={{ scaleX }} />
    </div>
  );
}

export default Navbar;

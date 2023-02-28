import { motion, useScroll, useSpring } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const sections = ["Top", "Overview", "Data", "Methods", "Results", "Team"];

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-center gap-7 bg-[#282828] py-3 md:gap-10 md:py-5">
        {sections.map((section, index) => (
          <a
            href={`#${section.toLowerCase()}`}
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
      <motion.div className="h-2 origin-left bg-red-500" style={{ scaleX }} />
    </div>
  );
}

export default Navbar;

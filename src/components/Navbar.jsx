function Navbar() {
  const sections = ["Top", "Overview", "Data", "Methods", "Results", "Team"];
  return (
    <div className="flex items-center justify-center gap-7 bg-[#282828] py-3 md:gap-10 md:py-5">
      {sections.map((section) => (
        <div className="text-sm font-bold text-white md:text-base">
          {section}
        </div>
      ))}
    </div>
  );
}

export default Navbar;

function Navbar() {
  const sections = ["Top", "Overview", "Data", "Methods", "Results", "Team"];
  return (
    <div className="flex gap-1">
      {sections.map((section) => (
        <div>{section}</div>
      ))}
    </div>
  );
}

export default Navbar;

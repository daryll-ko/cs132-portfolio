import Top from "./Top";
import Overview from "./Overview";
import Collection from "./Collection";
import Exploration from "./Exploration";
import Results from "./Results";
import Team from "./Team";
import Navbar from "./Navbar";
import Modeling from "./Modeling";

function App() {
  return (
    <div className="relative font-display">
      <Navbar />
      <Top />
      <Overview />
      <Collection />
      <Exploration />
      <Modeling />
      <Results />
      <Team />
    </div>
  );
}

export default App;

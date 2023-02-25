import Top from "./Top";
import Overview from "./Overview";
import Data from "./Data";
import Methods from "./Methods";
import Results from "./Results";
import Team from "./Team";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="font-display relative">
      <Navbar />
      <Top />
      <Overview />
      <Data />
      <Methods />
      <Results />
      <Team />
    </div>
  );
}

export default App;

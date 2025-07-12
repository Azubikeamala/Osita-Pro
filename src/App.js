import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MathZone from "./pages/MathZone";
import CraftCorner from "./pages/CraftCorner";
import Friends from "./pages/Friends";
import About from "./pages/About";
import Story from "./pages/Story";
import Build from "./pages/Build";
import Brain from "./pages/Brain";
import PaperPuppets from "./pages/crafts/paper-puppets/PaperPuppets";
import HolidayHatMaker from "./pages/crafts/holiday-hats/HolidayHatMaker";
import RecycledRobot from "./pages/crafts/recycled-robot/RecycledRobot";
import NatureCollage from "./pages/crafts/nature-collage/NatureCollage";
import AdaDrum from './pages/stories/AdaDrum';
import MangoTree from './pages/stories/MangoTree';
import SkyDancers from './pages/stories/SkyDancers';
import Riddles from "./pages/brain/Riddles";
import PatternGame from "./pages/brain/PatternGame";
import MemoryMatch from "./pages/brain/MemoryMatch";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<MathZone />} />
        <Route path="/crafts" element={<CraftCorner />} />
        <Route path="/craft-corner" element={<CraftCorner />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="/story-time" element={<Story />} />
        <Route path="/build" element={<Build />} />
        <Route path="/brain" element={<Brain />} />
        <Route path="/crafts/paper-puppets" element={<PaperPuppets />} />
        <Route path="/crafts/holiday-hats" element={<HolidayHatMaker />} />
        <Route path="/crafts/recycled-robot" element={<RecycledRobot />} />
        <Route path="/crafts/nature-collage" element={<NatureCollage />} />
        <Route path="/stories/ada-drum" element={<AdaDrum />} />
        <Route path="/stories/mango-tree" element={<MangoTree />} />
        <Route path="/stories/sky-dancers" element={<SkyDancers />} />
        <Route path="/brain/riddles" element={<Riddles />} />
        <Route path="/brain/pattern" element={<PatternGame />} />
        <Route path="/brain/memory" element={<MemoryMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

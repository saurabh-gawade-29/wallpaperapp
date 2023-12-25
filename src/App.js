import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Wallpaper from "./components/Wallpaper";
import GLoader from "./components/GLoader ";
import ScrolTop from "./components/ScrolTop";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-20 mb-4 px-4">
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="wallpaper" element={<Wallpaper />} />
          <Route path="videos" element={<Videos />} />
          <Route path="about" element={<About />} />
        </Routes>
        <GLoader />
        <ScrolTop />
      </div>
    </div>
  );
}

export default App;

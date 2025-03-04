import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MemoryGame from "./MemoryGame";
import Shapes from "./Shapes";
import GussTheNumber from "./GussTheNumber";
function Routing() {
  return (
    <div>
      <h1>Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorygame" element={<MemoryGame />} />
        <Route path="/shapes" element={<Shapes />} />
        <Route path="/gussthenumber" element={<GussTheNumber />} />
      </Routes>
    </div>
  );
}

export default Routing;

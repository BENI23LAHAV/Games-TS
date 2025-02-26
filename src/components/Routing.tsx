import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MemoryGame from "./MemoryGame";
function Routing() {
  return (
    <div>
      <h1>Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorygame" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}

export default Routing;

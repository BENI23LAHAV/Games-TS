import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/memorygame">Memory Game</Link>
        </li>
        <li>
          <Link to="/shapes">Shapes</Link>
        </li>
        <li>
          <Link to="/gussthenumber">GussTheNumber</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

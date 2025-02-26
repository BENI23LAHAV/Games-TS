import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/memorygame">Memory Game</Link>
        </li>
        <li>Leaderboard</li>
        <li>Settings</li>
        <li>Logout</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/theshow">The show</NavLink>
    </nav>
  );
}

export default NavBar;

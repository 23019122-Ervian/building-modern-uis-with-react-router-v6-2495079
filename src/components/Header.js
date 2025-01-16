import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-1024x640.jpg";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/categories" className={getClass}>
          Categories
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

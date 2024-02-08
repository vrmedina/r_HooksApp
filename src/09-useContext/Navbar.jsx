import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header id="navbar">
      <Link className="navbar-brand" to={`/`}>Main App</Link>
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <NavLink to={`home`} className={ ({isActive}) => `nav-link ${isActive ? "active" : ""}` }>Home Page</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`login`} className={ ({isActive}) => `nav-link ${isActive ? "active" : ""}` }>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`about`} className={ ({isActive}) => `nav-link ${isActive ? "active" : ""}` }>About Us</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

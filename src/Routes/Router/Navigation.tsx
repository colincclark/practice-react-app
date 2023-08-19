import { Link } from "react-router-dom";

import "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/repos/react">React</Link></li>
          <li><Link to="/repos/redux">Redux</Link></li>
          <li><Link to="/repos/search">Search Form</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
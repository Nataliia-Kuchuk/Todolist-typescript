import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar:React.FunctionComponent = () => {
    return (
      <nav>
        <div className="nav-wrapper blue lighten-3 px1">
          <a href="/" className="brand-logo">
            React + typescript
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">To do list</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
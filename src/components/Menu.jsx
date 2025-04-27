import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../assets/css/style.css';
const Menu = () => {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </li> */}

<li>
  <NavLink to='/' className={({ isActive }) => isActive ? 'isActive' : 'isInactive'}>Home</NavLink>
</li>
<li>
  <NavLink to='/about' className={({ isActive }) => isActive ? 'isActive' : 'isInactive'}>About</NavLink>
</li>
<li>
  <NavLink to='/contact' className={({ isActive }) => isActive ? 'isActive' : 'isInactive'}>Contact</NavLink>
</li>
<li>
  <NavLink to='/blog' className={({ isActive }) => isActive ? 'isActive' : 'isInactive'}>Blog</NavLink>
</li>

      </ul>
    </div>
  );
};

export default Menu;

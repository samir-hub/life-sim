import React from "react";
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
        <NavLink to='/'>Home</NavLink>
      <NavLink to='/entryform'>Get Started</NavLink>
      <NavLink to='/dashboard'>My Dashboard</NavLink>
    </div>
  );
}

export default Navigation;

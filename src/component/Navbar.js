import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-item">Add Item</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from "react";
import ExtendedNav from "./ExtendedNav";

function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="nav-extend">
          <a href="/" className="nav-extend-link">
            Explore Apps
          </a>
          <ExtendedNav />
          <ion-icon name="caret-down-outline"></ion-icon>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

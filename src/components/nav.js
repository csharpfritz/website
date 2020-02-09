import React from "react";
import { Link } from "gatsby";

export default () => (
  <nav>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/members"}>Members</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </ul>
  </nav>
);

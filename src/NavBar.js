import React, { useState } from "react";
import "./NavBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navBar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home" className="edyoda">
            EDYODA
          </a>
          <a>
            <select style={{ border: "none" }}>
              <option>Courses</option>
              <option>React.js</option>
              <option>JavaScript</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
          </a>
          <a>
            <select style={{ border: "none" }}>
              <option>Programs</option>
              <option>University</option>
              <option>ClassRoom</option>
              <option>Scholarship</option>
            </select>
          </a>
        </div>
        <button
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="rightSide">
        <input
          className="input"
          style={{ border: "none" }}
          type="text"
          placeholder="Search..."
        />
        <button
          style={{ background: "white", border: "none", marginLeft: -100 }}
        >
          <SearchIcon />
        </button>
        <div style={{ fontFamily: "sans-serif", marginRight: "15px" }}>
          Login
        </div>
        <button
          style={{
            backgroundColor: "#0096ff",
            fontSize: "13px",
            color: "white",
            border: "none",
            borderRadius: "30px",
          }}
        >
          Join Now
        </button>
      </div>
    </div>
  );
}

export default NavBar;

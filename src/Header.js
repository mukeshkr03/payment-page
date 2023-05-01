import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="leftContainer">
          <div className="logo">EDYODA</div>
          <div className="courses">Courses</div>
          <div className="programs">Programs</div>
        </div>
        <div className="rightContainer">
          <div>rightContainer</div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Lockup.css";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import ExploreOffOutlinedIcon from "@material-ui/icons/ExploreOffOutlined";

function Lockup() {
  return (
    <div className="lockup">
      <div className="lockupContent">
        <div className="lockupContentBg">
          <p className="lockupPara">
            <span className="text1">
              Access curated courses worth ₹18,500 at
            </span>
            <span className="text2"> just ₹ 99</span>
            <span className="text3"> per year!</span>
          </p>
          <div className="contentPointer">
            <span className="icon">
              <LocalLibraryOutlinedIcon className="Lockupicon" />
            </span>
            <p>
              <span className="pointer11">100+</span>{" "}
              <span className="pointer12"> Job relevant courses</span>
            </p>
          </div>
          <div className="contentPointer">
            <span className="icon">
              <QueryBuilderOutlinedIcon className="Lockupicon" />
            </span>
            <p>
              <span className="pointer11">20,000+</span>{" "}
              <span className="pointer12"> Hours of content</span>
            </p>
          </div>
          <div className="contentPointer">
            <span className="icon">
              <LiveTvOutlinedIcon className="Lockupicon" />
            </span>
            <p>
              <span className="pointer11">Exclusive</span>{" "}
              <span className="pointer12"> webinar access</span>
            </p>
          </div>
          <div className="contentPointer">
            <span className="icon">
              <SchoolOutlinedIcon className="Lockupicon" />
            </span>
            <p>
              <span className="pointer12">Scholarship worth</span>{" "}
              <span className="pointer11"> ₹94,500</span>
            </p>
          </div>
          <div className="contentPointer" style={{ marginBottom: "50px" }}>
            <span className="icon">
              <ExploreOffOutlinedIcon className="Lockupicon" />
            </span>
            <p>
              <span className="pointer11">Add Free</span>{" "}
              <span className="pointer12"> learning experience</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lockup;

import React from "react";
import "./Content.css";
import Lockup from "./Lockup";
import Form from "./Form";

function Content() {
  return (
    <div className="content">
      <div className="content1">
        <Lockup />
        <Form/>
      </div>
    </div>
  );
}

export default Content;

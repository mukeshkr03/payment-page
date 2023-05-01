import React, { useState } from "react";
import "./Form.css";

function FormPointer({item, setAmount}) {
//   const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState(false);

  return (
    <div
      className="pointer3"
      style={{ backgroundColor: select ? "#D7EDDD" : "white" }}
    >
      {item.perMonth === 15 ? (
        <div className="offerExpired">
          <div
            className="offerExpired1"
            style={{ backgroundColor: "#47BA68", border: "1px solid #47BA68" }}
          >
            <div className="offerExpired2">Recommended</div>
          </div>
        </div>
      ) : (
        <div className="offerExpired">
          <div
            className="offerExpired1"
            style={{ backgroundColor: "white", border: "1px solid white" }}
          >
            <div className="offerExpired2"></div>
          </div>
        </div>
      )}

      <div className="pointer3Content">
        <input
          name="options"
          className="radioButton"
          type="radio"
          disabled={false}
          onChange={(e) => {
            // setSelect(false);
            setSelect(true);
            setAmount(item.total);
          }}
        />
        <div className="pointer3Content1">{item.subscription}</div>
        <div className="pointer3Content2">
          <div>Total <span className="total">₹{item.total}</span></div>
          <div>₹{item.perMonth} /mo</div>
        </div>
      </div>
    </div>
  );
}

export default FormPointer;

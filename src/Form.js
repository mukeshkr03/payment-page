import React, { useState } from "react";
import "./Form.css";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import FormPointer from "./FormPointer";
import { Link } from "react-router-dom";

function Form() {
  const [amount, setAmount] = useState(0);

  const options = [
    {
      subscription: "12 Months Subscription",
      total: 179,
      perMonth: 15,
    },
    {
      subscription: "6 Months Subscription",
      total: 149,
      perMonth: 25,
    },
    {
      subscription: "3 Months Subscription",
      total: 99,
      perMonth: 33,
    },
  ];

  return (
    <div className="form">
      <div className="formContent">
        <div className="formContentBg">
          <div className="pointer1">
            <div className="formButton">
              <button className="formButtons">1</button>
              <p className="p1">Sign Up</p>
            </div>

            <div className="formButton">
              <button className="formButtons">2</button>
              <p className="p1">Subscribe</p>
            </div>
          </div>
          <div className="pointer2">
            <p className="pointer2para">Select your Subscription plan</p>
          </div>

          <div
            className="pointer31"
            style={{ backgroundColor: "#E7E7E7", color: "gray" }}
          >
            <div className="offerExpired">
              <div className="offerExpired1">
                <div className="offerExpired2">Offer expired</div>
              </div>
            </div>
            <div className="pointer3Content">
              <input
                name="options"
                className="radioButton"
                type="radio"
                disabled={true}
              />
              <div className="pointer3Content1">12 Months Subscription</div>
              <div className="pointer3Content2">
                <div>
                  Total <span className="total">₹19</span>
                </div>
                <div>₹8 /mo</div>
              </div>
            </div>
          </div>

          {options.map((item) => {
            return (
              <FormPointer item={item} amount={amount} setAmount={setAmount} />
            );
          })}

          <p style={{ border: "2px solid gray", marginTop: 20 }}></p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            <p>Subscription Fee</p>
            <p>₹18,500</p>
          </div>

          <div className="pointer4">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Limited time offer</div>
              <div>-₹18,401</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <QueryBuilderOutlinedIcon />
              <p>Offer valid till 10 April 2023</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 500 }}>
              <span style={{ fontWeight: 700 }}>Total</span> (Incl. of 18% GST)
            </p>
            <p style={{ fontWeight: 1000 }}>
              {amount ? `₹${amount + 50}` : `₹${amount}`}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <button
              className="formButton1"
              style={{ backgroundColor: "white" }}
              onClick={() => {
                setAmount(0);
              }}
            >
              CANCEL
            </button>
              <button
                className="formButton2"
                style={{ backgroundColor: "#47BA68" }}
                onClick = {()=>{
                    prompt('Enter your Card Number and get access to Courses :)')
                    setAmount(0);
                }}
              >
              PROCEED TO PAY
              </button>
          </div>
          <img
            style={{ marginTop: "20px" }}
            src="https://www.rankme1.com/wp-content/uploads/2019/12/razorpay.jpeg"
            width="120px"
            height="42.69px"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;

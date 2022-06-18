import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Redux/auth/action";
import "./login.css";

export const Login = () => {
  let navigate = useNavigate();
  const [number, setNumber] = useState(null);
  const [num, setNum] = useState(null);
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();

  const setMobileNumber = () => {
    if (number.toString().length === 10) {
      // alert()
      setNum(number);
      localStorage.setItem("meesho-user-number", JSON.stringify(number));
      alert("New OTP is - 78520");
    } else {
      alert("Number should be of 10 digits");
    }
  };
  const setOtps = () => {
    if (otp === "78520") {
      // console.log(Math.floor(100000 + Math.random() * 900000))
      let userNumber = JSON.parse(localStorage.getItem("meesho-user-number"));
      dispatch(logOut(userNumber));

      navigate("/");
    } else {
      alert("enter valid otp");
    }
  };
  return (
    <div className="container" style={{ zIndex: "-1" }}>
      <div className="dot">.</div>
      <div className="color">
        <div className="banner">
          <img
            src="https://images.meesho.com/images/marketing/1648820929975.jpeg"
            alt="meesho discount img"
          />
          {num ? (
            <div>
              <br />
              <br />
              <div className="input_cont_signUp">
                {" "}
                <br />
                <div id="userNumber">Enter OTP sent to {num}</div> <br />
                <div>
                  <input
                    type="number"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <br />
                <div>
                  <button className="verifyBtn" onClick={setOtps}>
                    Verify
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h3>Sign Up to view your profile</h3>
              <div className="inBox_Number">
                <span>
                  <div className="cnty">Country</div>
                  <div className="numb_Si">🇮🇳 +91</div>
                </span>
                <input
                  name="number"
                  type="number"
                  placeholder="Phone Number"
                  className="in_box_num"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <button className="btn_otp" onClick={setMobileNumber}>
                Send OTP
              </button>
            </>
          )}

          <div className="tnc">
            <div className="colGra">By continuing, you agree to Meesho’s </div>
            <div className="colB">
              <span>Terms & Conditions</span>{" "}
              <span className="colGra">and</span> <br />
              <span> Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

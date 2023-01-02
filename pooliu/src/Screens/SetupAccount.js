import { toSize } from "ol/size";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SetupAccount() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const handleProfile = () => {
    alert(fname + " " + lname + " Your phone number is " + phoneNumber);
  };
  return (
    <div className="auth-pages d-flex align-items-center pickride-page ">
      <div className="container setup-page">
        <div className="row  d-flex justify-content-center">
          <div className="card card-sa">
            <div className="row d-flex justify-content-center">
              <div className="card-title mt-2 btn d-flex justify-content-lg-start">
                <Link to="/home" className="links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="mb-1"
                  >
                    <path
                      id="arrow"
                      d="M143.047,136.988a.715.715,0,0,0-.211-.527l-4.242-4.242-1.066-1.066a.765.765,0,0,0-1.055,0l-1.066,1.066-4.242,4.242a.765.765,0,0,0,0,1.055l1.066,1.066a.765.765,0,0,0,1.055,0l2.215-2.215v5.883a.76.76,0,0,0,.75.75h1.5a.76.76,0,0,0,.75-.75v-5.883l2.215,2.215a.736.736,0,0,0,1.055,0l1.066-1.066A.715.715,0,0,0,143.047,136.988ZM146,137a8.8,8.8,0,0,1-1.207,4.518,8.959,8.959,0,0,1-3.275,3.275,9.058,9.058,0,0,1-9.035,0,8.959,8.959,0,0,1-3.275-3.275,9.058,9.058,0,0,1,0-9.035,8.959,8.959,0,0,1,3.275-3.275,9.058,9.058,0,0,1,9.035,0,8.959,8.959,0,0,1,3.275,3.275A8.8,8.8,0,0,1,146,137Z"
                      transform="translate(-128 146) rotate(-90)"
                      fill="#ffb019"
                    />
                  </svg>
                  <span className="mt-1"> Return Home</span>
                </Link>
              </div>
              <div className="card-body">
                <h1 className="title">SET YOUR PROFILE</h1>
                <div className="row inputs mt-4 input-verify">
                  <div className="col-lg-6 col-12 d-flex justify-content-center ">
                    <input
                      type="text"
                      onChange={(e) => setFname(e.target.value)}
                      className="form-control my-5 input-verify"
                      id="inputFirstName"
                      placeholder="FIRST NAME"
                    />
                  </div>
                  <div className="col-lg-6 col-12 d-flex justify-content-center ">
                    <input
                      type="text"
                      onChange={(e) => setLname(e.target.value)}
                      className="form-control my-5 input-verify"
                      id="inputLastName"
                      placeholder="LAST NAME"
                    />
                  </div>
                </div>
                <div className="row inputs  input-verify my-4">
                  <div className="col-lg-6 col-12 d-flex justify-content-center ">
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      maxLength={8}
                      minLength={8}
                      type="number"
                      className="form-control my-5 input-verify"
                      id="inputFirstName"
                      placeholder="PHONE NUMBER"
                    />
                  </div>
                  <div className="col-lg-6 col-12 d-flex justify-content-center pickride-page px-3 my-5">
                    <button
                      type="button"
                      className="btn btn-outline-primary location-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#map-modal"
                    >
                      PROFILE PICTURE{" "}
                      <span style={{ fontSize: 15 }}>&#40;OPTIONAL&#41;</span>
                    </button>
                  </div>
                  <div className="col-lg-6 col-12 d-flex justify-content-between mt-5 emails">
                    <label className="email">GENDER:</label>
                    <div>
                      <input type="radio" id="male" name="isMale" value="1" />
                      <label for="male">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="female"
                        name="isFemale"
                        value="0"
                      />
                      <label for="female">Female</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <Link
                      onClick={() => handleProfile()}
                      className="d-flex justify-content-end mt-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="117"
                        height="58"
                        viewBox="0 0 117 58"
                      >
                        <defs>
                          <filter
                            id="Rectangle_11"
                            x="0"
                            y="0"
                            width="117"
                            height="58"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dx="-1" dy="2" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood
                              floodColor="#143d6d"
                              floodOpacity="0.502"
                            />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_17"
                          dataName="Group 17"
                          transform="translate(-1026 -569)"
                        >
                          <g
                            transform="matrix(1, 0, 0, 1, 1026, 569)"
                            filter="url(#Rectangle_11)"
                          >
                            <rect
                              id="Rectangle_11-2"
                              dataName="Rectangle 11"
                              width="99"
                              height="40"
                              rx="10"
                              transform="translate(10 7)"
                              fill="#143d6d"
                            />
                          </g>
                          <text
                            id="SAVE"
                            transform="translate(1066 601)"
                            fill="#ffb019"
                            fontSize="16"
                            fontFamily="SegoeUI-Bold, Segoe UI"
                            fontWeight="700"
                          >
                            <tspan x="0" y="0">
                              SAVE
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SetupAccount;

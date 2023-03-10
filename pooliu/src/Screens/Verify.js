import React from "react";
import { Link } from "react-router-dom";
const Verify = () => {
  return (
    <div className="auth-pages d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5 p-0 container-mini container-mini-left">
            <div className="card cards">
              <div className="card-title mt-2 btn d-flex justify-content-sm-start">
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
                <div className="container">
                  <div className="row">
                    <h1 className="verHead">
                      A verification code was sent to:
                    </h1>
                  </div>
                  <div className="row">
                    <h1 className="verEmail">xxxxxxxx@students.liu.edu.lb</h1>
                  </div>
                  <div className="row mt-3 mb-5">
                    <a href="" className="verEdit">
                      Edit ID
                    </a>
                  </div>
                  <div className="row mt-5 mb-5"></div>
                  <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-3 col-xl-2">
                      <input
                        type="text"
                        className="form-control singleIn"
                        id="nOne"
                        placeholder=""
                      />
                    </div>
                    <div className="col-3 col-xl-2">
                      <input
                        type="text"
                        className="form-control singleIn"
                        id="nTwo"
                        placeholder=""
                      />
                    </div>
                    <div className="col-3 col-xl-2">
                      <input
                        type="text"
                        className="form-control singleIn"
                        id="nThree"
                        placeholder=""
                      />
                    </div>
                    <div className="col-3 col-xl-2">
                      <input
                        type="text"
                        className="form-control singleIn"
                        id="nFour"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="row mt-5 mb-5"></div>
                </div>
                //Needs Review TODO
                <a
                  href="login.html"
                  className="d-flex justify-content-center mt-5"
                >
                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="218"
                    height="70"
                    viewBox="0 0 218 70"
                  >
                    <defs>
                      <filter
                        id="Rectangle_11"
                        x="0"
                        y="0"
                        width="218"
                        height="70"
                        filterUnits="userSpaceOnUse"
                      >
                        <feOffset dx="-1" dy="2" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood floodColor="#143d6d" floodOpacity="0.502" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g
                      id="Group_106"
                      data-name="Group 106"
                      transform="translate(-254 -493)"
                    >
                      <g
                        transform="matrix(1, 0, 0, 1, 254, 493)"
                        filter="url(#Rectangle_11)"
                      >
                        <rect
                          id="Rectangle_11-2"
                          data-name="Rectangle 11"
                          width="200"
                          height="52"
                          rx="10"
                          transform="translate(10 7)"
                          fill="#143d6d"
                        />
                      </g>
                      <text
                        id="VERIFY"
                        transform="translate(332 534)"
                        fill="#ffb019"
                        fontSize="20"
                        fontFamily="SegoeUI-Bold, Segoe UI"
                        fontWeight="700"
                        letterSpacing="-0.007em"
                      >
                        <tspan x="0" y="0">
                          VERIFY
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </a>
                <p className="d-flex justify-content-start mt-3 ps-3">
                  Didn't receive a code yet? &nbsp;
                  <span>
                    <a href="#" className="link">
                      {" "}
                      //Needs review TODO Resend
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-7 p-0 m-0 container-mini container-mini-right">
            <img src="auth.svg" className="img-fluid img" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Verify from "./Verify";
import { useNavigate } from "react-router-dom";
function Register() {
  const [ID, setID] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [isLIU, setLIU] = useState("");
  const navigate = useNavigate();
  const onOptionChangeLIU = (e) => {
    setLIU(e.target.value);
  };
  const [data, setData] = [ID, pass, isLIU];

  const PassLen = pass.toString().split("").length;
  const IDlen = ID.toString().split("").length;
  function navigateVer() {
    if (
      IDlen > 7 &&
      IDlen < 9 &&
      pass === cpass &&
      PassLen > 7 &&
      isLIU != ""
    ) {
      //👇️ navigate to /verify

      navigate("/verify");
    }
  }
  return (
    <div className="auth-pages d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5 p-0 container-mini container-mini-left">
            <div className="card cards">
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
                <h1 className="title">REGISTER</h1>
                <div className="container ">
                  <div className="row inputs input-verify">
                    <div className="col-12 d-flex justify-content-center ">
                      <input
                        type="number"
                        onChange={(e) => setID(e.target.value)}
                        className="form-control text"
                        id="inputID"
                        placeholder="ID"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <input
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        className="form-control text"
                        id="password"
                        placeholder="PASSWORD"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <input
                        type="password"
                        onChange={(e) => setCpass(e.target.value)}
                        className="form-control text"
                        id="passwordCon"
                        placeholder="CONFIRM PASSWORD"
                      />
                    </div>
                    <div className="col-10 d-flex justify-content-between mt-5 emails">
                      <label className="email">EMAIL:</label>
                      <div>
                        <input
                          type="radio"
                          id="liu"
                          name="isLIU"
                          value="1"
                          onChange={onOptionChangeLIU}
                        />
                        <label for="liu">LIU</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="biu"
                          name="isLIU"
                          value="0"
                          onChange={onOptionChangeLIU}
                        />
                        <label for="biu">BIU</label>
                      </div>
                    </div>
                    <div className="submit d-flex justify-content-center">
                      <svg
                        onClick={() => {
                          navigateVer();
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
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
                            <feFlood
                              flood-color="#143d6d"
                              flood-opacity="0.502"
                            />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_13"
                          data-name="Group 13"
                          transform="translate(-112 -521)"
                        >
                          <g
                            transform="matrix(1, 0, 0, 1, 112, 521)"
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
                            id="CREATE_ACCOUNT"
                            data-name="CREATE ACCOUNT"
                            transform="translate(137 563)"
                            fill="#ffb019"
                            font-size="20"
                            font-family="SegoeUI-Bold, Segoe UI"
                            font-weight="700"
                            letter-spacing="-0.007em"
                          >
                            <tspan x="0" y="0">
                              CREATE ACCOUNT
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </div>

                    <p className="d-flex justify-content-start mt-2">
                      Already have an account? &nbsp;
                      <span>
                        <Link to="/login" className="link">
                          Login
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
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
}

export default Register;

import React from "react";
import Rating from "react-rating";

const Trip = () => {
  return (
    <>
      <div className="container ride p-2">
        <div className="row">
          <div className="col-2 col-lg-1 d-md-flex align-items-center">
            <img src="profile.jpg" alt="" className="profile-pic" />
          </div>
          <div className="col-6 pe-0 ps-3">
            <div className="row d-md-flex align-items-center">
              <div className="col-12 col-lg-6">
                <h3 className="name">lorem ipsum</h3>
                <Rating
                  initialRating={4}
                  readonly
                  emptySymbol={<img src="empty-wheel.svg" className="icon" />}
                  fullSymbol={<img src="full-wheel.svg" className="icon" />}
                  //fractions={2}
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="place">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.4"
                    height="14.462"
                    viewBox="0 0 11.4 14.462"
                    className="me-1"
                  >
                    <g id="location" transform="translate(-0.039 -0.039)">
                      <path
                        id="Path_88"
                        d="M.739,6.184A5.243,5.243,0,0,1,5.756.739a5.251,5.251,0,0,1,4.983,5.482v.062a8.391,8.391,0,0,1-2.265,5.191,13.473,13.473,0,0,1-2.339,2.1.568.568,0,0,1-.793,0,13.451,13.451,0,0,1-3.29-3.366A7.406,7.406,0,0,1,.739,6.2Z"
                        fill="none"
                        stroke="#ffb019"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                        fillRule="evenodd"
                      />
                      <circle
                        id="Ellipse_16"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        transform="translate(4.239 4.627)"
                        fill="none"
                        stroke="#ffb019"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </g>
                  </svg>
                  <span className="details">Going to Beirut campus</span>
                </div>
                <div className="date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    className="me-1"
                  >
                    <path
                      id="date_1_"
                      d="M3.211.26a.591.591,0,0,0-.584.6V1.45H.857a.591.591,0,0,0-.593.593V12.667a.591.591,0,0,0,.593.593H12.67a.591.591,0,0,0,.593-.593V2.043a.591.591,0,0,0-.593-.593H10.9V.862a.591.591,0,0,0-1.183,0V1.45H7.355V.862a.591.591,0,0,0-1.183,0V1.45H3.809V.862a.591.591,0,0,0-.6-.6ZM1.445,2.632H2.628v.593a.591.591,0,1,0,1.181,0V2.632H6.172v.593a.591.591,0,0,0,1.183,0V2.632H9.718v.593a.591.591,0,0,0,1.183,0V2.632h1.181V4.993H1.445Zm0,3.542H12.082v5.906H1.445ZM5.583,7.354a.59.59,0,1,0,.591.59A.591.591,0,0,0,5.583,7.354Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,7.946,7.354Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,10.309,7.354ZM3.22,9.716a.59.59,0,1,0,.591.59A.591.591,0,0,0,3.22,9.716Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,5.583,9.716Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,7.946,9.716Z"
                      transform="translate(-0.264 -0.26)"
                      fill="#ffb019"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="details">Monday 28 Jan 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-5 d-flex align-items-center justify-content-center p-0">
            <div className="row">
              <div className="col-12 col-lg-4 mb-2 mb-lg-0 p-lg-1">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="41"
                    viewBox="0 0 115 41"
                  >
                    <g id="Group_185" transform="translate(-452 -330)">
                      <rect
                        id="Rectangle_5"
                        width="115"
                        height="41"
                        rx="7"
                        transform="translate(452 330)"
                        fill="#143d6d"
                      />
                      <text
                        id="LOCATION"
                        transform="translate(482 357)"
                        fill="#fff"
                        fontSize="16"
                        fontFamily="SegoeUI-Semibold, Segoe UI"
                        fontWeight="600"
                        letterSpacing="-0.007em"
                      >
                        <tspan x="0" y="0">
                          LOCATION
                        </tspan>
                      </text>
                      <g id="location-2" transform="translate(463 342.001)">
                        <path
                          id="Path_88"
                          d="M.739,8.278C.751,4.1,3.671.725,7.261.739s6.49,3.413,6.478,7.59v.086A11.994,11.994,0,0,1,10.795,15.6a17.949,17.949,0,0,1-3.04,2.913.706.706,0,0,1-1.031,0,18.136,18.136,0,0,1-4.277-4.66A10.711,10.711,0,0,1,.739,8.3Z"
                          transform="translate(-0.739 -0.739)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_89"
                          d="M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                          transform="translate(4 4.832)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="col-12 col-lg-4 mt-2 mt-lg-0 p-lg-1">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="41"
                    viewBox="0 0 115 41"
                  >
                    <g id="Group_51" transform="translate(-427 -330)">
                      <g id="Component_1_54" transform="translate(427 330)">
                        <rect
                          id="Rectangle_5"
                          data-name="Rectangle 5"
                          width="115"
                          height="41"
                          rx="7"
                          fill="#39c639"
                        />
                        <text
                          id="ACCEPT"
                          transform="translate(38 27)"
                          fill="#fff"
                          fontSize="16"
                          fontFamily="SegoeUI-Semibold, Segoe UI"
                          fontWeight="600"
                          letterSpacing="-0.007em"
                        >
                          <tspan x="0" y="0">
                            ACCEPT
                          </tspan>
                        </text>
                      </g>
                      <g id="Group_50" transform="translate(440 341.5)">
                        <g id="accept-2" data-name="accept">
                          <path
                            id="Path_69"
                            d="M11.005,20.07a9,9,0,1,1,6.367-2.632,8.98,8.98,0,0,1-6.367,2.632Zm0-16.56a7.562,7.562,0,1,0,5.348,2.215A7.514,7.514,0,0,0,11.005,3.51Zm5.858,13.418h0Z"
                            transform="translate(-2.006 -2.07)"
                            fill="#fff"
                            stroke="#fff"
                            strokeWidth="0.7"
                          />
                          <path
                            id="Path_70"
                            d="M11.152,17.573a.589.589,0,0,1-.458-.236L7.947,13.918a.95.95,0,0,1,0-1.139.562.562,0,0,1,.916,0l2.289,2.849,4.233-5.268a.562.562,0,0,1,.916,0,.95.95,0,0,1,0,1.139L11.61,17.337A.589.589,0,0,1,11.152,17.573Z"
                            transform="translate(-3.123 -4.729)"
                            fill="#fff"
                            stroke="#fff"
                            strokeWidth="0.7"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="col-12 col-lg-4 mt-2 mt-lg-0 p-lg-1">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="115"
                    height="41"
                    viewBox="0 0 115 41"
                  >
                    <g id="Group_181" transform="translate(-428 -330)">
                      <rect
                        id="Rectangle_5"
                        width="115"
                        height="41"
                        rx="7"
                        transform="translate(428 330)"
                        fill="#df2020"
                      />
                      <text
                        id="DECLINE"
                        transform="translate(465 357)"
                        fill="#fff"
                        fontSize="16"
                        fontFamily="SegoeUI-Semibold, Segoe UI"
                        fontWeight="600"
                        letterSpacing="-0.007em"
                      >
                        <tspan x="0" y="0">
                          DECLINE
                        </tspan>
                      </text>
                      <g id="Group_53" transform="translate(440 341)">
                        <line
                          id="Line_14"
                          x1="0.628"
                          y2="8.585"
                          transform="translate(11.518 5.5) rotate(40)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_15"
                          x2="0.628"
                          y2="8.585"
                          transform="translate(6 5.904) rotate(-40)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="2"
                        />
                        <path
                          id="Path_69"
                          d="M11.005,20.07a9,9,0,1,1,6.367-2.632,8.98,8.98,0,0,1-6.367,2.632Zm0-16.56a7.562,7.562,0,1,0,5.348,2.215A7.514,7.514,0,0,0,11.005,3.51Zm5.858,13.418h0Z"
                          transform="translate(-2.005 -2.07)"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth="0.7"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trip;

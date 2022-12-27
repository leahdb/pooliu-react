import React from "react";
import Rating from "react-rating";

const Ride = () => {
  return (
    <>
      <div className="container ride p-2">
        <div className="row">
          <div className="col-2 col-lg-1 d-md-flex align-items-center">
            <img src="profile.jpg" alt="" className="profile-pic" />
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h3 className="name">lorem ipsum</h3>
                <Rating
                  emptySymbol={<img src="empty-wheel.svg" className="icon"/>}
                  fullSymbol={<img src="full-wheel.svg" className="icon" />}
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="place">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.4"
                    height="14.462"
                    viewBox="0 0 11.4 14.462"
                  >
                    <g id="location" transform="translate(-0.039 -0.039)">
                      <path
                        id="Path_88"
                        data-name="Path 88"
                        d="M.739,6.184A5.243,5.243,0,0,1,5.756.739a5.251,5.251,0,0,1,4.983,5.482v.062a8.391,8.391,0,0,1-2.265,5.191,13.473,13.473,0,0,1-2.339,2.1.568.568,0,0,1-.793,0,13.451,13.451,0,0,1-3.29-3.366A7.406,7.406,0,0,1,.739,6.2Z"
                        fill="none"
                        stroke="#ffb019"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.4"
                        fill-rule="evenodd"
                      />
                      <circle
                        id="Ellipse_16"
                        data-name="Ellipse 16"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        transform="translate(4.239 4.627)"
                        fill="none"
                        stroke="#ffb019"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.4"
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
                  >
                    <path
                      id="date_1_"
                      data-name="date (1)"
                      d="M3.211.26a.591.591,0,0,0-.584.6V1.45H.857a.591.591,0,0,0-.593.593V12.667a.591.591,0,0,0,.593.593H12.67a.591.591,0,0,0,.593-.593V2.043a.591.591,0,0,0-.593-.593H10.9V.862a.591.591,0,0,0-1.183,0V1.45H7.355V.862a.591.591,0,0,0-1.183,0V1.45H3.809V.862a.591.591,0,0,0-.6-.6ZM1.445,2.632H2.628v.593a.591.591,0,1,0,1.181,0V2.632H6.172v.593a.591.591,0,0,0,1.183,0V2.632H9.718v.593a.591.591,0,0,0,1.183,0V2.632h1.181V4.993H1.445Zm0,3.542H12.082v5.906H1.445ZM5.583,7.354a.59.59,0,1,0,.591.59A.591.591,0,0,0,5.583,7.354Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,7.946,7.354Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,10.309,7.354ZM3.22,9.716a.59.59,0,1,0,.591.59A.591.591,0,0,0,3.22,9.716Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,5.583,9.716Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,7.946,9.716Z"
                      transform="translate(-0.264 -0.26)"
                      fill="#ffb019"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span className="details">Monday 28 Jan 2023</span>
                </div>
                <div className="time">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.3"
                    height="13.3"
                    viewBox="0 0 13.3 13.3"
                  >
                    <path
                      id="time"
                      d="M8.638,15a6.5,6.5,0,1,1,6.5-6.5A6.507,6.507,0,0,1,8.638,15Zm0-11.96A5.46,5.46,0,1,0,14.1,8.5,5.466,5.466,0,0,0,8.638,3.04ZM8.6,8.978H5.258a.52.52,0,0,1,0-1.04H8.076V4.08a.52.52,0,1,1,1.04,0V8.458A.52.52,0,0,1,8.6,8.978Z"
                      transform="translate(-1.988 -1.85)"
                      fill="#ffb019"
                      stroke="#ffb019"
                      stroke-width="0.3"
                    />
                  </svg>
                  <span className="details">Arrive before 9:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 col-lg-5 d-flex align-items-center justify-content-end p-0">
            <div className="row">
              <div className="col-12 col-lg-5 me-lg-2 ms-5 ms-lg-0 mb-2 mb-lg-0">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="41"
                    viewBox="0 0 96 26"
                  >
                    <g
                      id="Group_151"
                      data-name="Group 151"
                      transform="translate(-428 -330)"
                    >
                      <rect
                        id="Rectangle_5"
                        data-name="Rectangle 5"
                        width="96"
                        height="26"
                        rx="5"
                        transform="translate(428 330)"
                        fill="#143d6d"
                      />
                      <text
                        id="VIEW_ROAD"
                        data-name="VIEW ROAD"
                        transform="translate(458 347)"
                        fill="#fff"
                        font-size="10"
                        font-family="SegoeUI-Semibold, Segoe UI"
                        font-weight="600"
                        letter-spacing="-0.007em"
                      >
                        <tspan x="0" y="0">
                          VIEW ROAD
                        </tspan>
                      </text>
                      <g id="destination" transform="translate(439.98 336.001)">
                        <path
                          id="Path_87"
                          data-name="Path 87"
                          d="M20.933,33.035H14.081a.293.293,0,0,1,0-.586h6.851a1.319,1.319,0,0,0,0-2.638H11.895a1.905,1.905,0,0,1,0-3.811H21.37a.293.293,0,0,1,0,.586H11.895a1.319,1.319,0,0,0,0,2.638h9.038a1.905,1.905,0,0,1,0,3.811Z"
                          transform="translate(-9.554 -20.794)"
                          fill="#fff"
                          stroke="#fff"
                          stroke-width="1"
                        />
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M8,46.1l.619-2.052L8,42l3.811,2.052Z"
                          transform="translate(-8 -32.104)"
                          fill="#ffb019"
                          stroke="#ffb019"
                          stroke-width="1"
                        />
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M44.052,8A2.052,2.052,0,0,0,42,10.026a3.568,3.568,0,0,0,2.052,2.958A3.568,3.568,0,0,0,46.1,10.026,2.052,2.052,0,0,0,44.052,8Zm0,2.9a.862.862,0,1,1,.879-.862A.879.879,0,0,1,44.052,10.9Z"
                          transform="translate(-32.244 -8)"
                          fill="#df2020"
                          stroke="#df2020"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="col-12 col-lg-5 me-lg-4 ms-5 ms-lg-0 mt-2 mt-lg-0">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="41"
                    viewBox="0 0 96 26"
                  >
                    <g
                      id="Group_51"
                      data-name="Group 51"
                      transform="translate(-428.918 -330)"
                    >
                      <rect
                        id="Rectangle_5"
                        data-name="Rectangle 5"
                        width="96"
                        height="26"
                        rx="5"
                        transform="translate(428.918 330)"
                        fill="#df2020"
                      />
                      <text
                        id="REMOVE_REQUEST"
                        data-name="REMOVE REQUEST"
                        transform="translate(434.918 347.001)"
                        fill="#fff"
                        font-size="10"
                        font-family="SegoeUI-Semibold, Segoe UI"
                        font-weight="600"
                        letter-spacing="-0.007em"
                      >
                        <tspan x="0" y="0">
                          REMOVE REQUEST
                        </tspan>
                      </text>
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

export default Ride;
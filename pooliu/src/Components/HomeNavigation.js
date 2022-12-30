import React from "react";
import {Link} from "react-router-dom";
 
const HomeNavigation = () => {
  return (
    <nav className="home-nav navbar p-0">
      <div className="container nav-container">
        <div className="test row d-flex justify-content-lg-between">
          <div className="col-12 col-lg-6">
            <Link to={`pickride`} className="navbar-brand">
              <img src="logo.svg" alt="logo" className="logo" />
            </Link>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <Link to={`login`} className="pe-lg-3">
                  <svg
                    id="Component_1_2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="55"
                    viewBox="0 0 120 55"
                  >
                    <rect
                      id="Rectangle_5"
                      width="120"
                      height="55"
                      rx="7"
                      fill="#103158"
                    />
                    <text
                      id="Login"
                      transform="translate(42 35)"
                      fill="#ffb019"
                      fontSize="22"
                      fontFamily="SegoeUI-Bold, Segoe UI"
                      fontWeight="700"
                      letterSpacing="-0.007em"
                    >
                      <tspan x="0" y="0">
                        Login
                      </tspan>
                    </text>
                    <g id="Homepage" transform="translate(14 19)">
                      <g id="D-Landing-Page" transform="translate(0 0)">
                        <g id="Header-2">
                          <g id="button_login">
                            <g id="Group-16">
                              <path
                                id="s"
                                d="M15.811,19.025a3.841,3.841,0,0,0,3.649-4.006V7.006A3.841,3.841,0,0,0,15.811,3H12.618a.481.481,0,0,0-.456.5v1a.481.481,0,0,0,.456.5h3.193a1.921,1.921,0,0,1,1.824,2v8.013a1.921,1.921,0,0,1-1.824,2H12.618a.481.481,0,0,0-.456.5v1a.481.481,0,0,0,.456.5ZM7,18.208l6.248-6.844a.537.537,0,0,0,0-.709L7,3.81a.431.431,0,0,0-.646,0l-.745.818a.53.53,0,0,0,.008.714l4.3,4.582H.456a.481.481,0,0,0-.456.5V11.6a.481.481,0,0,0,.456.5H9.912l-4.3,4.578a.538.538,0,0,0-.008.714l.745.818A.428.428,0,0,0,7,18.208Z"
                                transform="translate(0 -3)"
                                fill="#ffb019"
                                stroke="#ffb019"
                                stroke-width="0.7"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-lg-center justify-content-center">
                <Link to={`register`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="55"
                    viewBox="0 0 120 55"
                  >
                    <g
                      id="Group_5"
                      transform="translate(-1121 -20)"
                    >
                      <rect
                        id="Rectangle_4"
                        width="120"
                        height="55"
                        rx="7"
                        transform="translate(1121 20)"
                        fill="#ffb019"
                      />
                      <text
                        id="Sign_up"
                        transform="translate(1153 54.96)"
                        fill="#103158"
                        fontSize="22"
                        fontFamily="SegoeUI-Bold, Segoe UI"
                        fontWeight="700"
                        letterSpacing="-0.01em"
                      >
                        <tspan x="0" y="0">
                          Sign up
                        </tspan>
                      </text>
                      <g id="Homepage" transform="translate(1130 37)">
                        <g id="D-Landing-Page">
                          <g id="Header-2">
                            <g id="button_signup">
                              <g id="Group-17">
                                <path
                                  id="u"
                                  d="M8.5,11.388a5.406,5.406,0,0,0,5.464-5.344A5.406,5.406,0,0,0,8.5.7,5.406,5.406,0,0,0,3.036,6.044,5.406,5.406,0,0,0,8.5,11.388Zm0-1.781A3.609,3.609,0,0,1,4.857,6.044a3.644,3.644,0,0,1,7.286,0A3.609,3.609,0,0,1,8.5,9.606ZM15.179,19.7A1.8,1.8,0,0,0,17,17.919v-.95a5.046,5.046,0,0,0-5.1-4.988c-1.089,0-1.613.594-3.4.594s-2.307-.594-3.4-.594A5.046,5.046,0,0,0,0,16.969v.95A1.8,1.8,0,0,0,1.821,19.7Zm0-1.781H1.821v-.95A3.249,3.249,0,0,1,5.1,13.763a15.155,15.155,0,0,0,3.4.594,15.009,15.009,0,0,0,3.4-.594,3.249,3.249,0,0,1,3.279,3.206Z"
                                  transform="translate(0 -0.7)"
                                  fill="#103158"
                                  stroke="#103158"
                                  stroke-width="0.7"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavigation;

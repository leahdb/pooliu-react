import React from "react";
import {Link} from "react-router-dom";
 
const HomeNavigation = () => {
  return (
    <nav className="navbar p-0">
      <div className="container">
        <Link to='/pickride' className="navbar-brand">
          <img src="logo.svg" alt="logo" />
        </Link>
        <div className="d-flex">
          <Link to='/login' className="pe-3">
            <svg
              id="Component_1_1"
              data-name="Component 1 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="94"
              height="50"
              viewBox="0 0 94 50"
            >
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="94"
                height="50"
                rx="7"
                fill="#103158"
              />
              <text
                id="Login"
                transform="translate(32 31)"
                fill="#ffb019"
                font-size="20"
                font-family="SegoeUI-Bold, Segoe UI"
                font-weight="700"
                letter-spacing="-0.007em"
              >
                <tspan x="0" y="0">
                  Login
                </tspan>
              </text>
              <g id="Homepage" transform="translate(9 20)">
                <g id="D-Landing-Page" transform="translate(1 -2)">
                  <g id="Header-2" transform="translate(0 0)">
                    <g id="button_login">
                      <g id="Group-16">
                        <path
                          id="s"
                          d="M13.813,17A3.356,3.356,0,0,0,17,13.5v-7A3.356,3.356,0,0,0,13.813,3H11.023a.421.421,0,0,0-.4.438v.875a.421.421,0,0,0,.4.438h2.789A1.678,1.678,0,0,1,15.406,6.5v7a1.678,1.678,0,0,1-1.594,1.75H11.023a.421.421,0,0,0-.4.438v.875a.421.421,0,0,0,.4.438Zm-7.7-.715,5.459-5.979a.469.469,0,0,0,0-.62L6.113,3.707a.377.377,0,0,0-.564,0L4.9,4.426a.463.463,0,0,0,.007.623l3.755,4H.4A.421.421,0,0,0,0,9.49V10.51a.421.421,0,0,0,.4.438H8.659l-3.755,4a.47.47,0,0,0-.007.623l.651.715A.374.374,0,0,0,6.113,16.285Z"
                          transform="translate(0 -3)"
                          fill="#ffb019"
                          stroke="#ffb019"
                          stroke-width="0.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <Link to='/nav'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="50"
              viewBox="0 0 110 50"
            >
              <g
                id="Group_3"
                data-name="Group 3"
                transform="translate(-1121 -20)"
              >
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="110"
                  height="50"
                  rx="7"
                  transform="translate(1121 20)"
                  fill="#ffb019"
                />
                <text
                  id="Sign_up"
                  data-name="Sign up"
                  transform="translate(1150 51)"
                  fill="#103158"
                  font-size="20"
                  font-family="SegoeUI-Bold, Segoe UI"
                  font-weight="700"
                  letter-spacing="-0.007em"
                >
                  <tspan x="0" y="0">
                    Sign up
                  </tspan>
                </text>
                <g id="Homepage" transform="translate(1130 36)">
                  <g id="D-Landing-Page">
                    <g id="Header-2" transform="translate(0 0)">
                      <g id="button_signup" transform="translate(0 0)">
                        <g id="Group-17" transform="translate(0 0)">
                          <path
                            id="u"
                            d="M7,9.7A4.5,4.5,0,1,0,2.5,5.2,4.5,4.5,0,0,0,7,9.7ZM7,8.2a3,3,0,1,1,3-3A3,3,0,0,1,7,8.2Zm5.5,8.5A1.5,1.5,0,0,0,14,15.2v-.8a4.2,4.2,0,0,0-4.2-4.2c-.9,0-1.328.5-2.8.5s-1.9-.5-2.8-.5A4.2,4.2,0,0,0,0,14.4v.8a1.5,1.5,0,0,0,1.5,1.5Zm0-1.5H1.5v-.8a2.7,2.7,0,0,1,2.7-2.7,12.235,12.235,0,0,0,2.8.5,12.117,12.117,0,0,0,2.8-.5,2.7,2.7,0,0,1,2.7,2.7Z"
                            transform="translate(0 -0.7)"
                            fill="#103158"
                            stroke="#103158"
                            stroke-width="0.5"
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
    </nav>
  );
};

export default HomeNavigation;

import React from "react";
import Navigation from "../Components/Navigation";
import Driver from "../Components/Driver";
import Footer from "../Components/Footer";
import Calendar from "../Components/Calendar";
import { Link } from "react-router-dom";

const PickRide = () => {
  return (
    <>
      <Navigation />
      <div className="pickride-page">
        <h1 className="my-5">PICK RIDE</h1>
        <div className="container my-5 main-container">
          <div className="row inputs mt-5">
            <div className="col-9 col-lg-5 p-lg-4 py-4 px-3">
              <button
                type="button"
                className="btn btn-outline-primary form-btn"
                data-bs-toggle="modal"
                data-bs-target="#map-modal"
              >
                SELECT LOCATION
              </button>
            </div>
            <div className="arrow-container col-3 col-lg-2 d-flex justify-content-center p-lg-4 py-4 px-3 m-lg-0">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.05"
                  height="34.858"
                  viewBox="0 0 42.05 34.858"
                  className="arrow"
                >
                  <path
                    id="arrow_1_"
                    data-name="arrow (1)"
                    d="M1,14.894H38.05M24.156,1,38.05,14.894,24.156,28.787"
                    transform="translate(1.5 2.536)"
                    fill="none"
                    stroke="#ffb019"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="col-9 col-lg-5 p-lg-4 py-4 px-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1" defaultValue>
                  BEIRUT CAMPUS
                </option>
                <option value="2">BEKAA CAMPUS</option>
                <option value="3">HALBA CAMPUS</option>
                <option value="4">MOUNT LEBANON CAMPUS</option>
                <option value="5">NABATIEH CAMPUS</option>
                <option value="6">RAYAK CAMPUS</option>
                <option value="7">SAIDA CAMPUS</option>
                <option value="8">TRIPOLI CAMPUS</option>
                <option value="9">TYRE CAMPUS</option>
              </select>
            </div>
            <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
              <button
                type="button"
                className="btn btn-outline-primary form-btn"
                data-bs-toggle="modal"
                data-bs-target="#calendar-modal"
              >
                SELECT DATE AND TIME
              </button>
            </div>
            <div className="pick-container col-12 col-lg-6 d-flex justify-content-center p-lg-0 p-5">
              <button className="pick">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="64"
                  viewBox="0 0 138 64"
                >
                  <defs>
                    <filter
                      id="Rectangle_11"
                      x="0"
                      y="0"
                      width="138"
                      height="64"
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
                    id="Group_17"
                    data-name="Group 17"
                    transform="translate(-1026 -569)"
                  >
                    <g
                      transform="matrix(1, 0, 0, 1, 1026, 569)"
                      filter="url(#Rectangle_11)"
                    >
                      <rect
                        id="Rectangle_11-2"
                        data-name="Rectangle 11"
                        width="120"
                        height="46"
                        rx="8"
                        transform="translate(10 7)"
                        fill="#143d6d"
                      />
                    </g>
                    <text
                      id="PICK"
                      transform="translate(1076 606)"
                      fill="#ffb019"
                      fontSize="18"
                      fontFamily="SegoeUI-Bold, Segoe UI"
                      fontWeight="700"
                    >
                      <tspan x="0" y="0">
                        PICK
                      </tspan>
                    </text>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-column-reverse flex-lg-row m-0">
          <div className="col-lg-5 col-12 px-2 ps-lg-4 d-flex justify-content-center justify-content-lg-start">
            <div className="card">
              <div className="card-body pb-0 ps-0">
                <div className="container">
                  <div className="mb-4 d-flex justify-content-between">
                    <span className="count">9 available drivers</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="28.998"
                      viewBox="0 0 31 28.998"
                    >
                      <path
                        id="filter"
                        d="M2,7h.142A3.981,3.981,0,0,0,9.858,7H30a1,1,0,0,0,0-2H9.858A3.981,3.981,0,0,0,2.142,5H2A1,1,0,0,0,2,7ZM6,4A2,2,0,1,1,4,6,2,2,0,0,1,6,4ZM30,15h-.142a3.981,3.981,0,0,0-7.716,0H2a1,1,0,0,0,0,2H22.142a3.981,3.981,0,0,0,7.716,0H30a1,1,0,0,0,0-2Zm-4,3a2,2,0,1,1,2-2A2,2,0,0,1,26,18Zm4,7H19.858a3.981,3.981,0,0,0-7.716,0H2a1,1,0,0,0,0,2H12.142a3.981,3.981,0,0,0,7.716,0H30a1,1,0,0,0,0-2ZM16,28a2,2,0,1,1,2-2A2,2,0,0,1,16,28Z"
                        transform="translate(-0.5 -1.501)"
                        fill="#143d6d"
                        stroke="#143d6d"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>

                <Driver></Driver>
                <Driver></Driver>
                <Driver></Driver>
                <Driver></Driver>
                <nav
                  aria-label="driver pages"
                  className="pagination d-flex justify-content-center pt-2"
                >
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.015"
                          height="16.516"
                          viewBox="0 0 9.015 16.516"
                        >
                          <g
                            id="Group_58"
                            data-name="Group 58"
                            transform="translate(-262.492 -734.492)"
                          >
                            <line
                              id="Line_14"
                              data-name="Line 14"
                              x1="0.628"
                              y2="8.585"
                              transform="translate(269.518 736) rotate(40)"
                              fill="none"
                              stroke="#e2e2e2"
                              strokeLinecap="round"
                              strokeWidth="2"
                            />
                            <line
                              id="Line_15"
                              data-name="Line 15"
                              x2="0.628"
                              y2="8.585"
                              transform="translate(264 742.924) rotate(-40)"
                              fill="none"
                              stroke="#e2e2e2"
                              strokeLinecap="round"
                              strokeWidth="2"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active-page" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.015"
                          height="16.516"
                          viewBox="0 0 9.015 16.516"
                        >
                          <g
                            id="Group_59"
                            data-name="Group 59"
                            transform="translate(1.508 1.508)"
                          >
                            <line
                              id="Line_14"
                              data-name="Line 14"
                              x1="0.628"
                              y1="8.585"
                              transform="translate(6 6.576) rotate(140)"
                              fill="none"
                              stroke="#143d6d"
                              strokeLinecap="round"
                              strokeWidth="2"
                            />
                            <line
                              id="Line_15"
                              data-name="Line 15"
                              y1="8.585"
                              x2="0.628"
                              transform="translate(0.481 13.5) rotate(-140)"
                              fill="none"
                              stroke="#143d6d"
                              strokeLinecap="round"
                              strokeWidth="2"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 p-0 d-flex justify-content-center justify-content-lg-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.036277206962!2d35.4990196537077!3d33.88193514693669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1721587e1d6d%3A0xaa7f5769dc576d98!2sLebanese%20International%20University!5e0!3m2!1sen!2slb!4v1672151492684!5m2!1sen!2slb"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Calendar />
      <Footer />
    </>
  );
};

export default PickRide;

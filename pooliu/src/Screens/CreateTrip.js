import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Calendar from "../Components/Calendar";

const CreateTrip = () => {
  return (
    <>
      <Navigation />
      <div className="create-trip">
        <main>
          <h1 className="title mt-5">CREATE TRIP</h1>
          <div className="container mt-5 main-container">
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
              <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
                <button
                  type="button"
                  className="btn btn-outline-primary form-btn"
                >
                  SELECT RIDE TYPE
                </button>
              </div>
              <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
                <div className="input-group">
                  <span className="input-group-text seat-label px-xxl-5">
                    SEATS AVAILABLE
                  </span>
                  <button
                    className="btn btn-outline-secondary add p-0"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="4.5"
                      viewBox="0 0 22 4.5"
                    >
                      <line
                        id="minus"
                        x2="22"
                        transform="translate(0 2.25)"
                        fill="none"
                        stroke="#ffb019"
                        strokeWidth="4.5"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="form-control number"
                    value="0"
                  />
                  <button
                    className="btn btn-outline-secondary add p-0"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <g
                        id="Group_226"
                        data-name="Group 226"
                        transform="translate(-500 -645)"
                      >
                        <line
                          id="minus"
                          x2="22"
                          transform="translate(500 656)"
                          fill="none"
                          stroke="#ffb019"
                          strokeWidth="4.5"
                        />
                        <line
                          id="minus-2"
                          data-name="minus"
                          x2="22"
                          transform="translate(511 645) rotate(90)"
                          fill="none"
                          stroke="#ffb019"
                          strokeWidth="4.5"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-end">
            <button className="create">
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
                    id="CREATE"
                    transform="translate(1064 606)"
                    fill="#ffb019"
                    fontSize="18"
                    fontFamily="SegoeUI-Bold, Segoe UI"
                    fontWeight="700"
                  >
                    <tspan x="0" y="0">
                      CREATE
                    </tspan>
                  </text>
                </g>
              </svg>
            </button>
          </div>
        </main>
      </div>
      <Calendar />
      <Footer />
    </>
  );
};

export default CreateTrip;
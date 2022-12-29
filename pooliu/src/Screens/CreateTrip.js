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
              <div className="col-5 p-4">
                <button
                  type="button"
                  className="btn btn-outline-primary form-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#map-modal"
                >
                  SELECT LOCATION
                </button>
              </div>
              <div className="col-2 d-flex justify-content-center p-4">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42.05"
                    height="34.858"
                    viewBox="0 0 42.05 34.858"
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
              <div className="col-5 p-4">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>CAMPUS SITE</option>
                  <option value="1">BEIRUT</option>
                  <option value="2">BEKAA</option>
                  <option value="3">HALBA</option>
                  <option value="4">MOUNT LEBANON</option>
                  <option value="5">NABATIEH</option>
                  <option value="6">RAYAK</option>
                  <option value="7">SAIDA</option>
                  <option value="8">TRIPOLI</option>
                  <option value="9">TYRE</option>
                </select>
              </div>
              <div className="col-6 p-4">
                <button
                  type="button"
                  className="btn btn-outline-primary form-btn"
                >
                  SELECT DATE AND TIME
                </button>
              </div>
              <div className="col-6 p-4">
                <button
                  type="button"
                  className="btn btn-outline-primary form-btn"
                >
                  SELECT RIDE TYPE
                </button>
              </div>
              <div className="col-6 p-4">
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
          <div
            className="modal fade"
            id="map-modal"
            tabIndex="-1"
            aria-labelledby="map-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="address-label">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <a className="skiplink" href="#map">
                    Go to map
                  </a>
                  <div id="map" className="map" tabIndex="0"></div>
                  <button id="zoom-out">Zoom out</button>
                  <button id="zoom-in">Zoom in</button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Calendar />
      <Footer />
    </>
  );
};

export default CreateTrip;
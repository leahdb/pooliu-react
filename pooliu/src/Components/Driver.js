import React from "react";
import Rating from "react-rating";

const Driver = () => {
  return (
    <>
      <div className="container driver p-2">
        <div className="row d-flex align-items-center">
          <div className="col-2">
            <img src="profile.jpg" alt="" className="profile-pic" />
          </div>
          <div className="col-5">
            <h3 className="name mb-1">lorem ipsum</h3>
            <Rating
              initialRating={4}
              readonly
              emptySymbol={<img src="empty-wheel.svg" className="icon" />}
              fullSymbol={<img src="full-wheel.svg" className="icon" />}
              //fractions={2}
            />
            <h6 className="mt-1">Arrive before 9:30</h6>
          </div>
          <div className="col-5 d-flex justify-content-center">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="153"
                height="41"
                viewBox="0 0 153 41"
                className="send-request"
              >
                <g
                  id="Group_51"
                  data-name="Group 51"
                  transform="translate(-428 -330)"
                >
                  <g
                    id="Component_1_43"
                    data-name="Component 1 – 43"
                    transform="translate(428 330)"
                  >
                    <rect
                      id="Rectangle_5"
                      data-name="Rectangle 5"
                      width="153"
                      height="41"
                      rx="7"
                      fill="#ffb019"
                    />
                    <text
                      id="SEND_REQUEST"
                      data-name="SEND REQUEST"
                      transform="translate(32 27)"
                      fill="#fff"
                      font-size="16"
                      font-family="SegoeUI-Semibold, Segoe UI"
                      font-weight="600"
                      letter-spacing="-0.007em"
                    >
                      <tspan x="0" y="0">
                        SEND REQUEST
                      </tspan>
                    </text>
                  </g>
                  <path
                    id="send"
                    d="M8.633,12.033l19.333,7.825a.46.46,0,0,1-.049.87l-5.863,1.629-3.741,6a.461.461,0,0,1-.842-.156L16.653,24l-5.432,1.954a.464.464,0,0,1-.383-.033.459.459,0,0,1-.225-.311L8.01,12.55a.46.46,0,0,1,.624-.516Zm9.518,14.841,2.957-4.74-7.457-4.017,3.72,4.992,0,0a.487.487,0,0,1,.021.044.46.46,0,0,1,.056.13s0,.006,0,.009ZM11.412,24.9l4.849-1.743L11.672,17a.46.46,0,0,1,.587-.68l9.555,5.145L26.366,20.2l-17.287-7,2.333,11.7Z"
                    transform="translate(426.999 331.715)"
                    fill="#fff"
                    stroke="#fff"
                    stroke-width="0.7"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Driver;

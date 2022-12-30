import React from "react";
import Navigation from "../Components/Navigation";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";

const AllRides = () => {
  return (
    <>
      <Navigation />
      <div className="all-rides">
        <div className="container">
          <h1 className="my-5">MY RIDES</h1>
          <div className="d-flex justify-content-end m-3">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41.099"
                height="38.423"
                viewBox="0 0 41.099 38.423"
              >
                <path
                  id="filter"
                  d="M2.337,8.683h.19a5.321,5.321,0,0,0,10.314,0H39.763a1.337,1.337,0,1,0,0-2.673H12.84a5.321,5.321,0,0,0-10.314,0h-.19a1.337,1.337,0,1,0,0,2.673Zm5.347-4.01A2.673,2.673,0,1,1,5.01,7.346,2.673,2.673,0,0,1,7.683,4.673Zm32.079,14.7h-.19a5.321,5.321,0,0,0-10.314,0H2.337a1.337,1.337,0,1,0,0,2.673H29.259a5.321,5.321,0,0,0,10.314,0h.19a1.337,1.337,0,1,0,0-2.673Zm-5.347,4.01a2.673,2.673,0,1,1,2.673-2.673A2.673,2.673,0,0,1,34.416,23.386Zm5.347,9.356H26.206a5.321,5.321,0,0,0-10.314,0H2.337a1.337,1.337,0,1,0,0,2.673H15.893a5.321,5.321,0,0,0,10.314,0H39.763a1.337,1.337,0,0,0,0-2.673ZM21.05,36.752a2.673,2.673,0,1,1,2.673-2.673A2.673,2.673,0,0,1,21.05,36.752Z"
                  transform="translate(-0.5 -1.501)"
                  fill="#143d6d"
                  stroke="#143d6d"
                  strokeWidth="1"
                />
              </svg>
            </a>
          </div>

          <Accordion />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllRides;

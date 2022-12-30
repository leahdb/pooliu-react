import React from "react";
import HomeNavigation from "../Components/HomeNavigation";
import Footer from "../Components/Footer"
import "animate.css";

const Home = () => {
  return (
    <>
      <HomeNavigation></HomeNavigation>
      <div className="home-page">
        <div className="background p-0 m-0">
          <div className="row header-row d-flex flex-column-reverse flex-lg-row m-0 p-0">
            <div className="yellow-img col-lg-6 col-12 m-0 p-0">
              <div className="header container">
                <h1 className="first animate__animated animate__fadeInLeft animate__fast">
                  Let's share
                </h1>
                <h1 className="second animate__animated animate__fadeInLeft animate__delay-1s animate__fast">
                  &nbsp; &nbsp; &nbsp; the Ride.
                </h1>
                <p className="header-text mt-5 animate__animated animate__fadeIn animate__delay-1s animate__fast">
                  Due to the high prices in gas, and due to transferring
                  education from online to on campus. We as students will help
                  each other to reach out for our college to reach out for a
                  better future.
                </p>
              </div>
            </div>
            <div className="header-img col-lg-6 col-12 m-0 p-0"></div>
          </div>
        </div>
        <div className="container">
          <div className="row pros">
            <div className="col-lg-4 col-12 pb-5">
              <div className="d-flex justify-content-center">
                <img src="car.svg" alt="" />
              </div>
              <h3>Get a ride</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, cupiditate.
              </p>
            </div>
            <div className="col-lg-4 col-12 pb-5">
              <div className="d-flex justify-content-center">
                <img src="shield.svg" alt="" />
              </div>
              <h3>Safe and convenient</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                ipsum?
              </p>
            </div>
            <div className="col-lg-4 col-12 pb-5">
              <div className="d-flex justify-content-center">
                <img src="tap.svg" alt="" />
              </div>
              <h3>Easy to use</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                neque.
              </p>
            </div>
          </div>
        </div>
        <div className="phone1">
          <img
            src="light-yellow.svg"
            className="light-yellow-img p-0"
            alt="..."
          />
          <div className="container">
            <div className="row">
              <div className="col-7 text">
                <h2>Request a ride...</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisic elit. Ullam
                  natus quae voluptas tempore sed, odio dorem vitae quam
                  placeat vel, itaque ea impedit voluptate sequi repellendus
                  earum dolore delectus nostru{" "}
                </p>
              </div>
              <div className="col-5 image d-flex justify-content-end">
                <img src="phone1.svg" alt="" className="phone1-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="phone2">
          <div className="container">
            <div className="row">
              <div className="col-6 image">
                
              </div>
              <div className="col-6 text">
                <h2>...or offer one!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  natus quae voluptas tempore sed, odio dolorem vitae quam
                  placeat vel, itaque ea impedit voluptate sequi repellendus
                  earum dolore delectus nostrumficdi{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;

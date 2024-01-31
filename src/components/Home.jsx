import React from "react";
import Navbar from "./Navbar";
import leftMain from '../image/left home.png';
import rightMain from '../image/right.png'
import "./css/Home.css";
import Bestfor from "./Bestfor";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-container">
          <div className="left-home">
            <div className="left-home-container">
                <div className="left-main">
                  <img src={leftMain} alt="the left main" />
                </div>
            </div>
          </div>
          <div className="home-main">
            <div className="home-main-container">
              <div className="home-first">Pacific quotes For You</div>
              <div className="home-second">
                Get <span className="second-home">quotes first</span>
              </div>
              <div className="third-home">
              Unlock inspiration at Pacific Quotes. Dive into a collection  of profound quotes and discover wisdom from diverse authors.Elevate your day with powerful words. <br/>Explore, share, and be inspired every day. Enjoy!
              </div>

              <div className="forth-home">
                <div className="fourth-first">Do want to get some awesome quotes</div>
                <Link to ="/quotes" className="fourth-second">Click Here</Link>
              </div>

              <div className="fifth-home">
                <div className="fift-item"> <i className="fa-solid fa-check"></i> Free quotes</div>
                <div className="fifth-item"><i className="fa-solid fa-check"></i> Twitter support</div>
                <div className="fifth-item"><i className="fa-solid fa-check"></i> Author mentioned</div>
              </div>
            </div>
          </div>

          <div className="right-home">
            <div className="right-home-container">
              <div className="right-main">
                <img src={rightMain} alt="right main" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Bestfor/>
      <Footer/>
    </>
  );
};

export default Home;

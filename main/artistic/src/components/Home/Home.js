import React, { Component } from "react";
import Nav2 from "../Navbar/Nav2";

import img1 from "../../assets/images/Logo.png";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav2 />
        <div className="container">
          <div className="row home-first-section">
            <div className="col-xs-6 col-md-6">
              {" "}
              <img src={img1} alt="img" className="image-home" />
            </div>
            <div className="col-xs-6 col-md-6">
              <div className="first-fold-right-section">
                <h4 className="text">
                  “Design is coming to grips with one's real lifestyle, one's
                  real place in the world. Rooms should not be put together for
                  show but to nourish one's well being.”
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

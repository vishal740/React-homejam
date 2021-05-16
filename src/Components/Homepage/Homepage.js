import "./Homepage.css";
import React from "react";
import Navbrand from "./navbrand.png";
import BGImage from "./Rectangle.png";
import Overlay from "./Overlay.png";

function Homepage() {
  return (
    <div className="customNavbar">
      <img className="bgimage" src={BGImage} />
      <img className="bgimage" src={Overlay} />

      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img src={Navbrand} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Search
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Help
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Account
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="Homepage_content">
        <h1 class="heading">
          <b>Cari Cari</b>
        </h1>
        <p class="para">
          Live from their sofa to yours. Get closer to your favorite
        </p>
        <p class="para1">artists, and never miss out.</p>
      </div>
    </div>
  );
}

export default Homepage;

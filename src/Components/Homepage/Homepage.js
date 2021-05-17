import "./Homepage.css";
import React from "react";
import Navbrand from "./images/navbrand.png";
import BGImage from "./images/Rectangle.png";
import Overlay from "./images/Overlay.png";
import SearchIcon from "@material-ui/icons/Search";
import Circle from "./Circle/Circle.js";
import Heart from "./images/Vector.svg";
import Calender from "./images/Calendar.svg";
import Cart from "./images/Cart.svg";

function Homepage() {
  const circle_details = [
    {
      icon: Heart,
      count: 0,
      label: "label",
      colorClass: true,
    },
    {
      icon: Calender,
      count: 0,
      label: "label",
      colorClass: false,
    },
    {
      icon: Calender,
      count: 0,
      label: "label",
      colorClass: false,
    },
    {
      icon: Calender,
      count: 0,
      label: "label",
      colorClass: false,
    },
  ];

  return (
    <div className="customNavbar">
      <img className="bgimage" src={BGImage} />
      <img className="bgimage" src={Overlay} />

      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img src={Navbrand} />
        </a>
        <div className="navbar__reponsive__button">
          <SearchIcon className="navbar__search" />
          <img src={Cart} />
        </div>

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
              <a class="nav-link navbar__search" href="#">
                <SearchIcon />
              </a>
            </li>
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
            <li class="nav-item active navbar__cart">
              <img src={Cart} />
            </li>
          </ul>
        </div>
      </nav>
      <div className="Homepage_content">
        <h1 class="heading">
          <b>Cari Cari</b>
        </h1>
        <p class="para">
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>
      </div>

        <div className="homepage__circle__maindiv">
          {circle_details.map((e) => {
            return (
              <Circle
                icon={e.icon}
                count={e.count}
                label={e.label}
                colorClass={e.colorClass}
              />
            );
          })}
        </div>
      </div>
  );
}

export default Homepage;

import "./Reviews.css";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Card__img2 from "./images/img2.png";
import Card__img3 from "./images/img3.png";
import Card__img1 from "./images/img1.png";
import Flag1 from "./images/🇺🇸.svg";
import Flag2 from "./images/🇮🇹.svg";
import Card from "./Card/Card.js";

function Reviews() {
  const card_details = [
    {
      image: Card__img1,
      flag: Flag1,
      name: "Hellen Jummy",
      address: "Palo Alto, CA",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque laoreet adipiscing.",
    },
    {
      image: Card__img2,
      flag: Flag2,
      name: "Isaac Oluwatemilorun",
      address: "Palo Alto, CA",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque laoreet adipiscing.",
    },
    {
      image: Card__img3,
      flag: Flag1,
      name: "Hellen Jummy",
      address: "Palo Alto, CA",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque laoreet adipiscing.",
    },
  ];

  return (
    <div className="reviews__div">
      <div className="reviews__header">
        <h2 className="reviews__heading">Reviews</h2>
        <p className="reviews__viewall">1/12</p>
        <div>
          <ArrowBackIcon />
        </div>
        <div>
          <ArrowForwardIcon />
        </div>
      </div>
      <hr />
      <div className="reviews__card">
        {card_details.map((e) => {
          return (
            <Card
              image={e.image}
              flag={e.flag}
              name={e.name}
              address={e.address}
              content={e.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;

import "./Card.css";
import React from "react";

function Card({ image, flag, name, address, content }) {
  return (
    <div className="reviews__cardshow">
      <div className="reviews__cardshow__header">
        <div className="reviews__cardshow__image">
          <img src={image} alt="image" />
        </div>
        <div className="reviews__cardshow__heading">
          <div className="reviews__cardshow__name">{name}</div>
          <div className="reviews__cardshow__address">
            <img src={flag} alt="flag" />
            <p>{address}</p>
          </div>
        </div>
      </div>
      <p className="reviews__cardshow__text">{content}</p>
    </div>
  );
}

export default Card;

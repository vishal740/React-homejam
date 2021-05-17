import "./Card.css";
import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Ticket from "../images/Ticket.png";

function Card({ image, field, name }) {
  return (
    <div className="upcoming__cardshow">
      <img className="upcoming__cardshow__image" variant="top" src={image} />
      <div className="upcoming__cardshow__body">
        <h3 className="upcoming__cardshow__title">{field}</h3>
        <p className="upcoming__cardshow__name">{name}</p>
      </div>
      <div className="upcoming__card__footer">
        <small className="text-muted">More Info</small> 
        <div>
          <ArrowRightAltIcon />
        </div>

        <div className="upcoming__card__ticket">
          <img src={Ticket} />
        </div>
      </div>
    </div>
  );
}

export default Card;

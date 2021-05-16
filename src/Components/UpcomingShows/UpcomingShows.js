import "./UpcomingShows.css";
import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Card__img1 from "./images/Img 1.png";
import Card__img2 from "./images/Img 2.png";
import Card__img3 from "./images/Img 3.png";
import Card__img4 from "./images/Img 4.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Ticket from "./images/Ticket.png";

function UpcomingShows() {
  const card_details = [
    {
      image: Card__img1,
      field: "Folk",
      name: "Benny Dayal",
    },
    {
      image: Card__img2,
      field: "Bollywood",
      name: "Vijay Yesudas",
    },
    {
      image: Card__img3,
      field: "Folk",
      name: "Andrea Jeremiah",
    },
    {
      image: Card__img4,
      field: "Folk",
      name: "Shilpa Rao",
    },
  ];

  return (
    <div className="upcoming__div">
      <div className="upcoming__header">
        <h2 className="upcoming__heading">Upcoming Shows</h2>
        <p className="upcoming__viewall">View All</p>
      </div>
      <hr />
      <div className="upcoming__card">
        <CardDeck>
          {card_details.map((e) => {
            console.log(e);
            return (
              <Card className="upcoming__cardshow">
                <Card.Img
                  className="upcoming__cardshow__image"
                  variant="top"
                  src={e.image}
                />
                <Card.Body className="upcoming__cardshow__body">
                  <Card.Title className="upcoming__cardshow__title">
                    {e.field}
                  </Card.Title>
                  <Card.Text className="upcoming__cardshow__name">
                    {e.name}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="upcoming__card__footer">
                  <small className="text-muted">More Info</small>

                  <div>
                    <ArrowRightAltIcon />
                  </div>

                  <div className="upcoming__card__ticket">
                    <img src={Ticket} />
                  </div>
                </Card.Footer>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    </div>
  );
}

export default UpcomingShows;

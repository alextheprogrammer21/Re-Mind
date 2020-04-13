import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Promo.css";
const classNames = require("classnames");

export default function Promo(props) {
  const cardClasses = classNames({
    "text-right": props.side === "right",
    "text-left": props.side === "left",
    "text-white": props.light,
  });

  return (
    <>
      <Card className={cardClasses}>
        <Card.Img src={props.img} className={Promo} />
        <Card.ImgOverlay>
          <Card.Title>{props.header || "Placeholder"}</Card.Title>
          <Card.Text>{props.content || "Card Body"}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

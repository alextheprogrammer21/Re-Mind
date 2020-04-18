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
          <Card.Title>
            <mark className={props.light ? "light-mark" : "dark-mark"}>
              {props.header || "Placeholder"}
            </mark>
          </Card.Title>
          <Card.Text>
            <mark className={props.light ? "light-mark" : "dark-mark"}>
              {props.content || "Card Body"}
            </mark>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

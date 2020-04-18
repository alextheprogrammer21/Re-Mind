import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyButton(props) {
  return (
    <>
      <Button variant={props.type}>{props.text}</Button>{" "}
    </>
  );
}

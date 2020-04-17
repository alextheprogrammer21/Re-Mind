import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";

export default function Edit(props) {
  const data = props.data;
  return (
    <Card>
      <Card.Body>
        <span class="icon">{data.icon}</span>
        <span class="name">
          {data.name} ({data.frequency} times a week)
        </span>
        <span></span>
        <Button variant="outline-warning" className="markLengthened" onClick={props.onClick}> 
          Confirm
        </Button>
        <Button variant="outline-warning" className="markLengthened" onClick={() => {console.log("TRANSITION BACK")}}> 
          Back
        </Button>
      </Card.Body>
    </Card>
  );
}
import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Habit.css";
import Button from "react-bootstrap/Button";

export default function Habit(props) {
  return (
    <Card>
      <Card.Body>
        <span class="icon">{props.icon}</span>
        <span class="name">
          {props.name} ({props.freq} times a week)
        </span>
        <span></span>
        <Button variant="outline-primary">Mark Completed</Button>
      </Card.Body>
    </Card>
  );
}

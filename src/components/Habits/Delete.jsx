import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";

export default function Habit(props) {
  const data = props.data;
  return (
    <Card>
      <Card.Body>
        <span class="icon">{data.icon}</span>
        <span class="name">
          {data.name} ({data.frequency} times a week)
        </span>
        <span></span>
        <Button variant="outline-danger" className="markLengthened" onClick={props.onClick}>
          Delete
        </Button>
        <Button variant="outline-danger" className="markLengthened" onClick={props.onCancel}>
          Cancel
        </Button>
      </Card.Body>
    </Card>
  );
}
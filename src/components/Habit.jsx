import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Habit.css";
import Button from "react-bootstrap/Button";

export default function Habit(props) {
  const data = props.data;
  return (
    <Card>
      <Card.Body>
        <span class="icon">{data.image}</span>
        <span class="name">
          {data.name} ({data.frequency} times a week)
        </span>
        <span></span>
        <Button variant="outline-primary" className="mark">
          Mark Completed
        </Button>
      </Card.Body>
    </Card>
  );
}

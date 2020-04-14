import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Spinner from 'react-bootstrap/Spinner'

export default function Loading(props) {  

  return (
    <Card>
      <Card.Body>
      <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
<p1> Loading... </p1>
</Card.Body>
    </Card>
  )};
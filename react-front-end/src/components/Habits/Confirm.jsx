import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/Button";

export default function Confirm(props) {
  return (
    <Card>
      <Card.Body>
      <Alert variant="danger">
  <Alert.Heading>Confirm</Alert.Heading>
  <p>Are you sure you would like to proceed?</p>
  <Button variant="outline-danger">
          Yes
        </Button>
        <p1> </p1> 
        <Button variant="outline-danger">
          No
        </Button>
</Alert>      
</Card.Body>
    </Card>
  );
}
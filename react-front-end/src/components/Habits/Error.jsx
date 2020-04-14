import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/Button";

export default function Error(props) {
  return (
    <Card>
      <Card.Body>
      <Alert variant="danger">
  <Alert.Heading>Error</Alert.Heading>
  <p>Something went wrong. Please try again.</p>
  <Button variant="outline-danger">
          Close
        </Button>
</Alert>      
</Card.Body>
    </Card>
  );
}
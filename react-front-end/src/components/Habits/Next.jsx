import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Next(props) {

  return (
    <Card>
      <Card.Body>
      <ListGroup id='listGroup'> 
  <ListGroup.Item action href="#link1">Monday</ListGroup.Item>
  <ListGroup.Item action href="#link1">Tuesday</ListGroup.Item>
  <ListGroup.Item action href="#link1">Wednesday</ListGroup.Item>
  <ListGroup.Item action href="#link1">Thursday</ListGroup.Item>
  <ListGroup.Item action href="#link1">Friday</ListGroup.Item>
  <ListGroup.Item action href="#link1">Saturday</ListGroup.Item>
  <ListGroup.Item action href="#link1">Sunday</ListGroup.Item>
  </ListGroup>

  <ListGroup id='listGroupFormatted'> 
  <ListGroup.Item action href="#link1">Morning</ListGroup.Item>
  <ListGroup.Item action href="#link1">Afternoon</ListGroup.Item>
  <ListGroup.Item action href="#link1">Evening</ListGroup.Item>
  </ListGroup>
  <Button variant="outline-dark" className="backButton">
          Back
        </Button>
        <Button variant="outline-dark" className="createButton">
          Create
        </Button>
      </Card.Body>
    </Card>
  );
 }
import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'

export default function New(props) {
  const data = props.data;

  const dropdownItems = props.activities.map(activity => {
    return <Dropdown.Item href="#/action-1">{activity.icon} {activity.name}</Dropdown.Item>
  });
    return (
      <Card>
        <Card.Body>
          <Dropdown>
          <span class="icon"> 🎯 </span>
  
    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
      {dropdownItems}
    </Dropdown.Menu>
    
    <Button variant="outline-primary" className="markLengthened">
            Next
          </Button>
  </Dropdown>
        </Card.Body>
      </Card>
    );
 }
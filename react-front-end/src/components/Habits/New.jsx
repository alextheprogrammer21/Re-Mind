import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'

export default function New(props) {
  const data = props.data;

  const dropdownItems = props.activities.map(activity => {
    return <Dropdown.Item href="#/action-1">{activity}</Dropdown.Item>
  });
    return (
      <Card>
        <Card.Body>
          <Dropdown>
          <span class="icon">{data.icon} </span>
  
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
      {dropdownItems}
    </Dropdown.Menu>
    <Button variant="warning" className="markLengthened">
            Edit
          </Button>
  </Dropdown>
     
  
        </Card.Body>
      </Card>
    );
 

  return dropdownItems;
}
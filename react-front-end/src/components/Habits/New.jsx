import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
export default function New(props) {

  const dropdownItems = props.activities.map(activity => {
    return <option>{activity.icon} {activity.name}</option>
  });
    return (
      <Card>
        <Card.Body>
          <span class="icon">🎯</span>
  
          <Form className='activityForm'>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label></Form.Label>
    <Form.Control as="select" custom>
    {dropdownItems}
    </Form.Control>
  </Form.Group>
</Form>

    <Button variant="outline-primary" className="markLengthened" onClick={props.onClick}>
            Next
          </Button>

  <Form className='frequencyForm'>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label></Form.Label>
    <Form.Control as="select" custom>
      <option>1x/week</option>
      <option>2x/week</option>
      <option>3x/week</option>
      <option>4x/week</option>
      <option>5x/week</option>
      <option>6x/week</option>
      <option>7x/week</option>
    </Form.Control>
  </Form.Group>
</Form>

        </Card.Body>
      </Card>
    );
 }
import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
export default function New(props) {

  let [activity, setActivity] = React.useState('Yoga')
  let [frequency, setFrequency] = React.useState('1')
  
  function handleActivityChange(e) {
    setActivity(e.target.value)
  }
  function handleFrequencyChange(e) {
    setFrequency(e.target.value)
  }

  const dropdownItems = props.activities.map(activity => {
    return <option>{activity.name}</option>
  });
    return (
      <Card>
        <Card.Body>
          <span class="icon">🎯</span>
  
          <Form className='activityForm'>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label></Form.Label>
    <Form.Control as="select" custom value={activity.name} onChange={handleActivityChange}>
    {dropdownItems}
    </Form.Control>
  </Form.Group>
</Form>

    <Button variant="outline-primary" className="markLengthened" onClick={() => props.onClick(activity,frequency, props.id)}>
            Add
          </Button>

          <Button variant="outline-primary" className="markLengthened" onClick={props.onCancel}>
            Cancel
          </Button>
  <Form className='frequencyForm'>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label></Form.Label>
    <Form.Control as="select" custom value={frequency} onChange={handleFrequencyChange}>
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
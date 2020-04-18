import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";

export default function Edit(props) {

  let [editId, setEditId] = React.useState(null)
  const data = props.data;
  return (
   
    <Card>
      <Card.Body>

      {editId 
    ? <p>Test</p>
    : <div></div>
    }
        <span class="icon">{data.icon}</span>
        <span class="name">
          {data.name} ({data.frequency} times a week)
        </span>

<Button variant="outline-warning" className="mark" onClick={() => {setEditId(data.id)}}>
Edit
</Button>
        
      </Card.Body>
    </Card>
  );
}
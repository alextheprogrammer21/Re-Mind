import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import New from './New'

const activities = [{name: 'Running', icon: '🏃🏼‍♂️'}, {name: 'Yoga', icon: '🧘'}, {name: 'Reading', icon: '📖'}]

export default function Edit(props) {
console.log("props", props)
  let [editId, setEditId] = React.useState(null)
  const data = props.data;
  return (
   
    <Card>
      <Card.Body>

      {editId 
    ? <New activities={activities} id={data.id} onClick={props.onClick} />
    : <div><span class="icon">{data.icon}</span>
    <span class="name">
      {data.name} ({data.frequency} times a week)
    </span></div>
    }
        

        {editId 
    ? <div></div>
    : <div><Button variant="outline-warning" className="mark" onClick={() => {setEditId(data.id)}}>Edit</Button>
    <Button variant="outline-warning" className="mark" onClick={props.onCancel}>Cancel</Button>
    </div>
    }

        
      </Card.Body>
    </Card>
  );
}
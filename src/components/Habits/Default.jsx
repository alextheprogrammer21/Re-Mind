import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";



export default function Habit(props) {

  let [isComplete, setIsComplete] = React.useState(false);

function markComplete(e) {
  e.preventDefault();
  setIsComplete(true); 

  let now = new Date();
  let timeUntil12 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 59) - now;

  setInterval(() => {
    setIsComplete(false)
  }, timeUntil12);
}

  const data = props.data;
  return (
    <Card>
      <Card.Body>
        <span class="icon">{data.icon}</span>
        <span class="name">
          {data.name} ({data.frequency} times a week)
        </span>
{isComplete 
? <Button variant="primary" className="mark">
Done For The Day
</Button>
: <Button variant="outline-primary" className="mark" onClick={markComplete}>
Mark Completed
</Button>
}        
        
      </Card.Body>
    </Card>
  );
}
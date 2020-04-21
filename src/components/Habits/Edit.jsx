import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Habit.css";
import Button from "react-bootstrap/Button";
import New from "./New";

const activities = [
  { name: "Yoga", image: "	🧘‍♂️" },
  { name: "Running", image: "🏃🏼‍♂️" },
  { name: "Praying", image: "🙏" },
  { name: "Drinking Water", image: "🚰" },
  { name: "Reading", image: "📚" },
  { name: "Meditation", image: "🧘‍♂️" },
  { name: "Walking", image: "🚶‍♂️" },
  { name: "Cycling", image: "🚲" },
  { name: "Working Out", image: "💪" },
  { name: "Crossword", image: "🖊" },
  { name: "Sudoku", image: "🧩" },
  { name: "Connect with friends", image: "🤩" },
  { name: "Check in with family", image: "👨‍👩‍👦" },
];

export default function Edit(props) {
  let [editId, setEditId] = React.useState(null);
  const data = props.data;
  return editId ? (
    <New
      activities={activities}
      id={data.id}
      onClick={props.onClick}
      edit={"true"}
      name={data.name}
    />
  ) : (
    <Card className="hab">
      <Card.Body className="hab-inside">
        <span class="icon">{data.image}</span>
        <span class="name">
          {data.name} ({data.frequency} times a week)
        </span>
        <span>
          <Button
            variant="outline-warning"
            className="mark"
            onClick={() => {
              setEditId(data.id);
            }}
          >
            Edit
          </Button>
          <Button
            variant="outline-warning"
            className="mark"
            onClick={props.onCancel}
          >
            Cancel
          </Button>
        </span>
      </Card.Body>
    </Card>
  );
}

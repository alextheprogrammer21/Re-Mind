import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "./Calendar.css";
import axios from "axios";
import Container from "react-bootstrap/Container";

export default function Calendar(props) {
  let [calendarData, setCalendarData] = React.useState([
    { plan: ["m"] },
    { plan: ["t"] },
    { plan: ["w"] },
    { plan: ["t"] },
    { plan: ["f"] },
    { plan: ["s"] },
    { plan: ["s"] },
  ]);
  axios.get("/api/user/1/calendar").then((data) => {
    setCalendarData(data.data);
  });

  let mondayIcons = calendarData[0].plan.map((monday) => {
    return monday;
  });
  let tuesdayIcons = calendarData[1].plan.map((tuesday) => {
    return tuesday;
  });
  let wednesdayIcons = calendarData[2].plan.map((wednesday) => {
    return wednesday;
  });
  let thursdayIcons = calendarData[3].plan.map((thursday) => {
    return thursday;
  });
  let fridayIcons = calendarData[4].plan.map((friday) => {
    return friday;
  });
  let saturdayIcons = calendarData[5].plan.map((saturday) => {
    return saturday;
  });
  let sundayIcons = calendarData[6].plan.map((sunday) => {
    return sunday;
  });
  return (
    <Container>
      <Table bordered>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="cal-icon">{mondayIcons}</span>
            </td>
            <td>
              <span className="cal-icon">{tuesdayIcons}</span>
            </td>
            <td>
              <span className="cal-icon">{wednesdayIcons}</span>
            </td>
            <td>
              <span className="cal-icon">{thursdayIcons}</span>
            </td>
            <td>
              <span className="cal-icon">{fridayIcons}</span>
            </td>
            <td>
              <span className="cal-icon">{saturdayIcons}</span>
            </td>
            <td>
              <span className="cal-icon">{sundayIcons}</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

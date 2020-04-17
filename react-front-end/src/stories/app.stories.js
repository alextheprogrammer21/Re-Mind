import React from "react";
import { storiesOf } from "@storybook/react";
import MyButton from "../components/Button";
import Navigation from "../components/Navigation";
import Promo from "../components/Promo";
import yoga from "../img/yoga.jpg";
import SectionTitle from "../components/SectionTitle";
import Habit from "../components/Habit";
import Dashboard from "../components/Dashboard";
import Default from "../components/Habits/Default";
import Delete from "../components/Habits/Delete";
import Edit from "../components/Habits/Edit";
import New from "../components/Habits/New";
import Next from "../components/Habits/Next";
import Error from "../components/Habits/Error";
import Confirm from "../components/Habits/Confirm";
import Loading from "../components/Habits/Loading";
import ReactDOM from 'react-dom';

//--------------Data Declarations----------------------//

const habitSelected = 0;

const chartData = [
  {
    name: "Running",
    max: 100,
    current: 75,
  },
  {
    name: "Running",
    max: 100,
    current: 10,
  },
  {
    name: "Running",
    max: 100,
    current: 46,
  },
  {
    name: "Yoga",
    max: 100,
    current: 88,
  },
  {
    name: "Overall",
    max: 100,
    current: 76,
  },
];

let habits = [
  { id: 1, name: "Running", frequency: "3", icon: "🏃🏼‍♂️" },
  { id: 2, name: "Yoga", frequency: "4", icon: "🧘‍" },
  { id: 3, name: "Reading", frequency: "2", icon: "‍📖" }
];

const activities = [{name: 'Running', icon: '🏃🏼‍♂️'}, {name: 'Yoga', icon: '🧘'}, {name: 'Reading', icon: '📖'}]

function deleteHabit(e) { //After doing axios requests, add state to this so it re-renders with the new data
  e.preventDefault();
  habits = habits.slice(0, habitSelected).concat(habits.slice(habitSelected + 1, habits.length))
  console.log("Habit deleted. Here are the remaining habits", habits)
}

function editHabit(e) { //After doing axios requests, add state to this so it re-renders with the new data
  e.preventDefault();
  habits[habitSelected].name = "Programming"
  habits[habitSelected].frequency = "7"
  habits[habitSelected].icon = "👨‍💻"
  console.log("Habit edited to programming", habits[habitSelected])
}

function createHabit(activity, frequency) { //After doing axios requests, add state to this so it re-renders with the new data
 habits.push(
   {id: 4, name: activity, frequency: frequency, icon: '🏃🏼‍♂️'}
 )

 console.log("does it work", habits)
}

//---------------------_Stories-----------------------//

storiesOf("MyButton", module)
  .add("Primary", () => <MyButton type="primary" text="Click me!"></MyButton>)
  .add("Secondary", () => (
    <MyButton type="secondary" text="Click me!"></MyButton>
  ));

storiesOf("Navbar", module).add("Navbar", () => <Navigation></Navigation>);
storiesOf("Promo Banner", module)
  .add("Empty Promo", () => <Promo></Promo>)
  .add("Left Light Banner", () => (
    <Promo
      side="left"
      img={yoga}
      light
      header="Build Healthy Habits Fast!"
      content="Our app was designed to enable you to quickly build healthy habits"
    ></Promo>
  ))
  .add("Right Dark Banner", () => (
    <Promo
      side="right"
      img={yoga}
      header="Build Healthy Habits Fast!"
      content="Our app was designed to enable you to quickly build healthy habits"
    ></Promo>
  ));

storiesOf("Section Title", module)
  .add("Empty", () => <SectionTitle></SectionTitle>)
  .add("Your Weekly Summary", () => (
    <SectionTitle name="Your Weekly Summary"></SectionTitle>
  ))
  .add("Your Weekly Summary", () => (
    <SectionTitle name="Your Habits"></SectionTitle>
  ))
  .add("Your Weekly Summary", () => (
    <SectionTitle name="Calendar"></SectionTitle>
  ));

storiesOf("Single Habit", module)
  .add("Tracking Running", () => <Habit Show data={habits[0]}></Habit>)
  .add("Tracking Yoga", () => <Habit Show data={habits[1]}></Habit>);

storiesOf("Dashboard Chart", module)
  .add("Chart With Data", () => <Dashboard data={chartData}></Dashboard>)
  .add("Chart With No Data", () => <Dashboard></Dashboard>);

  storiesOf("Habits", module)
  .add("Current Habit", () => <Default Show data={habits[habitSelected]}  > </Default>)
  .add("Delete Habit", () => <Delete Show data={habits[habitSelected]} onClick={() => {console.log("Transition to confirm")}}> </Delete>)
  .add("Edit Habit", () => <Edit Show data={habits[habitSelected]} onClick={editHabit}> </Edit>)
  .add("New Habit", () => <New Show activities={activities} onClick={createHabit}> </New>)
  // .add("Create Habit", () => <Next></Next>)
  .add("Loading", () => <Loading></Loading>)
  .add("Error", () => <Error></Error>)
  .add("Confirm", () => <Confirm onClickConfirm={deleteHabit} onClickBack={() => console.log("TRANSITION BACK")}></Confirm>);





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
import Loading from "../components/Habits/Loading";

//--------------Data Declarations----------------------//

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

const habits = [
  { id: 1, name: "Running", frequency: "3", icon: "🏃🏼‍♂️" },
  { id: 2, name: "Yoga", frequency: "4", icon: "🧘‍" },
];

const activities = [{name: 'Running', icon: '🏃🏼‍♂️'}, {name: 'Yoga', icon: '🧘'}, {name: 'Reading', icon: '📖'}]

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
  .add("Current Habit", () => <Default Show data={habits[0]}> </Default>)
  .add("Delete Habit", () => <Delete Show data={habits[0]}> </Delete>)
  .add("Edit Habit", () => <Edit Show data={habits[0]}> </Edit>)
  .add("New Habit", () => <New Show data={habits[0]} activities={activities}> </New>)
  .add("Create Habit", () => <Next></Next>)
  .add("Loading", () => <Loading></Loading>)
  .add("Error", () => <Error></Error>);




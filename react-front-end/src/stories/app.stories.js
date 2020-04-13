import React from "react";
import { storiesOf } from "@storybook/react";
import MyButton from "../components/Button";
import Navigation from "../components/Navigation";
import Promo from "../components/Promo";
import yoga from "../img/yoga.jpg";
import SectionTitle from "../components/SectionTitle";
import Habit from "../components/Habit";
import Dashboard from "../components/Dashboard";

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

const habits = [
  { id: 1, name: "Running", frequency: "3", icon: "🏃🏼‍♂️" },
  { id: 2, name: "Yoga", frequency: "4", icon: "🧘‍" },
];
storiesOf("Single Habit", module)
  .add("Tracking Running", () => <Habit Show data={habits[0]}></Habit>)
  .add("Tracking Yoga", () => <Habit Show data={habits[1]}></Habit>);

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
storiesOf("Dashboard Chart", module)
  .add("Chart With Data", () => <Dashboard data={chartData}></Dashboard>)
  .add("Chart With No Data", () => <Dashboard></Dashboard>);

import React from "react";
import { storiesOf } from "@storybook/react";
import MyButton from "../components/Button";
import Navigation from "../components/Navigation";
import Promo from "../components/Promo";
import yoga from "../img/yoga.jpg";
import SectionTitle from "../components/SectionTitle";

storiesOf("MyButton", module)
  .add("Primary", () => <MyButton type="primary" text="Click me!"></MyButton>)
  .add("Secondary", () => (
    <MyButton type="secondary" text="Click me!"></MyButton>
  ));
storiesOf("Navbar", module).add("Navbar", () => <Navigation></Navigation>);
storiesOf("Promo", module)
  .add("Empty Promo", () => <Promo></Promo>)
  .add("Left Light Text", () => (
    <Promo
      side="left"
      img={yoga}
      light
      header="Build Healthy Habits Fast!"
      content="Our app was designed to enable you to quickly build healthy habits"
    ></Promo>
  ))
  .add("Right Dark Text", () => (
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
  ));

import React from "react";
import { storiesOf } from "@storybook/react";
import MyButton from "../components/Button";
import Navigation from "../components/Navigation";
import Promo from "../components/Promo";

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
      light
      header="Build Healthy Habits Fast!"
      content="Our app was designed to enable you to quickly build healthy habits"
    ></Promo>
  ))
  .add("Right Dark Text", () => (
    <Promo
      side="right"
      header="Build Healthy Habits Fast!"
      content="Our app was designed to enable you to quickly build healthy habits"
    ></Promo>
  ));
import React from "react";
import { storiesOf } from "@storybook/react";
import MyButton from "../components/Button";

storiesOf("MyButton", module)
  .add("Primary", () => <MyButton type="primary" text="Click me!"></MyButton>)
  .add("Secondary", () => (
    <MyButton type="secondary" text="Click me!"></MyButton>
  ));

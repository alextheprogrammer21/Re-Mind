import React from "react";
import "./SectionTitle.css";

export default function SectionTitle(props) {
  return (
    <>
      <h5>{props.name || "Separator"}</h5>
      <hr />
    </>
  );
}

import React from "react";
import "./SectionTitle.css";

export default function SectionTitle(props) {
  return (
    <>
      <p className="text-center">
        <h5>{props.name || "Separator"}</h5>
      </p>
      <hr />
    </>
  );
}

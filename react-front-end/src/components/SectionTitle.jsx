import React from "react";
import "./SectionTitle.css";

export default function SectionTitle(props) {
  return (
    <p className="text-center">
      {props.name || "Separator"}
      <hr />
    </p>
  );
}

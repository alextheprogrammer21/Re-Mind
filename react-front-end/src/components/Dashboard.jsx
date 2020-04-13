import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Dashboard(props) {
  return !props.data ? (
    <div width={730} height={250}>
      "You are currently not tracking any activities! Add one to start building
      your habit today!"
    </div>
  ) : (
    <BarChart width={730} height={250} data={props.data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" /> <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="current" fill="#03d1fd" barSize={25} />
    </BarChart>
  );
}

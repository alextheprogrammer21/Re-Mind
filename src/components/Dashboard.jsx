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
    <div className="alert alert-primary">
      You are currently not tracking any activities! Add one to start building
      your habit today!
    </div>
  ) : (
    <BarChart width={750} height={250} data={props.data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} />{" "}
      <YAxis dataKey="name" type="category" width={100} />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="current"
        name="Current Progress"
        fill="#03d1fd"
        barSize={25}
      />
    </BarChart>
  );
}

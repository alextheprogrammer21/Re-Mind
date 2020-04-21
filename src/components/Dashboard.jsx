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
  const width = window.innerWidth > 750 ? 750 : window.innerWidth * 0.5;

  return !props.data ? (
    <div className="alert alert-primary">
      You are currently not tracking any activities! Add one to start building
      your habit today!
    </div>
  ) : (
    <BarChart width={width} height={250} data={props.data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} unit="%" />{" "}
      <YAxis dataKey="name" type="category" width={100} />
      <Tooltip
        formatter={(value) =>
          new Intl.NumberFormat("en", { style: "percent" }).format(value / 100)
        }
      />
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

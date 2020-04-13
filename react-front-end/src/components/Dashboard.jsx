import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Running",
    max: 100,
    current: 75,
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

export default function Dashboard() {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="current" fill="#82ca9d" />
    </BarChart>
  );
}

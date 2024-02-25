import React from "react";
import CatProfile from "../components/CatProfile";
import List from "../components/List";

export default function Dashboard() {
  return (
    <div>
      <h1>Dancing Cat Dashboard</h1>
      <List className="unvaccinated"/>
    </div>
  );
}

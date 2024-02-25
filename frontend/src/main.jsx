import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import CatProfile from "./components/CatProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatProfile/>
  </React.StrictMode>
);

import React from "react";
import "./HomeView.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function HomeView() {
  return (
    <div className="welcome-view">
      <div className="text">
        <p>Welcome, Office fan! </p>
        <br />
        <br />
        <p>
          The series is over, but the memories live on! Test your skills and see
          if you can guess which characters stated these quotes!
        </p>
        <br />
        <br />
        <Link to="/quotes" className="link-style">
          <Button className="home-button" label="Start Here" />
        </Link>
      </div>
    </div>
  );
}

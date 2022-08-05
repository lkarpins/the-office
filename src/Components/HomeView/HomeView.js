import React from "react";
import "./HomeView.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export function HomeView() {
  return (
    <div className="welcome-view">
      <div className="paper">
        <div className="lines">
          <div className="text">
            Welcome, Office fan! <br />
            <br />
            The series is over, but the memories live on! Test your skills and
            see if you can guess which character stated these quotes!
            <br />
            <br />
            <Link to="/quotes" className="link-style">
              <Button label="Start Here" />
            </Link>
          </div>
        </div>
        <div className="holes hole-top"></div>
        <div className="holes hole-middle"></div>
        <div className="holes hole-bottom"></div>
      </div>
    </div>
  );
}

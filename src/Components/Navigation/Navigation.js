import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="link-style">
        <h1 className="logo" data-cy="logo">
          The Office-ionado
        </h1>
      </Link>
    </nav>
  );
};

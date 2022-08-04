import React from "react";
import "./Button.css";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="app-button" data-cy="app-button">
      {label}
    </button>
  );
};

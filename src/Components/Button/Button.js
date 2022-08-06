import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="app-button" data-cy="app-button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

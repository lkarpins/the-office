import React, { Component } from "react";
import { Button } from "../Button/Button";
import "./QuestionView.css";

export const QuestionView = ({ id, content, character }) => {
  return (
    <div className="question-view">
      <h3>Who Stated...?</h3>
      <p>{content}</p>
      <div className="hidden-box">
        <p>
          {character.firstname} {character.lastname}
        </p>
        <Button label="Reveal" />
      </div>
    </div>
  );
};

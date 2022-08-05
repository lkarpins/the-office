import React, { Component } from "react";
import "./QuestionView.css";

export const QuestionView = ({ id, content, character }) => {
  return (
    <div className="question-view">
      <h3>Who Stated...?</h3>
      <p>{content}</p>
      <div className="hidden-box">
        <p hidden>
          {character.firstname} {character.lastname}
        </p>
      </div>
    </div>
  );
};

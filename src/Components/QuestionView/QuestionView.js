import React, { Component } from "react";
import "./QuestionView.css";

export const QuestionView = ({ id, content, character }) => {
  return (
    <div className="question-view">
      <h3>Who Stated This..?</h3>
      <p>{content}</p>
      <p>
        {character.firstname} {character.lastname}
      </p>
    </div>
  );
};

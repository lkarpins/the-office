import React, { Component } from "react";

export const QuestionView = ({ id, content, character }) => {
  return (
    <div className="question-view">
      <h3>Who Stated This..?</h3>
      <p>{content}</p>
    </div>
  );
};

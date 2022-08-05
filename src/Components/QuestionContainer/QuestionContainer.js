import React from "react";
import { QuestionView } from "../QuestionView/QuestionView";
import "./QuestionContainer.css";

export const QuestionContainer = ({ quotes }) => {
  const questionCard = quotes.map((quote) => {
    return (
      <QuestionView
        id={quote._id}
        key={quote._id}
        content={quote.content}
        character={quote.character}
      />
    );
  });

  return <div className="question-container">{questionCard}</div>;
};

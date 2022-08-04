import React from "react";
import { QuestionView } from "../QuestionView/QuestionView";
import "./QuestionContainer.css";

const QuestionContainer = ({ quotes }) => {
  const questionCard = quotes.map((quote) => {
    return (
      <QuestionView
        id={quote.id}
        key={quote.id}
        content={quote.content}
        character={quote.character}
      />
    );
  });

  return <div className="question-card">{questionCard}</div>;
};

export default QuestionContainer;

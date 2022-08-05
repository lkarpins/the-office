import React from "react";
import { QuestionView } from "../QuestionView/QuestionView";
import "./QuestionContainer.css";

const QuestionContainer = ({ quotes }) => {
  const unniqueQuotes = [];
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

export default QuestionContainer;

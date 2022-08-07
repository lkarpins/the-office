import React from "react";
import { QuestionView } from "../QuestionView/QuestionView";
import "./QuestionContainer.css";
import PropTypes from "prop-types";

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

QuestionContainer.propTypes = {
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

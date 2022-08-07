import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./QuestionView.css";
import PropTypes from "prop-types";

export const QuestionView = ({ content, character }) => {
  const [isHidden, setIsHidden] = useState(true);
  const onRevealClick = () => {
    setIsHidden(false);
  };
  return (
    <div className="quote-card" data-cy="quote-card">
      <h3 data-cy="quote-header">Who Stated...?</h3>
      <p data-cy="quote-content">{content}</p>
      {isHidden && <Button onClick={onRevealClick} label="Reveal" />}
      <div className="hidden-box">
        {!isHidden && (
          <p data-cy="quote-character">
            {character.firstname} {character.lastname}
          </p>
        )}
      </div>
    </div>
  );
};

QuestionView.propTypes = {
  content: PropTypes.string.isRequired,
  character: PropTypes.object.isRequired,
};

QuestionView.defaultProps = {
  isHidden: true,
};

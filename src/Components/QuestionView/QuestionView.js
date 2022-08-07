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
      <h3>Who Stated...?</h3>
      <p>{content}</p>
      {isHidden && <Button onClick={onRevealClick} label="Reveal" />}
      <div className="hidden-box">
        {!isHidden && (
          <p>
            {character.firstname} {character.lastname}
          </p>
        )}
      </div>
    </div>
  );
};

QuestionView.propTypes = {
  content: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

QuestionView.defaultProps = {
  isHidden: true,
};

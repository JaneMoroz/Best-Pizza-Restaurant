import React, { useState } from "react";
import { FaPlus, FaMinus } from "../../utils/icons";

const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, info } = question;
  return (
    <article className="question" data-testid="question">
      <header>
        <h3>{title}</h3>
        <button
          type="button"
          className="btn btn--qa"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="answer toggle"
        >
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <p data-testid="answer">{info}</p>}
    </article>
  );
};

export default Question;

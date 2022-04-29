import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, title, info } = question;
  return (
    <article key={id} class="question">
      <header>
        <h3>{title}</h3>
        <button class="btn btn--qa" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

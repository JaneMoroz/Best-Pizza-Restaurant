import React from "react";
import { questions } from "../../assets/data/data";
import Question from "./Question";

function Questions() {
  return (
    <div className="questions">
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </div>
  );
}

export default Questions;

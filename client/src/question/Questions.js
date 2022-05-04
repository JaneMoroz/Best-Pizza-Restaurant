import React from "react";
import { questions } from "../data";
import Question from "./Question";

function Questions() {
  return (
    <div className="qa">
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </div>
  );
}

export default Questions;

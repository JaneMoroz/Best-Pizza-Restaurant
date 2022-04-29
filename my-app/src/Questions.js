import React from "react";
import { questions } from "./data";
import Question from "./Question";

function Questions() {
  return (
    <div class="qa">
      {questions.map((question) => {
        return <Question question={question} />;
      })}
    </div>
  );
}

export default Questions;

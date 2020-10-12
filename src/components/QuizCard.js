import React, { useState, useRef } from "react";

export default function QuizCard({ quizCard }) {
  const [flip, setFlip] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();
  return (
    <div
      className={`each-card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        <div className="questions">{quizCard.question}</div>
        <div className="options">
          {quizCard.options.map((option) => {
            return (
              <div className="quiz-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {" "}
        {quizCard.answer}
      </div>
    </div>
  );
}

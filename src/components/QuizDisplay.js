import React, { useState, useEffect, useRef } from "react";
import QuizList from "./QuizList";
import "../styles/Quiz.css";
import axios from "axios";
import AlternateDisplay from "./AlternateDisplay";

function QuizDisplay() {
  const categoryElement = useRef();
  const amountElement = useRef();

  const [categories, setCategories] = useState([]);
  const [quizCard, setQuizCard] = useState([]);

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      // console.log(res.data);
      setCategories(res.data.trivia_categories);
    });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountElement.current.value,
          category: categoryElement.current.value,
        },
      })
      .then((res) => {
        setQuizCard(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }
  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <div className="categories">
        <form  className="form-div" onSubmit={handleSubmit}>
            <select id="category" ref={categoryElement}>
              <option>Select a Category</option>
              {categories.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          <input
            type="number"
            placeholder="Number of Questions"
            id="amount"
            min="1"
            step="1"
            ref={amountElement}
          />
           <button className="generate-button">Generate</button>
          
        </form>
      </div>
      <div className="quiz-container">
        <QuizList quizCard={quizCard} />
      </div>
      <AlternateDisplay/>
    </>
  );
}
// no need for this sample quiz
// const Quiz = [
//   {
//     id: 1,
//     question: "What is the the color of the sky?",
//     answer: "Blue",
//     options: ["brown", "green", "blue", "purple"],
//   },
//   {
//     id: 2,
//     question: "How many days are there in January?",
//     answer: "31",
//     options: ["30", "31", "29", "28"],
//   },
// ];

export default QuizDisplay;

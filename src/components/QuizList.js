import React from 'react'
import QuizCard from './QuizCard'

function QuizList({quizCard}) {
  return (
    <div className='quiz-container'>
<div className='each-card-grid'>
      {quizCard.map(quizCard=>{
        return <QuizCard quizCard={quizCard} key={quizCard.id}/>
      })}   
    </div>
    </div>
    
  )
}
export default QuizList

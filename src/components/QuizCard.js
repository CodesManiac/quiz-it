import React, { useState,useEffect,useRef  } from "react";

export default function QuizCard({ quizCard }) {
  const [flip, setFlip] = useState(false);
  // const [height,setHeight] = useState('initial');

  const frontEl=useRef()
  const backEl= useRef()

  // function setMaxHeight() {
  //   const frontHeight=frontEl.current.getBoundingClientRect().height
  //   const backHeight=backEl.current.getBoundingClientRect().height
  //   setHeight(Math.max(frontHeight,backHeight,100))
  // }
  // useEffect(setMaxHeight,[quizCard.question,quizCard.answer,quizCard.options])
  // useEffect(()=>{
  //   window.addEventListener('resize',setMaxHeight)
  //   return()=>window.removeEventListener('resize',setMaxHeight)
  // },[])
  return (
    <div 
     className={`each-card ${flip ? 'flip' : ''}`}
    //  style={{height:height}}
     onClick={() => setFlip(!flip)}>
         <div className='front' ref={frontEl}>
             <div className='questions'>
                 {quizCard.question}
             </div>
             <div className='options'>
                 {quizCard.options.map(option=>{
                     return <div className='quiz-option' key={option}>{option}</div>
                 })}
             </div>
         </div>
                <div className='back' ref={backEl}> {quizCard.answer}</div>
      {/* {flip ? quizCard.answer : quizCard.question} */}
    </div>
  );
}

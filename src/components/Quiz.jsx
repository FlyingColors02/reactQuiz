import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz(){
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;



	const quizFinished = activeQuestionIndex == QUESTIONS.length;
	
const handleSelectAnswer = useCallback (function handleSelectAnswer(selectedAnswer){
		setUserAnswers(prevState => [...prevState, selectedAnswer]);
	},[]);

const handleSkipAnswer = useCallback (()=>{
handleSelectAnswer(null)
},[handleSelectAnswer]);

	if(quizFinished){
		return <div id="summary">
			<img src={QuizComplete} alt="quiz complete"/>
			<h2>Quiz Completed!</h2>
		</div>
	}

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(()=> Math.random() - 0.5);

	return <div id="quiz">
		<div id="question">
			<QuestionTimer key={activeQuestionIndex} timeOut={15000} onTimeOut={handleSkipAnswer}/>
		<p>{QUESTIONS[activeQuestionIndex].text}</p>
		<ul id="answers">
			{shuffledAnswers.map(ans => 
			<li key={ans} className="answer">
				<button onClick={()=>handleSelectAnswer(ans)}>{ans}</button>
			</li>)}
		</ul>
	</div>
	</div>
	
}
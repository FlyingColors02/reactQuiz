import { useState } from "react";
import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";

export default function Quiz(){
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;



	const quizFinished = activeQuestionIndex == QUESTIONS.length;
	function handleSelectAnswer(selectedAnswer){
		setUserAnswers(prevState => [...prevState, selectedAnswer]);
	}
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
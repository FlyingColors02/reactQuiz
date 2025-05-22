import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, handleSelectAnswer}){
	const shuffledAnswers = useRef();

	if(!shuffledAnswers.current){
	shuffledAnswers.current = [...answers];
	shuffledAnswers.current.sort(()=> Math.random() - 0.5);

	}
	return <ul id="answers">
			{shuffledAnswers.current.map(ans => {
				const isSelected = selectedAnswer === ans;
				let buttonClass = '';
				if (answerState === 'answered' && isSelected){
					buttonClass ='selected'
				}
				if((answerState === 'correct' || answerState === 'wrong') && isSelected)
				buttonClass = answerState;


					return <li key={ans} className="answer">
				<button onClick={()=>handleSelectAnswer(ans)} className={buttonClass}>{ans}</button>
			</li>
			}
			)}
		</ul>
}
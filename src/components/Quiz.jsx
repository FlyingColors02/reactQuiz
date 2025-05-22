import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import QuizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizFinished = activeQuestionIndex == QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevState) => [...prevState, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        //this timer starts after the parent timer expires
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizFinished) {
    return (
      <div id="summary">
        <img src={QuizComplete} alt="quiz complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
				key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
				handleSelectAnswer={handleSelectAnswer}
				selectedAnswer={userAnswers[userAnswers.length - 1]}
				answerState={answerState}
				handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

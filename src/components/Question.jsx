import QUESTIONS from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({questionText, answers, selectedAnswer, answerState, handleSkipAnswer, handleSelectAnswer}) {
  return (
    <div id="question">
      <QuestionTimer
        timeOut={15000}
        onTimeOut={handleSkipAnswer}
      />
      <p>{questionText}</p>
      <Answers
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        answers={answers}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

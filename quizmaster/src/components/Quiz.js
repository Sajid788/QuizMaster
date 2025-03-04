import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../data";
import QuestionCard from "./QuestionCard";
import Quizs from '../assets/Quiz.png';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds timer

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(); 
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (selectedIndex) => {
    const selectedOption = quizData[currentQuestion].options[selectedIndex]; 
    const correctAnswer = quizData[currentQuestion].answer; 

    if (selectedOption === correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setTotalAttempted((prev) => prev + 1);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15); 
    } else {
      navigate("/result", { state: { score, totalAttempted } });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Quizs})` }}>
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold bg-gray-200 px-4 py-2 rounded-full ">
          ⏳ Time Left: {timeLeft} sec
        </div>
        <QuestionCard questionData={quizData[currentQuestion]} handleAnswer={handleAnswer} />
      </div>
    </div>
  );
};

export default Quiz;

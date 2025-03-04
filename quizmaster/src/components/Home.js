import React from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from '../assets/Home.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">QuizMaster</h1>
        <p className="mt-4 text-lg text-gray-700">Let's start the quiz →</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg" onClick={() => navigate("/quiz")}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;

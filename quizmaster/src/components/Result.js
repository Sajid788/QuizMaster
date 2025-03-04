import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Results from '../assets/Results.png';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalAttempted } = location.state || { score: 0, totalAttempted: 0 };

  return (
    <div className="h-screen lg:px-0 px-4 flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Results})` }}>
      <h2 className="lg:text-5xl text-3xl font-bold text-yellow-600">Bravo! You have Scored</h2>
      <p className="lg:text-6xl text-4xl lg:mt-0 mt-5 font-extrabold">{score}/{totalAttempted}</p>
      <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg" onClick={() => navigate("/")}>
        Wanna Play Again?
      </button>
    </div>
  );
};

export default Result;

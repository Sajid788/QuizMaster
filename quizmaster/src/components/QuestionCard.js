import React from "react";

const QuestionCard = ({ questionData, handleAnswer }) => {
  return (
    <div className=" p-6 rounded-xl  w-[380px] text-center">
      <h2 className="text-xl font-semibold mb-4">Question</h2>
      <p className="mb-4">{questionData.question}</p>
      <div className="flex flex-col gap-3">
        {questionData.options.map((option, index) => (
         <button
         key={index}
         className="w-full py-4 rounded-lg shadow-md  bg-[#FFFFFF] hover:bg-[#FE909D] transition"
         onClick={() => handleAnswer(index)} // Pass the selected option index
       >
         {option}
       </button>
       
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

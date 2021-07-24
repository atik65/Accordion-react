import React, { useState } from "react";

const Question = ({ ques }) => {
  const [showAns, setShowAns] = useState(false);

  let handleChange = (e) => {
    setShowAns(!showAns);
  };
  const { question, ans } = ques;
  return (
    <>
      <div className="question-card">
        <div className="question">
          <p>{question}</p>
          <button onClick={handleChange}>
            {showAns ? (
              <i class="fas fa-minus    "></i>
            ) : (
              <i class="fas fa-plus    "></i>
            )}
          </button>
        </div>
        <div className="ans">{showAns ? <p>{ans}</p> : ""}</div>
      </div>
    </>
  );
};

export default Question;

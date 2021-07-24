import React from "react";
import Question from "./Question";
import data from "./data";

const Accordion = () => {
  return (
    <>
      <main className="accordion">
        <div className="accordion-left">
          <p>
            Here are some Common Question's and Answer's.
            <span> Have a Look... </span>
          </p>
        </div>
        <div className="accordion-right">
          {data.map((ques) => {
            return <Question key={ques.id} ques={ques} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Accordion;

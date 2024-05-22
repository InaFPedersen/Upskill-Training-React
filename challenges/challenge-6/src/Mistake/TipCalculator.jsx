import { useState } from 'react';
import QuestionPrefixAnswers from './QuestionPrefixAnswers';
import QuestionText from './QuestionText';

const TipCalculator = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const handleReset = () => {
    setTotalSum(0);
    setBillAmount(0);
    setTipAmount(0);
  };

  return (
    <div className="container">
      <main className="questions">
        <div className="question">
          <QuestionText text="How much was the bill?" />
          <input
            className="answers"
            onChange={(e) => setBillAmount(Number(e.target.value))}
          />
        </div>
        <div className="question">
          <QuestionText text="How did you like the service?" />
          <QuestionPrefixAnswers />
        </div>
        <div className="question">
          <QuestionText text="How did your friend like the service?" />
          <QuestionPrefixAnswers />
        </div>
      </main>
      <aside>
        <h1>
          You should pay: ${totalSum} (${billAmount} + ${tipAmount})
        </h1>
      </aside>
      <footer>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </footer>
    </div>
  );
};

export default TipCalculator;

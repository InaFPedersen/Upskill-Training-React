import { useState } from 'react';

const Counter = () => {
  const [days, setDays] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + days);

  const handleSubtractStep = () => {
    if (step > 1) return setStep((currentStep) => currentStep - 1);
  };
  const handleAddStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleSubtractDay = () => {
    setDays((currentDays) => currentDays - step);
  };
  const handleAddDay = () => {
    setDays((currentDays) => currentDays + step);
  };

  return (
    <div className="container">
      <div className="step-container">
        <button className="btn" onClick={handleSubtractStep}>
          -
        </button>
        <p className="text-between-btn">Step: {step}</p>
        <button className="btn" onClick={handleAddStep}>
          +
        </button>
      </div>
      <div className="day-container">
        <button className="btn" onClick={handleSubtractDay}>
          -
        </button>
        <p className="text-between-btn">Count: {days}</p>
        <button className="btn" onClick={handleAddDay}>
          +
        </button>
      </div>

      {days >= 0 ? (
        <h1>
          {days} days from today, is {date.toDateString()}
        </h1>
      ) : (
        <h1>
          {days} days ago, was {date.toDateString()}
        </h1>
      )}
    </div>
  );
};

export default Counter;

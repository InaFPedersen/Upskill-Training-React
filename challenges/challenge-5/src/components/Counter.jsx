import { useState } from 'react';

const Counter = () => {
  const [days, setDays] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + days);

  const handleSubtractDay = () => {
    setDays((currentDays) => currentDays - step);
  };
  const handleAddDay = () => {
    setDays((currentDays) => currentDays + step);
  };

  const resetValues = () => {
    setDays(0);
    setStep(1);
  };

  return (
    <div className="container">
      <div className="step-container">
        <input
          className="slider"
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p className="step-result">{step}</p>
      </div>
      <div className="day-container">
        <button className="btn" onClick={handleSubtractDay}>
          -
        </button>
        <input
          className="days-input"
          placeholder={0}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        />
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

      <button className="reset-btn" onClick={resetValues}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

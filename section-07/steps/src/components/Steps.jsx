import { messages } from '../messages';
import { useState } from 'react';
import Button from './Button';

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step !== 1) setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step !== 3) setStep((currentStep) => currentStep + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            {/* <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={handlePrevious}
              text="Previous"
              emoji="👈"
            />
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={handleNext}
              text="Next"
              emoji="👉"
            /> */}
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;

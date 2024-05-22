import { useState } from 'react';
import BillInput from './BillInput';
import Output from './Output';
import Reset from './Reset';
import SelectPercentage from './SelectPercentage';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tipAmount = billAmount * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setBillAmount('');
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div className="container">
      <div className="questions">
        <BillInput billAmount={billAmount} onSetBillAmount={setBillAmount} />
        <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
          How did your friend like the service?
        </SelectPercentage>
      </div>
      {billAmount > 0 && (
        <>
          <Output billAmount={billAmount} tipAmount={tipAmount} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;

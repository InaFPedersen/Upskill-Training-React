// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  // const [value, setValue] = useState('Output will be here!');
  const [fromValue, setFromValue] = useState('EUR');
  const [toValue, setToValue] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromValue}&to=${toValue}`
        );

        const data = await response.json();
        setConverted(data.rates[toValue]);
        setIsLoading(false);
      }
      if (fromValue === toValue) return setConverted(amount);
      convert();
    },
    [amount, fromValue, toValue]
  );

  return (
    <div className="app">
      <h1>Currency converter</h1>

      <div className="inputs">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={isLoading}
        />
        <select
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          <option value="NOK">NOK</option>
        </select>
        <select
          value={toValue}
          onChange={(e) => setToValue(e.target.value)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          <option value="NOK">NOK</option>
        </select>
      </div>
      <h2>The converted value is {converted}</h2>
    </div>
  );
};

export default App;

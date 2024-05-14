import { useEffect, useState } from "react";
import Message from "./components/Message";

export default function App () {

  const [advice, setAdvice] = useState('');
  const [nrAdvice, setNrAdvice] = useState(0);

  async function getAdvice () {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setNrAdvice((current) => current + 1)
  }

  useEffect(function () {
    getAdvice()
  }, [])

  return (
  <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <Message nrAdvice={nrAdvice} />
  </div>
  )
}


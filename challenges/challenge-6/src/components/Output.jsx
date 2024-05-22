const Output = ({ billAmount, tipAmount }) => {
  return (
    <h3>
      You should pay: ${billAmount + tipAmount} (${billAmount} + ${tipAmount})
    </h3>
  );
};

export default Output;

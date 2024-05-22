const BillInput = ({ billAmount, onSetBillAmount }) => {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <input
        id="bill"
        className="answers"
        type="text"
        placeholder="Bill value"
        value={billAmount}
        onChange={(e) => onSetBillAmount(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;

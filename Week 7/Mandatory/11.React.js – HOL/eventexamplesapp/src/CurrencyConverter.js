import React, { useState } from 'react';
const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');
  const handleConvert = (e) => {
    e.preventDefault();
    const conversionRate = 0.012;
    setEuros((rupees * conversionRate).toFixed(2));
  };
  return (
    <div>
      <h2>Currency Converter (INR to EUR)</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter INR"
      />
      <button onClick={handleConvert}>Convert</button>
      {euros && <p>Converted: €{euros}</p>}
    </div>
  );
};
export default CurrencyConverter;
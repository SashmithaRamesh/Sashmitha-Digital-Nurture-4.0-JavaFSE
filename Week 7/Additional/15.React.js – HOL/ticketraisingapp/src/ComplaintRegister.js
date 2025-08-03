import React, { useState } from 'react';
import './ComplaintRegister.css';
const ComplaintRegister = () => {
  const [ename, setEname] = useState('');
  const [complaint, setComplaint] = useState('');
  const [numberHolder, setNumberHolder] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const referenceNumber = Math.floor(Math.random() * 100) + 1;
    setNumberHolder(referenceNumber);
    alert(`Thanks ${ename}\nYour Complaint was Submitted.\nTransaction ID is: ${referenceNumber}`);
    setEname('');
    setComplaint('');
  };
  return (
    <div className="container">
      <h1>Register your complaints here!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={ename}
            onChange={(e) => setEname(e.target.value)}
          />
        </div>
        <div>
          <label>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ComplaintRegister;
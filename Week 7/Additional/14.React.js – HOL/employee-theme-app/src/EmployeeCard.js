import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import './EmployeeCard.css';
const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`employee-card ${theme}`}>
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      <button className={`btn-${theme}`}>View Profile</button>
    </div>
  );
};
export default EmployeeCard;

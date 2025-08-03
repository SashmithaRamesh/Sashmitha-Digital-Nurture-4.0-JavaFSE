import React from 'react';
import EmployeeCard from './EmployeeCard';
const EmployeesList = () => {
  const employees = [
    { id: 1, name: 'Alice', position: 'Developer' },
    { id: 2, name: 'Bob', position: 'Designer' },
    { id: 3, name: 'Charlie', position: 'Manager' },
  ];
  return (
    <div>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};
export default EmployeesList;

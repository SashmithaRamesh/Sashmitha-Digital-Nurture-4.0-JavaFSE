import React, { useState } from 'react';
import './Register.css';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (name.length < 5) newErrors.name = 'Name must be at least 5 characters long.';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email must be valid.';
    if (password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert(`Registration successful!\nName: ${name}\nEmail: ${email}`);
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
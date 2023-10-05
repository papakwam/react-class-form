import React, { useState } from 'react';
import './App.css';
import './Components/form.css'

const App = () => {
  const [first,setFname] = useState('');
  const [last,setLname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here.
  };

  return (
    <div className='App'>
    <div className="form-container">
      <h2 className="facebook-blue">Facebook Sign In</h2>
      <form onSubmit={handleSubmit}>
      <div><input
          className="form-input"
          onChange={handleFnameChange}
          value={first}
          placeholder="First name"
          type="text"
          required
        /></div>
      
        <div><input
          className="form-input"
          onChange={handleLnameChange}
          value={last}
          placeholder="Surname"
          type="text"
          required
        /></div>
        
        <div> <input
          className="form-input"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email address"
          type="email"
          required
        /></div>
       
        <div><input
          className="form-input"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
          type="password"
          required
        /></div>
        
        <button className="form-button" type="submit">
          Log In
        </button>
        <a className="forgot-password" href="#">
          Forgot password?
        </a>
      </form>
    </div>
    </div>
  );
};

export default App;

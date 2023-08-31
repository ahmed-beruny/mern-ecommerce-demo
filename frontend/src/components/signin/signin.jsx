import React from 'react'
import './signin.css'
import { useState } from 'react';



export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with email and password
    const data = {
      email: email,
      password: password
    };

    console.log(data);

    try {
      const response = await fetch('http://localhost:8000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Handle success, e.g. show a success message or redirect
        console.log('Post successful');
        //save token in local storage
        const jwttoken = await response.json();
        console.log(jwttoken.token);
        document.cookie = `jwttoken=${jwttoken.token}`;
        window.location.reload();
      } else {
        // Handle error, e.g. show an error message
        console.error('Post failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='signin'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button>Don't have an account?</button>
    </div>
  );
}

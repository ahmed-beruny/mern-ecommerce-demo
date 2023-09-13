import React, {useState,useEffect} from 'react'
import './signup.css'
export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with email and password
    const data = {
      name: name,
      email: email,
      password: password,
      role: 1
    };

    console.log(data);

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Handle success, e.g. show a success message or redirect
        console.log('Post successful');
        //show alert message
        alert('Signup successful');

      
        //save token in local storage
        const jwttoken = await response.json();
        console.log(jwttoken.token);
        document.cookie = `jwttoken=${jwttoken.token}`;
        window.location.href = '/';
      } else {
        // Handle error, e.g. show an error message
        alert('Signup failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };







  return (
    <div className='signup'>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text" id="name"  required onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email" id="email"  required onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password" id="password"  required onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
        
      </form>
    </div>
  )
}

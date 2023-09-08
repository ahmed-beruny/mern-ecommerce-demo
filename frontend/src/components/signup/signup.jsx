import React, {useState,useEffect} from 'react'
import './signup.css'
export default function Signup() {

  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    // Add more fields as needed
  });

  const { name, email, password } = signup;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSignup(prevSignup => ({
      ...prevSignup,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (signup.name && signup.email && signup.password) {
      
      const Respose = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
      });

      if(Respose.ok){
        console.log('Post successful');

        setSignup({
          name: '',
          email: '',
          password: '',
        });
        window.location.reload();


    }
    else{
      console.error('Sign up failed');
    }
  };
}




  return (
    <div className='signup'>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text" id="name" value={name} required onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email" id="email" value={email} required onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password" id="password" value={password} required onChange={handleInputChange}
          />
        </div>

        <button type="submit">Signup</button>
        
      </form>
    </div>
  )
}

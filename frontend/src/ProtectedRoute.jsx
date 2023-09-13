import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {

    const [loginInfo, setLoginInfo] = useState(true);

    const navigate = useNavigate();
    const {Component} = props;
    
    
      //get api url from .env file
    
      const apiURL = process.env.REACT_APP_API_URL;
    
      //console.log(apiURL);
    
    
    
    // Function to retrieve a cookie by its name
    async function getCookie(name) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) {
        const token =  parts.pop().split(";").shift();
        //by bearer token
        console.log(token);
        const response = await fetch('http://localhost:8000/api/issignedin', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
    
        if(response.ok){
          console.log('signed in');
          
          const data = await response.json();
          //setuser(data.user);
          
          setLoginInfo(true);
    
          //console.log(data)

        }
        else {
          setLoginInfo(false);
          console.log('not signed in');
        };

      }
      else {
        setLoginInfo(false);
        console.log('not signed in');
      }


    }
    
    // Retrieve the "jwttoken" cookie
    useEffect(() => {
      getCookie("jwttoken");

      console.log(loginInfo);


    }
    , []);


  return (
    <div>

      {loginInfo ? <Component /> : navigate('/signin')}
    </div>
  )
}


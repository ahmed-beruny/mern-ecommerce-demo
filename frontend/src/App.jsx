import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';

import Customers from './components/Customers/Customers'; 
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Settings from './components/Settings/Settings';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
function App() {

  const [loginInfo, setLoginInfo] = useState(
    {
      isloggedin: false,
      user: {}
    }
  );


  //get api url from .env file





// Function to retrieve a cookie by its name
async function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    const token =  parts.pop().split(";").shift();
    //by bearer token

    const response = await fetch('http://localhost:8000/api/issignedin', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });

    if(response.ok){
      //console.log('signed in');
      
      const data = await response.json();
      //setuser(data.user);
      
      setLoginInfo({
        isloggedin: true,
        user: data
      });

      //console.log(data)


      return data;
    }
  }
}

// Retrieve the "jwttoken" cookie
useEffect(() => {
  getCookie("jwttoken");
}
, []);


  return (
    <Router>
      <div className="app">
        <Header loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<ProtectedRoute Component = {Content}/>} >
              <Route path="customers" element={<Customers/>} />
              <Route path="products" element={<Products/>} />
              <Route path="orders" element={<Orders/>} />
              <Route path="settings" element={<Settings/>} />
       
            </Route>
            <Route path="/signin" element={<Signin loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
            <Route path="/signup" element={<Signup loginInfo={loginInfo} setLoginInfo={setLoginInfo} />} />
          </Routes>
    
      </div>

      </div>


    </Router>
  );
}

export default App;



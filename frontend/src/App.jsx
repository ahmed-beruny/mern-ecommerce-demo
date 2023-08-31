import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Signin from './components/signin/signin';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {

  const [loginInfo, setLoginInfo] = useState(
    {
      isloggedin: false,
      user: {}
    }
  );



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
      console.log('signed in');
      
      const data = await response.json();
      //setuser(data.user);
      
      setLoginInfo({
        isloggedin: true,
        user: data.user
      });

      console.log(data)


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
      {loginInfo.isloggedin ? ( 
        <div>
          <div className="App">
            <Header userName={loginInfo.user.name} />
            <div className="body-content">
              <Sidebar/>
              <Content/>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Signin/>
        </div>
      )}


    </Router>
  );
}

export default App;


export const issignedin = async() => {
  try{
    //get token from cookie name jwttoken

    const token = document.cookie.split('=')[4];
    if(token){
      //setisloggedin(true);
      console.log(token);

      const response = await fetch('http://localhost:8000/api/issignedin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
      });

      if(response.ok){
        console.log('signed in');
        return true;
      }
      else return false;

    }
  }catch(err){

    console.log(err);
  }
}
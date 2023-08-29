import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1><Navbar/></h1>
      <div className="content">
        <Sidebar/>
        <Content/>
      </div>
    </div>
    </Router>
  );
}

export default App;

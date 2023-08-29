import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="body-content">
        <Sidebar/>
        <Content/>
      </div>
    </div>
    </Router>
  );
}

export default App;

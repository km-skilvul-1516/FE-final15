import './App.css';
import Login from './components/login';
import Register from './components/register'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path = "/register" component={Register}/>
      </div>

    </Router>
  );
}

export default App;

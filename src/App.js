import './App.css';
import Login from './components/login';
import Register from './components/register'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from './components/Landingpage'
<<<<<<< HEAD
import Home from './components/home/Home'
import StartQuiz from './components/quiz/StartQuiz';
import Soal from './components/quiz/Soal'

=======
>>>>>>> 6a78148bd5e61c0cdc13cb75bb1a5bef24b49db2

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landingpage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/quiz" component={StartQuiz} />
        <Route exact path="/soal" component={Soal} />
      </div>

    </Router>
  );
}

export default App;
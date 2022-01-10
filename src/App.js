import './App.css';
import Login from './components/login';
import Register from './components/register'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from './components/Landingpage'
import Home from './components/home/Home'
import StartQuiz from './components/quiz/StartQuiz';
import Soal from './components/quiz/Soal'
import Layanan from './components/layanan/Layanan'
import FormLayananA from './components/layanan/FormLayananA';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landingpage}/>
        <Route exact path="/login" component = {Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/quiz" component={StartQuiz} />
        <Route exact path="/soal" component={Soal} />
        <Route exact path="/layanan" component={Layanan} />
        <Route exact path="/layananA" component ={FormLayananA}/>
      </div>

    </Router>
  );
}

export default App;
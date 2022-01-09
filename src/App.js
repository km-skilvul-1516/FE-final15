import './App.css';
import Login from './components/login';
import Register from './components/register'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Testi from './components/Testi';
import Product from './components/Products'
import Contact from './components/Contact';
import Feature from './components/Feature';
import Reason from './components/Reason';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path = "/register" component={Register}/>
        <Navbar/>
        <Header/>
        <Feature/>
        <Reason/>
        <Product/>
        <About/>
        <Testi/>
        <Contact/> 
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
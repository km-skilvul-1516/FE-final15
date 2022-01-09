import React from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Testi from './Components/Testi';
import Product from './Components/Products'
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Reason from './Components/Reason';
import Footer from './Components/Footer';


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

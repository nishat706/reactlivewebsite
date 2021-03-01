import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
const App=()=>
{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  )
}
export default App;
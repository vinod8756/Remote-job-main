import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import {Aux} from './hoc/auxilary'
import Nav from './nav/nav';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';



const App = () => {

  return (
<Aux>
  <Nav></Nav>
  <section >
  <Route path = '/' exact component = {Page1} />
  <Route path = '/page2' exact component = {Page2} />
  <Route path = '/page3' exact component = {Page3} />
  <Route path = '/page4' exact component = {Page4} />

  </section>
   <footer className = 'footer'>
   
    <Link to = '/'>
          <button className = 'footer1'> 1</button>
     </Link>
   
     <Link to = '/page2'>
          <button className = 'footer2'> 2</button>
     </Link>

     <Link to = '/page3'>
          <button className = 'footer3'> 3</button>
     </Link>
   
     <Link to = '/page4'>
          <button className = 'footer4' >4 </button>
     </Link>;
  
   </footer>
    
    
  </Aux>
  ) 
}

export default App;

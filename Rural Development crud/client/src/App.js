import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import CreateTender from './components/CreateTender';
import EditTender from './components/EditTender';
import TenderDetails from './components/TenderDetails';
import NavBar from './components/NavBar';

export default class App extends Component {  
  render() {
    return (
      <BrowserRouter>
       <div className="container">
        <NavBar/>
        

        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreateTender}></Route>
        <Route path="/edit/:id" component={EditTender}></Route>
        <Route path="/post/:id" component={TenderDetails}></Route>
        
       </div>
      </BrowserRouter>
    )
      
      
  }
}

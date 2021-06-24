import './App.css';
import React ,{Component} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Header from './component/Header';
import JobInfo from './component/JobInfo';
import ShiftTime from './component/ShiftTime';
import User from './component/User';
import CandidateType from './component/CandidateType';
import Datatable from './component/Datatable';
import {Route,Switch} from 'react-router-dom';





const  App =()=>{
  
 
  
 
  
    return (
      
      
      <div>
      <Header/>
      <Switch>
      {/* <Route exact path="/" component={Header} /> */}
      <Route exact path="/" component={JobInfo} />
      <Route exact path="/jobinfo" component={JobInfo} />
      <Route exact path="/datatable" component={Datatable} />
      <Route exact path="/User" component={User} />
      <Route exact path="/candidate" component={CandidateType} />
      <Route exact path="/shift" component={ShiftTime} />
      
       </Switch>
            

      </div>
      
   
     
     );


  }
    

export default App;

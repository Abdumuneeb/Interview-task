import React from 'react'
import JobInfo from './JobInfo';
import {NavLink} from 'react-router-dom';


 function Header(props) {
    return (
        <div> 
        <div className="container"> 
        <header>
         
         <h1 className="header_heading">
             CREATE A JOB POST
         </h1>
       
       <p className="header_para"> Complete the following steps to create an effective job post</p> 
      <NavLink to="/datatable"> <button style={{float:"right",border:"none"}} > Datatable  </button>  </NavLink>
      <NavLink to="/User"> <button style={{float:"right",border:"none",marginRight:"10px"}} > Axios  </button>  </NavLink>

        </header>
        <hr className="w-auto "/>
        <h1 className="main_heading"> Step {props.text1} of {props.text2} </h1>
                        <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <NavLink className="nav-link active"  to="/jobinfo">Job Information</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/candidate">Candidate Type</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/shift">Shift Timmings</NavLink>
                                </li>
                     </ul>
        </div>
         
            
        </div>
    )
}
export default Header;

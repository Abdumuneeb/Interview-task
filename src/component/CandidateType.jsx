import "../stylesheet/JobInfo.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { NavLink } from "react-router-dom";

const JobInfo = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();
  const [age, setAge] = React.useState(
   { job:"none",
    experience: "none",
    education :"none",
    skills: "none"
  
  }

  );

  const handleChange = (event) => {
    const value = event.target.value;
    setAge({
      ...age,
      [event.target.name] :value
    });
  };

  const eventhandler=()=>{

  }

  return (
    <div> 
      <div className="container">
        <div className="row ">
          <form className={classes.root} noValidate autoComplete="off">
            <div className="container">
              <div className="row">
              <form>
              <div className="row mt-5">
                <div className="txt col-lg-6 col-md-6 col-sm-12 col-xxl-6">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
         Hourly Rate (above then 9)
        </InputLabel>
        <input min="10" class="form-control form-control-lg" onInvalid="alert('You must Enter Number greator then 9');" required type="number" placeholder="Enter Value"/>
                </div>
                <div className="txt col-lg-6 col-md-6 col-sm-12 col-xxl-6 mx-auto">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
        Expected start Date
        </InputLabel>
        <Select className="txt-field" style={{marginTop:"10px",width:"100%"}}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age.experience}
          name="experience"
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          required
          
        >
          <option value="none">
            <em>None</em>
          </option>
          <option value="one">24/6/2021</option>
          <option value="two">25/6/2021</option>
          <option value="three">26/6/2021</option>
          <option value="four">27/6/2021</option>
          <option value="five">28/6/2021</option>
        </Select>
                </div> </div>


              <div className="row mt-5">
                <div className="txt col-lg-6 col-md-6 col-sm-12 col-xxl-6 mx-auto">
                
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
                Career level
        </InputLabel>
        <Select className="txt-field" style={{marginTop:"10px",width:"100%"}}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age.education}
          name="education"
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <option value="none">
            <em>None</em>
          </option>
          <option value="bcs">Beginner</option>
          <option value="mcs">Entry Level</option>
          <option value="phd">Professional</option>
        </Select>
                </div>
                <div  className="col-lg-6 col-md-6 col-sm-12 col-xxl-6 mx-auto">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
          Gender
        </InputLabel>
        <Select className="txt-field" style={{marginTop:"10px",marginBottom:"20px",width:"100%"}}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age.skills}
          name="skills"
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <option value="none">
            <em>None</em>
          </option>
          <option value="dev">Male</option>
          <option value="front">Female</option>
          <option value="back">Other</option>
        </Select>
                </div> </div>

                <div className=" mt-5">
                  <textarea
                    className="txt-dis"
                    placeholder="Write a Description.."
                  ></textarea>
                </div>
                </form>
               
              </div>            
             
            </div>
            
       <NavLink to="/jobinfo"><button style={{marginTop:'150px', marginLeft:"0px !important",marginBottom:"40px",width:"20rem"}} type="button" className="btn btn-outline-secondary btn-lg">Previous</button></NavLink>     
      <NavLink to="/shift"> <button style={{float:"right",marginTop:'150px',marginBottom:"40px",width:"20rem"}}  type="submit" className="btn btn-primary btn-lg">Next</button> </NavLink>      
          </form>
         
        </div>
      </div>
    </div>
  );
};
export default JobInfo;

import "../stylesheet/JobInfo.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PublishIcon from '@material-ui/icons/Publish';
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

  return (
    <div>
      <div className="container">
        <div className="row ">
          <form className={classes.root} noValidate autoComplete="off">
            <div className="container">
              <div className="row">
              <form>
              <div className="row mb-5">
                <div className="txt col-lg-6 col-md-6 col-sm-12 col-xxl-6">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
          Looking for
        </InputLabel>
        <Select className="txt-field" style={{marginTop:"10px",width:"100%"}}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age.job}
          name="job"
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          required
        >
          <option value="none">
            <em>None</em>
          </option>
          <option value="full">Full time JOb</option>
          <option value="intern">Internsip</option>
          <option value="remot">Remotely</option>
        </Select>
                </div>
                <div className="txt col-lg-6 col-md-6 col-sm-12 col-xxl-6 mx-auto">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
        Experience
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
          <option value="one">One Year</option>
          <option value="two">Two Years</option>
          <option value="three">Three Years</option>
        </Select>
                </div>
                </div>

                <div className="mb-5">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
         Education
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
          <option value="bcs">BSCS</option>
          <option value="mcs">MCS</option>
          <option value="phd">PHD</option>
        </Select>
                </div>
                <div className="mb-5">
                <InputLabel style={{marginTop:"20px"}} shrink id="demo-simple-select-placeholder-label-label">
          Skills
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
          <option value="dev">DevOPs</option>
          <option value="front">Front End Developer</option>
          <option value="back">Back End Developer</option>
        </Select>
                </div>

                <div>
                  <textarea
                    className="txt-dis"
                    placeholder="Write a Description.."
                  ></textarea>
                </div>
                </form>
               
              </div>            
              <p style={{marginTop:"30px"}}>Add If there is any inspiration  </p>
              <button style={{marginTop:'5px',width:"20rem",backgroundColor:"#47CB5D"}} type="file" id="myfile" name="myfile" className="btn btn-outline-secondary btn-lg">{<PublishIcon style={{ marginRight:"10px"}}/>}GO TO SELECT TEMPLATE</button>
            
            </div>
            
            <button style={{marginTop:'150px', marginLeft:"0px !important",marginBottom:"40px",width:"20rem"}} type="button" className="btn btn-outline-secondary btn-lg">Previous</button>
       <NavLink to="/candidate">   <button style={{float:"right",marginTop:'150px',marginBottom:"40px",width:"20rem"}} type="button" className="btn btn-primary btn-lg">Next</button> </NavLink>   
          </form>
         
        </div>
      </div>
    </div>
  );
};
export default JobInfo;

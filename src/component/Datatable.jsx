import React ,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import sdata from './sdata';

function Datatable() {
    const [searchTerm, setsearchTerm] = useState("");
    const [allData, setAllData] =useState(sdata);

    const handleDelete  = (id) =>{
  
        let filtered = allData.filter((a)=>a.id!==id);
        console.log(filtered);
        setAllData(filtered);
    }
    const jobs =(val,key)=>{
        
        return( 
            <tr>
            <th scope="row">{val.id}</th>
            <td>{val.title}</td>
            <td>{val.applydate}</td>
            <td>{val.interview} </td>
            
            <td> 
       
            <button style={{border:"none"}}>  <EditIcon/> </button> <button  onClick={()=>{handleDelete(val.id ) }} style={{border:"none"}}><DeleteIcon/></button> 
             </td>
          </tr>

        );

    }
    return (
        <div>
        <input style={{marginLeft:"50%",marginTop:"20px"}} type="text" placeholder="Search.."  onChange={event => {setsearchTerm(event.target.value)}}></input>

        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Jobs</th>
      <th scope="col">Apply Date</th>
      <th scope="col">Interview Date</th>
    </tr>
  </thead>
  <tbody>
    {allData.filter((val) =>{
        if(searchTerm == ""){
            return val;
        }
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
        }
    }).map(jobs)}
  </tbody>
</table>
            
        </div>
    )
}
export default Datatable;

import { useEffect } from "react";
import EmployeeNavbar from "./employeeNavbar";
import axios from "axios"
import { useState } from "react";
import { NavLink } from "react-router";
const EmployeeTaskbar = () =>{
const [task,setTask] = useState([]);
let admintoken = localStorage.getItem("token");
  let token = "Bearer " + admintoken;
  
    useEffect(()=>{
        console.log(token)
        const api = "http://localhost:5000/api/task/getTask"
        const getAllTasks = async()=>{
            try{
                    const res = await axios.get(api,{
                        headers:{
                            "Authorization":token
                        }
                    });
                    setTask(res.data);
                    console.log(res)
            }
            catch(e){
                console.log(e);
            }
        }
        getAllTasks();
    },[])
    return(

        
        <>
        <div className="row">
            <div className="col-lg-12">
                
                    <EmployeeNavbar />
                
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            {
                        task.map((t,index)=>(
                            <div className="card" key={index}>
                   
                    <div className="card-header">
                        Start Date : {t.project.startDate.split("T")[0]}
                    </div>
                    <div className="card-body">
                        Title : {t.title}
                        <br />
                        Project Name : {t.project.title}
                        <br />
                        Description : {t.project.shortDescription}
                        <br />
                        <br />
                        <NavLink to='/employee/view-task' state={{taskId:t._id}}> <button className="btn btn-info" > Details</button></NavLink>
                        
                    </div>
                    <div className="card-footer">
                        End Date : {t.project.estimatedEndDate.split("T")[0]}
                    </div>
                </div>
                        ))
                    }
                
            </div>
        </div>
        </>
    )
}

export default EmployeeTaskbar;
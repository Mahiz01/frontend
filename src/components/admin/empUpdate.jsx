import { useLocation } from "react-router";
import AdminNavbar from "./navbar";
import { useState,useEffect } from "react";
import axios from "axios";

const EmployeeUpdate = ()=>{
    const location = useLocation();
    
    const [employee,setEmployee] = useState({})
 const[msg,setMsg] = useState("");

    useEffect(() => {
        if (location.state && location.state.empDetails) {
            setEmployee(location.state.empDetails);
        }
    }, [location.state]);

    const handleChange=(e)=>{
        const {name,value} = e.target
        setEmployee({...employee,[name]:value})
    }

    const updateEmp = async(e)=>{
        e.preventDefault();
        const apiU = " http://localhost:5000/api/employee/UpdateEmp"
        try{
            const res = await axios.post(apiU,employee);
            console.log(res);
            setMsg("Updated Successfully");
        }
        catch(e){
            console.log(e)
            setMsg("Failed In Uploading")
        }
    }
    return(
        <>
         <div className="row">
            <div className="col-lg-12">
                <AdminNavbar />
            </div>
            </div>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4" style={{"justifyContent":"center"}}>
                    <div className="card-header" >
                        {msg}
                        Employee Update
                        {/* {console.log("employee",employee)} */}
                    </div>
                    <form onSubmit={updateEmp}>
                    <div className="card-body" >
                        <div className="mt-4">
                            <label htmlFor="" >
                                Name
                            </label>
                            <input type="text"  name="name" value={employee.name}  className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="mt-4" >
                            <label htmlFor="" >
                                Job Title
                            </label>
                            <input type="text"   name="jobTitle" value={employee.jobTitle} className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" >
                            Salary
                            </label>
                            <input type="text"  name="salary" value={employee.salary} className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" >
                            City
                            </label>
                            <input type="text"  name="city" value={employee.city} className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="">
                            Username
                            </label>
                            <input type="text"   name="username" value={employee.username} className="form-control" />
                        </div>
                        <button className="btn btn-primary mt-4"> Update</button>
                    </div>
                    </form>
                    

                </div>
            </div>
        </>
    )
}

export default EmployeeUpdate;
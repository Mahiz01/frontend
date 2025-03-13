import { useState } from "react"
import AdminNavbar from "./navbar"
import axios from "axios"
const EmployeeOnBoarding = ()=>{
        const [name,setName] =useState('');
        const [job,setJob] =useState('');
        const [city,setCity] =useState('');
        const [salary,setSalary] =useState(0);
        const [profilePic,setProfilepic] =useState('');
        const [cv,setCv] =useState('');
        const [username,setUsername] =useState('');
        const [password,setPassword] = useState('');

    const addEmployee =async ($e)=>{
        $e.preventDefault();
        const api ="http://localhost:5000/api/employee/addEmployee"
        try{
            let tokeAdmin = localStorage.getItem('token');
            const token = 'Bearer '+tokeAdmin
            console.log(token);
            const res = await axios.post(api,{
                
                    "name" : name,
                    "jobTitle": job,
                    "city": city,
                    "salary": salary,
                    "profilePic": profilePic,
                    "cv": cv,
                    "username": username,
                    "password": password
                
            },{
            headers:{
                "Authorization":token
            }}
                
            
        )
            console.log(res.data);
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <>
        <div className="row">  
            <div className="col-lg-12"> <AdminNavbar /></div>
        </div>
        
        <div className="row mt-4">  
            <div className="col-sm-2"> </div>
            <div className="col-md-8"> 
                <div className="card">
                    <div className="card-header">
                        Employee Onboarding - Add Details 
                    </div>
                    <div className="card-body">
                        <form className="row g-3" onSubmit={addEmployee}>
                            <div className="col-md-6">
                                <label  className="form-label">Name</label>
                                <input type="text" class="form-control"  onChange={($e)=>{setName($e.target.value)}}/>
                                console.log(name);
                            </div>
                            <div class="col-md-6">
                                <label  className="form-label">City</label>
                                <input type="text" className="form-control"  onChange={($e)=>{setCity($e.target.value)}}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Select Job Title</label>
                                <select className="form-control" onChange={($e)=>{setJob($e.target.value)}}>
                                    <option>----select job title----</option>
                                    <option>Software Dev</option>
                                    <option>Software tester</option>
                                    <option>Product Owner</option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="inputCity" className="form-label">Profile Pic</label>
                                <input type="file" class="form-control" id="inputCity"  onChange={($e)=>{setProfilepic($e.target.value)}}/>
                                <br />
                                <button className="btn btn-secondary">Upload</button>
                            </div>
                            <div class="col-lg-12">
                                <label htmlFor="inputCity" className="form-label">Upload updated CV</label>
                                <input type="file" class="form-control" id="inputCity" onChange={($e)=>{setCv($e.target.value)}} />
                                <br />
                                <button>Upload</button>
                            </div>
                             <div className="col-md-4">
                             <label htmlFor="inputZip" className="form-label">Username</label>
                             <input type="text" className="form-control" id="inputZip" onChange={($e)=>{setUsername($e.target.value)}}/>
                            </div>
                            <div className="col-md-4">
                             <label htmlFor="inputZip" className="form-label">Salary</label>
                             <input type="text" className="form-control" id="inputZip" onChange={($e)=>{setSalary($e.target.value)}}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputZip" className="form-label">Password</label>
                                <input type="text" className="form-control" id="inputZip" onChange={($e)=>{setPassword($e.target.value)}}/>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Employee Onboarding</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-2"> </div>
        </div>
        
    </>
    )
}
export default EmployeeOnBoarding
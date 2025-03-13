import { useEffect, useState } from "react";
import EmployeeNavbar from "./employeeNavbar";
import axios from "axios";

const ProfileEmp = ()=>{
const [name,setName] =useState('');
        const [job,setJob] =useState('');
        const [city,setCity] =useState('');
        const [salary,setSalary] =useState(0);
        const [profilePic,setProfilepic] =useState('');
        const [cv,setCv] =useState('');
        const [username,setUsername] =useState('');
        const [password,setPassword] = useState('');
        const [emp,setEmp] = useState('');
        const [file,setFile] = useState(undefined);
        const [profile,setProfile] = useState(undefined);
    const apiGet = "http://localhost:5000/api/employee/getEmployeeByToken"
    const tokenAdmin = localStorage.getItem('token')
    let token ="Bearer "+tokenAdmin
    const Filehandling =(e)=>{
            setFile(e.target.files[0]);
    }    
  
    const fileUpload = async(e)=>{
        e.preventDefault();
        if(!file){
            console.log("File not found"+file);
        }
        const cvApi = "http://localhost:5000/api/employee/upload-cv";
        const header = {
            "Authorization" :"Bearer " +localStorage.getItem('token'),
            'Content-Type' :'multipart/form-data'
        }
        const fData = new FormData()
        fData.append('file',file);
        try{
            const res = await axios.post(cvApi,fData,{
                headers:header
            })
            console.log(res);
        }
        catch(e){
            console.log(e)
        }
    }
    const profileHandling = (e)=>{
        setProfile(e.target.files[0])
        }

    const profileUpload = async(e)=>{
        if(!profile){
            console.log("No profile Added"+profile);
        }

        e.preventDefault();

        const pData = new FormData();
        pData.append('profile',profile);

        const apiprofile ="http://localhost:5000/api/employee/upload-profile";
        try{
            const resp = await axios.post(apiprofile,pData,{
                headers:{
                    "Authorization":'Bearer '+ localStorage.getItem('token'),
                    "Content-Type":'multipart/form-data'
                }
            })
            console.log(resp);
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        
        const getEmp = async()=>{
            let response=  await axios.get(apiGet,{
                headers:
                {
                    "Authorization":token
                }
            })
            console.log(response);
            setEmp(response.data);

        }
        getEmp();
    },[])
    return(
        <>
        <div className="row">  
            <div className="col-lg-12"> <EmployeeNavbar /></div>
        </div>
        
        <div className="row mt-4">  
            <div className="col-sm-2"> </div>
            <div className="col-md-8"> 
                <div className="card">
                    <div className="card-header">
                        Employee Onboarding - Add Details 
                    </div>
                    <div className="card-body">
                        <form className="row g-3" >
                            <div className="col-md-6">
                                <label  className="form-label">Name</label>
                                <input type="text" class="form-control" placeholder={emp.name}  onChange={($e)=>{setName($e.target.value)}}/>
                            
                            </div>
                            <div class="col-md-6">
                                <label  className="form-label">City</label>
                                <input type="text" className="form-control"  placeholder={emp.city} onChange={($e)=>{setCity($e.target.value)}}/>
                            </div>
                            <div className="col-12">
                                  <label  className="form-label">Job Title</label>
                                  <input type="text" className="form-control"  placeholder={emp.jobTitle} onChange={($e)=>{setJob($e.target.value)}}/>
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="inputCity" className="form-label">Profile Pic</label>
                                <input type="file" class="form-control" id="inputCity" onChange={profileHandling}/>
                                <br />
                                <button className="btn btn-secondary" onClick={profileUpload}>Upload updated Profile</button>
                            </div>
                            <div class="col-lg-12">
                                <label htmlFor="inputCity" className="form-label">Upload updated CV</label>
                                <input type="file" class="form-control" id="inputCity"  onChange={Filehandling} />
                                <br />
                                <button className="btn btn-secondary" onClick={fileUpload}> Upload</button>
                            </div>
                             <div className="col-md-4">
                             <label htmlFor="inputZip" className="form-label">Username</label>
                             <input type="text" className="form-control" id="inputZip"   placeholder={emp.username} onChange={($e)=>{setUsername($e.target.value)}}/>
                            </div>
                            <div className="col-md-4">
                             <label htmlFor="inputZip" className="form-label">Salary</label>
                             <input type="text" className="form-control" id="inputZip"   placeholder={emp.salary} onChange={($e)=>{setSalary($e.target.value)}}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputZip" className="form-label">Password</label>
                                <input type="text" className="form-control" id="inputZip"  placeholder={emp.password} onChange={($e)=>{setPassword($e.target.value)}}/>
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

export default ProfileEmp
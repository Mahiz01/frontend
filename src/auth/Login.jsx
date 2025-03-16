import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [msg,setMsg] = useState(false);
    const navigate = useNavigate();
    const processLogin =async ($e)=>{
        $e.preventDefault()
        const api ="http://localhost:5000/api/auth/login"
        try{
            
        const response = await axios.post(api,{
            "username":username,
            "password":password
        })

        console.log(response);
        setMsg("Login Success");

        localStorage.setItem('token',response.data.token)
        const role = response.data.role
        switch(role){
            case ("ROLE_EMPLOYEE"):
                navigate("/employee/dashboard")
                break
            case ("ROLE_ADMIN"):
                navigate("/admin/dashboard")
                break
            default:
                break

        }
        return
        }
        catch(e){
            setMsg("Login failed");

            console.log(e);
        }

    }
    return(
        <>
        <div className="row" style={{marginTop:"10%"}}>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
                <div className="card-header">
                    <p>{msg}</p>
                ETMS LOGIN PAGE
                </div>
                <div className="card-body">
                    <form  onSubmit={processLogin}>
                        <div className="mt-4">
                        <label> Username</label>
                        <input type="text"  className="form-control" onChange={($event)=>setUsername($event.target.value)}/>
                        </div>
                        <div className="mt-4">
                        <label> Password</label>
                        <input type="password" className="form-control" onChange={($event)=>setPassword($event.target.value)}/>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-primary mt-4"disabled= {!username || !password}/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>
        </>
    )
}

export default Login;
import { useState } from "react";
import AdminNavbar from "./navbar";
import { useEffect } from "react";
import axios from "axios"
const AssignTask = () => {
  const [emp, setEmp] = useState([]);
  const [task, setTask] = useState([]);
const [empid,setEmpid] = useState("");
const [taskid,setTaskid] = useState("");

  let admintoken = localStorage.getItem("token");
  let token = "Bearer " + admintoken;
  useEffect(() => {
    console.log("CALLED")
    const employeeApi = " http://localhost:5000/api/employee/getEmployee";

    const getAllEmployees = async () => {
      const resE = await axios.get(employeeApi, {
        headers: {
          Authorization: token,
        },
      });
      console.log("resE",resE);
      setEmp(resE.data);
    };
    
    const taskApi = " http://localhost:5000/api/task/getTask";

    const getAllTasks = async () => {
      const resT = await axios.get(taskApi, {
        headers: {
          Authorization: token,
        },
      });
      console.log("resT",resT);
      setTask(resT.data);
    };
    getAllEmployees();
    getAllTasks();
  },[]);

  const taskPost = async($e) =>{
        $e.preventDefault();
        const api = "http://localhost:5000/api/assign/addAssign"
        const response = await axios.post(
          api,
          {
            eid: empid,
            tid: taskid,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log("Post",response);
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <AdminNavbar />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header">Assgin task to Employee</div>
            <div className="card-body">
              <form onSubmit={taskPost}>
                <div className="mt-4">
                  <label>Select Employee:</label>
                  <select
                    className="form-control"
                    onChange={($e) => setEmpid($e.target.value)}
                  ><option> Select the Employee</option>
                    {
                        emp.map((e,index)=>(
                            <option key={index} value={e._id}>
                                {e.name} - { e.jobTitle}
                            </option>
                        ))
                    }
                    
                  </select>
                </div>
                <div className="mt-4">
                  <label>Select Task:</label>
                  <select
                    className="form-control"
                    onChange={($e) => setTaskid($e.target.value)}
                  ><option> Select the Task</option>
                    {
                        task.map((t,index)=>(
                            <option key={index} value={t._id}>
                                {t.title} - {t.shortDescription}
                            </option>
                        ))
                    }
                    
                  </select>
                </div>
                <button className="btn btn-primary mt-4"> Assign</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
};
export default AssignTask;

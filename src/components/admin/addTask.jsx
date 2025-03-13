import { useEffect, useState } from "react";
// import AdminNav from "./adminNavbar";
import axios from "axios";
import AdminNavbar from "./navbar";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sdate, setSDate] = useState(0);
  const [edate, setEDate] = useState(0);
  const [project, setProject] = useState([]);
  const [p_id,setpId] = useState("");
  // const api = "http://localhost:5000/api/task/addTask";

  // const AddJob = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post(api, {
  //     title: title,
  //     shortDescription: description,
  //     startDate: sdate,
  //     estimatedEndDate: edate,
  //   });
  //   console.log(res);
  // };
  const proApi = "http://localhost:5000/api/project/getAllProjects";

  useEffect(() => {
    const getProjects = async (e) => {
      const res = await axios.get(proApi);
      setProject(res.data);
      console.log(res.data);
      
    };
    getProjects();
  },[]);

  const AddTask = async(e)=>{
    e.preventDefault();
    const apiAddTask ="http://localhost:5000/api/task/addTask/";
    const res = await axios.post(apiAddTask,{
        "title":title,
        "shortDescription":description,
        "estimatedEndDate":edate,
        "project":p_id
    });
    console.log(res);
    console.log(apiAddTask)
  }
  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-header">Task Add</div>

            <div className="card-body">
              <form onSubmit={AddTask}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={($e) => setTitle($e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    ShortDescription
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={($e) => setDescription($e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    startDate
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={($e) => setSDate($e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    estimatedEndDate
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter ExperienceNeeded"
                    onChange={($e) => setEDate($e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <select onChange={($e)=>setpId($e.target.value)}>
                    <option value="Select Project">Select Project</option>
                    {project.map((p, index) => (
                      <option value={p._id} key={index}>
                        {p.title} -{p.shortDescription}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="btn btn-primary mt-4"> Add Task</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </>
  );
};

export default AddTask;

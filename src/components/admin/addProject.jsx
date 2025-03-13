import { useEffect, useState } from "react";
// import AdminNav from "./adminNavbar";
import axios from "axios";
import AdminNavbar from "./navbar";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sdate, setSDate] = useState(0);
  const [edate, setEDate] = useState(0);
  const [clientname, setClientName] = useState("");
  const [techStack, settechStack] = useState("");

  const AddProject = async (e) => {
    e.preventDefault();
    const api = "http://localhost:5000/api/project/addProject";
    const token = localStorage.getItem("token");
    const t = "Bearer " + token;
    // e.preventDefault();
    const res = await axios.post(
      api,
      
        {
          title: title,
          shortDescription: description,
          estimatedEndDate: edate,
          clientName: clientname,
          techStack: techStack,
        },
      
      {
        headers: {
          Authorization: t,
        },
      }
    );
    console.log(res);
  };

  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-header">Add Project</div>

            <div className="card-body">
              <form onSubmit={AddProject}>
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
                  <label for="exampleFormControlInput1" class="form-label">
                    Client Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter ExperienceNeeded"
                    onChange={($e) => setClientName($e.target.value)}
                  />
                </div>
                <div>
                  <label for="exampleFormControlInput1" class="form-label">
                    Tech Stack
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter ExperienceNeeded"
                    onChange={($e) => settechStack($e.target.value)}
                  />
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

export default AddProject;

import { useLocation, useNavigate } from "react-router";
import EmployeeNavbar from "./employeeNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskDetails = () => {
    const location = useLocation();
    const data = location.state?.taskId;
    const navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [sate,setState] = useState("");
    const [username,setUsername]=useState("");
    let [comments,setComments] = useState([])
    const api = "http://localhost:5000/api/task/gettaskbyId/"+data;
    const admintoken = localStorage.getItem('token');
    const token = 'Bearer ' + admintoken;

    useEffect(() => {
        const getEmpusername = async()=>{
            const apiEmp ="http://localhost:5000/api/employee/getEmployeeByToken"
           try{
            const res = await axios.get(apiEmp,{headers:{
                Authorization:token
            }})
            console.log(res.data);
            setUsername(res.data.username);
           }
           catch(e){
            console.log(e);
           }
        }
        const getTask = async () => {
            try {
                const response = await axios.get(api, {
                    headers: {
                        Authorization: token
                    }
                });
                setTask(response.data);
                console.log("task",response.data)
            } catch (error) {
                console.error("Error fetching task details:", error);
            }
        };
        if (data) getTask();
        getEmpusername();
    }, [data, token]);

// const obj ={
//     "username": task?.username,
//     "message":sate,
//     "task":data
// }
//     const addComment = async(e)=>{
//         e.preventDefault();
//         setComments([...comments,sate]);
//         setState("")


// // console.log(obj)
//                 try{
//                     const apiPost = "http://localhost:5000/api/comment/add"
//                     const res = await axios.post(apiPost,obj,
//                 {headers:{
//                     "Authorization":token
//                 }})
//                 console.log(res);
                

//                 console.log(comments)
//                 }
//                 catch(e){
//                     console.log(e);
//                 }
//             }


const addComment = async (e) => {
    e.preventDefault();
    if (!sate.trim()) return; // Prevent empty comments

    const obj = {
        "username": username,
        "message": sate,
        "task": data
    };

    try {
        const apiPost = "http://localhost:5000/api/comment/add";
        const res = await axios.post(apiPost, obj, {
            headers: {
                "Authorization": token
            }
        });

        // Add new comment to state only if the API call succeeds
        setComments([...comments, {
           "username": username,
        "message": sate,
        "commentDate": new Date().toLocaleString()
        }]);
        setState("");
      
        console.log("Comment added:", res.data);
    } catch (err) {
        console.error("Error adding comment:", err);
    }
};

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <EmployeeNavbar />
                </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="card col-sm-4 ">
                    <div className="card-header">
                        {task?.title || "Task Details"}
                    </div>
                    <div className="card-body">
                        Short Description: {task?.shortDescription}
                        <p>Start Date: {task?.startDate}</p>
                        <p>End Date: {task?.estimatedEndDate}</p>

                        <h5>Project Details:</h5>
                        <p>Title: {task?.project?.title}</p>
                        <p>Description: {task?.project?.shortDescription}</p>
                        <p>End Date: {task?.project?.estimatedEndDate}</p>
                        <p>Client Name: {task?.project?.clientName}</p>
                        <p>Tech Stack: {task?.project?.techStack}</p>
                    </div>
                    <div className="card-footer">
                    <h2>Comments Over here</h2>

                    </div>
                </div>
            </div>
            </div>

            {/* comment part starts */}


            <div className="row">
            <div className="col-sm-4">  
            
            </div>
            <div className="col-sm-4"> 
               
               <form onSubmit={addComment}>
               <label> Add Comment Down</label>
                <textarea
                
                row={3}
                col={5}
                className="form-control"
                onChange={($e)=>setState($e.target.value)}

                >

                </textarea>

                <button className="btn btn-primary m-4">Add </button>
               </form>
                
            </div>
            <div className="col-sm-4"> 
            </div>
        </div>
         <div className="row">
            <p>Comments</p>
         <div className="col-sm-4"> 
         </div>
            <div className="col-sm-4">
            {
    comments.map((c, index) => (
        <div className="card" key={index}>
        <strong>{c?.username} : </strong> <strong>{c?.message} </strong>
            
            <p>{c?.commentDate}</p> {/* No need for toLocaleString() here */}
        </div>
    ))
}

            </div>
            <div className="col-sm-4"> 
            </div>
        </div> 
        </>
    );
}

export default TaskDetails;



// import { useLocation, useNavigate } from "react-router-dom";
// import EmployeeNavbar from "./employeeNavbar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const TaskDetails = () => {
//     const location = useLocation();
//     const { task } = location.state.taskId;
//     const navigate = useNavigate();

//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState("");
//     const [msg, setMsg] = useState("");
//     const [loading, setLoading] = useState(false);
//     const token = localStorage.getItem("token"); // Get token from localStorage

//     //Fetch comments for this task
//     useEffect(() => {
//         const fetchComments = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:5000/api/task/gettaskbyId/${task}`, {
//                     headers: { Authorization: `Bearer ${token} `},
//                 });
//                 setComments(res.data);
//                 console.log(res);
//             } catch (error) {
//                 console.error("Error fetching comments", error);
//             }
//         };

//         fetchComments();
//     }, [task, token]);

//     //Add a new comment
//     const addComment = async (event) => {
//         event.preventDefault(); // Prevent page reload
//         if (!newComment.trim()) return;
//         setLoading(true);

//         try {
//             const res = await axios.post(
//                 "http://localhost:5000/api/comment/add",
//                 { username: "Anonymous", message: newComment, task: task }, // Username is required
//                 { headers: { Authorization: `Bearer ${token} `} }
//             );

//             setComments([...comments, res.data]); // Update comments list
//             setNewComment(""); // Clear input field
//             setMsg("Comment Added Successfully!");
//         } catch (error) {
//             setMsg("Error in Adding Comment");
//             console.error("Error adding comment", error);
//         } finally {
//             setLoading(false);
//         }
//     };


//     return (
//         <>
//             <div className="row">
//                 <div className="col-lg-12">
//                     <EmployeeNavbar />
//                 </div>
//             </div>

//             <div className="container mt-4 col-md-6">
//                 <div className="card">
//                     <div className="card-header">
//                         <h3 className="mb-0">Task Details</h3>
//                     </div>
//                     <div className="card-body">
//                         <h4 className="card-title mb-4">Task: {task.title}</h4>

//                         <p className="card-text">
//                             <strong>Project: </strong> {task.project.title}
//                         </p>

//                         <p className="card-text">
//                             <strong>Description: </strong> {task.shortDescription}
//                         </p>

//                         <p className="card-text">
//                             <strong>Start Date: </strong> {task.startDate.split("T")[0]}
//                         </p>

//                         <p className="card-text">
//                             <strong>Estimated End Date: </strong> {task.estimatedEndDate.split("T")[0]}
//                         </p>

//                         <p className="card-text">
//                             <strong>Client Name: </strong> {task.project.clientName}
//                         </p>

//                         <p className="card-text">
//                             <strong>Tech Stack: </strong> {task.project.techStack}
//                         </p>

//                         <button className="btn btn-info mt-3" onClick={() => navigate("/employee/tasks")}>
//                             Back to Tasks
//                         </button>
//                     </div>
//                 </div>
//             </div>

           

//             {/* Add Comment Section */}
//             <div className="row">
//                 <div className="col-sm-2"></div>
//                 <div className="card mt-4 col-md-8">
//                     <div className="card-header">
//                         <h4>Add a Comment</h4>
//                     </div>
//                     <div className="card-body">
//                         <form onSubmit={addComment}>
//                             <label>Enter new comment:</label>
//                             <textarea
//                                 rows={5}
//                                 cols={50}
//                                 className="form-control"
//                                 value={newComment}
//                                 onChange={(e) => setNewComment(e.target.value)}
//                             />
//                             <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
//                                 {loading ? "Adding..." : "Add Comment"}
//                             </button>
//                         </form>
//                         {msg && <p className="text-success mt-2">{msg}</p>}
//                     </div>
//                 </div>
//             </div>
//              {/* Comments Section */}
//              <div className="row">
//                 <div className="col-sm-2"></div>
//                 <div className="card mt-4 col-md-8">
//                     <div className="card-header">
//                         <h4>Comments</h4>
//                     </div>
//                     <div className="card-body">
//                         <ul className="list-group">
//                             {comments.length === 0 ? (
//                                 <li className="list-group-item text-muted">No comments yet.</li>
//                             ) : (
//                                 comments.map((comment) => (
//                                     <li key={comment._id} className="list-group-item">
//                                         <strong>{comment.username}:</strong> {comment.message} <br />
//                                         <small className="text-muted">{new Date(comment.commentDate).toLocaleString()}</small>
//                                     </li>
//                                 ))
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TaskDetails;
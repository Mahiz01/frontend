import {NavLink} from "react-router"

const EmployeeNavbar = () =>{
    const delEmpToken =()=>{

    }
    return(
        <>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink to="/employee/home"> <a class="navbar-brand" href="#">Employee</a></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <NavLink to="/employee/employee-tasks" style={{textDecoration:'none'}}>
                                <a class="nav-link" href="#">Tasks</a>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/employee/employee-update" style={{textDecoration:'none'}}>
                                <a class="nav-link" href="#">Update Profile</a>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/" style={{textDecoration:'none'}}>
                                {/* <a class="nav-link" href="#">LogOut</a> */}
                                <button className="btn btn-secodary" > Logout</button>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default EmployeeNavbar;
import { NavLink } from "react-router";

const AdminNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
         <NavLink to='/admin/dashboard'> <a className="navbar-brand" href="#">
            Admin
          </a>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/admin/dashboard"
                  style={{ textDecoration: "none" }}
                >
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/admin/employee-onboarding"
                  style={{ textDecoration: "none" }}
                >
                  <a class="nav-link" href="#">
                    Employee Onboarding
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
              <NavLink to='/admin/all-employees' style={{ 'textDecoration': 'none' }}>
              <a class="nav-link" href="#">All Employees</a></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/admin/add-project' style={{ 'textDecoration': 'none' }}>
              <a class="nav-link" href="#">Add Project</a></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/admin/add-task' style={{ 'textDecoration': 'none' }}>
              <a class="nav-link" href="#">Add Task</a></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to='/admin/assign-task' style={{ 'textDecoration': 'none' }}>
              <a class="nav-link" href="#">Assign Task to Employee</a></NavLink>
              </li>
              <li class="nav-item">
                                <NavLink to="/" style={{textDecoration:'none'}}>
                                {/* <a class="nav-link" href="#">LogOut</a> */}
                                <button className="btn btn-secodary" > Logout</button>
                                </NavLink>
                            </li>
              {/* <li className="nav-item dropdown">
              <NavLink to='/admin/employee-onboarding' style={{ 'textDecoration': 'none' }}>
              <a class="nav-link" href="#">DropDown</a></NavLink>
              
                <ul className="dropdown-menu">
                  <li>
                  <NavLink to='/admin/employee-onboarding' style={{ 'textDecoration': 'none' }}>
                  <a class="nav-link" href="#">A</a></NavLink>
                  </li>
                  <li>
                  <NavLink to='/admin/employee-onboarding' style={{ 'textDecoration': 'none' }}>
                  <a class="nav-link" href="#">B</a></NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;

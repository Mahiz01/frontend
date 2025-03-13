import EmployeeNavbar from "./employeeNavbar";

const EmployeeDashboard =()=>{
    return(
        <div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <EmployeeNavbar />
                    </div>
                </div>
            </div>
            <h2> 
                Employee Dashboard
            </h2>
        </div>
    )
}


export default EmployeeDashboard;
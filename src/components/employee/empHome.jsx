import EmployeeNavbar from "./employeeNavbar";

const HomeEmployee = ()=>{
    return(
        <>
         <div className="row">
            <div className="col-lg-12">
                
                    <EmployeeNavbar />
                
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                Welcome User 
            </div>
        </div>
        </>
    )
}

export default HomeEmployee;
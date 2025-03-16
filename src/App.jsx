import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './auth/Login'
import AdminDashboard from './components/admin/adminDashboard'
import EmployeeDashboard from './components/employee/employeeDashboard'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Route,Routes } from 'react-router'
import EmployeeOnBoarding from './components/admin/employeeonboarding'
import EmployeeList from './components/admin/employeelist'
import AssignTask from './components/admin/assign_task'
import EmployeeTaskbar from './components/employee/employeeTask'
import AddTask from './components/admin/addTask'
import AddProject from './components/admin/addProject'
import ProfileEmp from './components/employee/profileEmployee'
import TaskDetails from './components/employee/taskDetails'
import EmployeeUpdate from './components/admin/empUpdate'
import HomeEmployee from './components/employee/empHome'
// import CommentsEmp from './components/employee/commentsEmp'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login />}></Route>
      <Route path ="/admin/dashboard" element={<AdminDashboard />}></Route>
      <Route path ="/employee/dashboard" element={<EmployeeDashboard />}></Route>
      <Route path ="/admin/employee-onboarding" element={<EmployeeOnBoarding />}></Route>
      <Route path='/admin/all-employees' element={<EmployeeList />}></Route>
      <Route path='/admin/assign-task' element={<AssignTask />}></Route>
      <Route path='/admin/add-task' element={<AddTask />}></Route>
      <Route path='/admin/add-project' element={<AddProject />}></Route>
      <Route path='/employee/view-task' element={<TaskDetails />}></Route>
      <Route path='/admin/employee/update' element={<EmployeeUpdate />}></Route>
      <Route path='/employee/home' element={<HomeEmployee />}></Route>
      <Route path='/employee/employee-update' element={<ProfileEmp />}></Route>
   <Route path='/employee/employee-tasks' element={<EmployeeTaskbar />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

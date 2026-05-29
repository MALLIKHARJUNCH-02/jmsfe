// feature/job-management branch


import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ShowJobs from './components/ShowJobs'
import Login from './components/Login'
import EditJob from "./components/EditJob";
import Dashboard from "./components/Dashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/jobs" element={<ShowJobs />}></Route>
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

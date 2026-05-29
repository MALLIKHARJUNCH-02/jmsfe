import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ShowJobs from './components/ShowJobs'
import Login from './components/Login'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/jobs" element={<ShowJobs />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

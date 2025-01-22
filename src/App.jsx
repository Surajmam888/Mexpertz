import { Route, Routes } from "react-router-dom";
// import './App.css'
import Home from "./Pages/Home";
import UserForm from "./Components/UserForm";
import Navbar from "./Components/Navbar";
import Bookappointment from "./Pages/Bookappointment/Bookappointment";
import Cancelappointment from "./Pages/Cancelappointment/Cancelappointment";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserForm />} />
            <Route path="/bookappointment" element={<Bookappointment />} />
            <Route path="/cancelappointment" element={<Cancelappointment />} />
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import UserForm from "./Components/UserForm";
import Navbar from "./Components/Navbar";
import Bookappointment from "./Pages/Bookappointment/Bookappointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user") 
  );

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserForm onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/bookappointment" element={<Bookappointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;


import Dashboard from "./Components/authentication/Dashboard";
import Fdashboard from "./Components/drive/Fdashboard";
import Login from "./Components/authentication/Login";
import PrivateRoute from "./Components/authentication/PrivateRoute";
import Signup from "./Components/authentication/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";

import { useAuth } from './Context/AuthContext';

import Error from './Components/pages/error'
import "./App.css";
import About from "./Components/About";
// import UpdateProfile from "./Components/authentication/updateProfile";


function App() {

  const { currentUser } = useAuth();

  return (
    < >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={currentUser ? <Navigate to='dashboard' /> : <Home />} />
            <Route path="/dashboard" element={<PrivateRoute>  <Fdashboard /> </PrivateRoute>} />
            <Route path="/folder/:folderId" element={<PrivateRoute>  <Fdashboard /> </PrivateRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<PrivateRoute>  <Dashboard name='aksh' /> </PrivateRoute>} />
            {/* <Route path="/user/update-profile" element={<PrivateRoute>  <UpdateProfile name='aksh' /> </PrivateRoute>} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;


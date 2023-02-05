import Dashboard from "./Components/authentication/Dashboard";
import Fdashboard from "./Components/drive/Fdashboard";
import Login from "./Components/authentication/Login";
import PrivateRoute from "./Components/authentication/PrivateRoute";
import Signup from "./Components/authentication/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute>  <Fdashboard /> </PrivateRoute>} />
          <Route path="/folder/:folderId" element={<PrivateRoute>  <Fdashboard /> </PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute>  <Dashboard name='aksh' /> </PrivateRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1> Error: 404 Not Found </h1>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

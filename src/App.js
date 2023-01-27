import Dashboard from "./Components/Dashboard";
import Fdashboard from "./Components/Fdashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute>  <Fdashboard /> </PrivateRoute>} />
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

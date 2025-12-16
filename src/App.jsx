import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
     
      {location.pathname !== "/login" && <Navbar />}

      <div className="pt-4">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <StudentList />
              </PrivateRoute>
            }
          />

          <Route
            path="/add"
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

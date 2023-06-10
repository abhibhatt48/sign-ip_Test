import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import UserDetail from "./UserDetail";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

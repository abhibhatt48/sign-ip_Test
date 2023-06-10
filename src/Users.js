import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://express-t4.onrender.com/api/users");
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input 
        className="input-field"
        type="text" 
        placeholder="Search users..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredUsers.map(user => (
        <div key={user._id} className="user-card">
          <h2>{user.name}</h2>
          <img src={user.picture} alt={user.name} style={{width: "50px", height: "50px"}}/>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <Link to={`/users/${user._id}`}><button className="button">View Details</button></Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;

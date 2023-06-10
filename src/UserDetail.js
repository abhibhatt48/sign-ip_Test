import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './App.css';

const UserDetail = () => {
  const [user, setUser] = useState({});
  const [showTags, setShowTags] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
      setUser(response.data);
    };

    fetchUser();
  }, [id]);

  const toggleTags = () => {
    setShowTags(!showTags);
  };

  const toggleFriends = () => {
    setShowFriends(!showFriends);
  };

  return (
    <div className="container">
      <div className="card">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Address:</b> {user.address}</p>
        <p><b>Company:</b> {user.company}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Gender:</b> {user.gender}</p>
        <p><b>About:</b> {user.about}</p>
        <p><b>Registered:</b> {user.registered}</p>
        <p><b>Eye color:</b> {user.eyeColor}</p>
        <p><b>Balance:</b> {user.balance}</p>
        <p><b>Favorite Fruit:</b> {user.favoriteFruit}</p>

        <div className="toggle-section">
        <h3>
            Tags
            <button onClick={toggleTags}>{showTags ? "-" : <span>&#43;</span>}</button>
        </h3>
        {showTags && user.tags && (
            <ul>
            {user.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
            </ul>
        )}
        </div>

        <div className="toggle-section">
        <h3>
            Friends
            <button onClick={toggleFriends}>{showFriends ? "-" : <span>&#43;</span>}</button>
        </h3>
        {showFriends && user.friends && (
            <ul>
            {user.friends.map((friend, index) => (
                <li key={index}>{friend.name}</li>
            ))}
            </ul>
        )}
        </div>


        <p><b>Greeting:</b> {user.greeting}</p>
      </div>
    </div>
  );
};

export default UserDetail;

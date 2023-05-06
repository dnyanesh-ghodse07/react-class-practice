import React, { useState, useEffect } from 'react';
import User from './User';

const Posts = () => {
  const [users, setUser] = useState([]);

  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};

export default Posts;

// fetch data
// store data
// display/render data

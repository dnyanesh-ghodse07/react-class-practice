import React from 'react';
const User = (props) => {
  const { address, id, email, phone, name } = props.user;

  return (
    <>
      <div className="user">
        <span>{name}</span>
        <p>City: {address.city}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </>
  );
};

export default User;

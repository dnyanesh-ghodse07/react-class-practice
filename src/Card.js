import React, { useState } from 'react';

const Card = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <div
          className="card"
          style={{ border: '1px solid red', padding: '10px', width: '200px' }}
        >
          <span className="close" onClick={() => setShow(false)}>
            X
          </span>
          <div className="title">Card title</div>
          <div className="desc">Start editing to see some magic happen :)</div>
        </div>
      ) : (
        <button onClick={() => setShow(true)}>Show Card</button>
      )}
    </>
  );
};

export default Card;

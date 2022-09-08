import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUserOnline, setProfilePhoto }) => {
  const [getMsg, setMsg] = useState(null);
  const usernameRef = useRef();
  const passRef = useRef();
  const nav = useNavigate();

  function login() {
    const user = {
      username: usernameRef.current.value,
      pass1: passRef.current.value,
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:4000/login', options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUserOnline(data.myUser.username);
          setProfilePhoto(data.myUser.photo);
          nav('/');
        } else {
          setMsg(data.error);
        }
      });
  }

  return (
    <div className="container">
      <div className="box">
        <h3>Login</h3>
        <input ref={usernameRef} type="text" placeholder="Username.." />
        <input ref={passRef} type="text" placeholder="Password.." />
        <button onClick={login}>Login</button>
        <h5>{getMsg}</h5>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const nav = useNavigate();
  const [getMsg, setMsg] = useState(null);
  const usernameRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();
  const d = new Date();

  function register() {
    const user = {
      username: usernameRef.current.value,
      pass1: pass1Ref.current.value,
      pass2: pass2Ref.current.value,
      photo: 'img/profilePic.png',
      dateJoined:d,
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:4000/register', options)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setMsg(data.error);
        } else {
          nav('/login');
        }
      });
  }

  return (
    <div className="container">
      <div className="box">
        <h3>Register</h3>
        <input ref={usernameRef} type="text" placeholder="Username.." />
        <input ref={pass1Ref} type="text" placeholder="Password.." />
        <input ref={pass2Ref} type="text" placeholder="Repeat password.." />
        <h5>{getMsg}</h5>
        <button className="myButton" onClick={register}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;

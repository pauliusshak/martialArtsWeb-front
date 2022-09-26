import React, { useContext, useState, useRef ,useEffect} from 'react';
import MainContext from '../../mainContext/MainContext';
import Container from 'react-bootstrap/esm/Container';
import './style.css';

const MyProfile = ({ userOnline }) => {
  const { getProfilePhoto, setPhotoChanged, setProfilePhoto} =
    useContext(MainContext);
  const [showMenu, setShowMenu] = useState(false);
  const [getMsg, setMsg] = useState(null);
  const [dateJoined, setDateJoined] = useState(null)
  const photoRef = useRef();

  function addPhoto() {
    const user = {
      newPhoto: photoRef.current.value,
      username: userOnline,
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:4000/addPhoto', options)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setMsg(data.error);
        } else {
          setShowMenu(false);
          setMsg(null);
          setPhotoChanged(true);
          setProfilePhoto(data.newPhoto);
        }
      });
  }

  useEffect(() => {
    const user = {
        username: userOnline,
    }
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }
    fetch("http://localhost:4000/sendInfo", options)
        .then(res => res.json())
        .then(data => {
          setDateJoined(data.dateJoined)
        })
})

  return (
    <Container>
      <div className="myProfile">
        <img src={getProfilePhoto} alt="" />
        <h1>{userOnline}</h1>
        <button onClick={() => setShowMenu(!showMenu)}> Change picture</button>
        <h5>{getMsg}</h5>
        {showMenu && (
          <span className="myProfile">
            <input ref={photoRef} type="text" />
            <button onClick={addPhoto}>Add photo</button>
          </span>
        )}
        <h6>Joined since: {dateJoined}</h6>
      </div>
    </Container>
  );
};

export default MyProfile;

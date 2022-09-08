import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Toolbar = ({ userOnline, setUserOnline, getProfilePhoto }) => {
  const nav = useNavigate();

  const [walpaper, setWalpaper] = useState('toolbar');
  const [windows, setWindow] = useState('');
  const [toolbarNavBar, setToolbarNavBar] = useState(false);
  const [lastNumber, setLastNumber] = useState(null);
  
  function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    setLastNumber(randomNum);
    if (randomNum === lastNumber) {
      return getRandomNum();
    } else {
      return randomNum;
    }
  }
  return (
    <div className={walpaper}>
      <div className="ml20">
        <div onClick={() => nav('/')} className="homeLogoBox">
          <div>
            <img src="img/glove.png" alt="" />
            <span
              onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
            >
              HOME
            </span>
          </div>
        </div>
        {userOnline && (
          <span className="usernameBox ">
            <img src={getProfilePhoto} alt="profile" />
            <div className="myHover" onClick={() => nav('/myProfile')}>
              Hello {userOnline + ' '}!
            </div>
          </span>
        )}
      </div>

      {userOnline === null && (
        <div
          onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
          className="regLogBox"
        >
          {windows !== 'register' && (
            <span onClick={() => setWindow('register')}>
              <Link to="/register">REGISTER</Link>
            </span>
          )}
          {windows !== 'login' && (
            <span onClick={() => setWindow('login')}>
              <Link to="/login">LOGIN</Link>
            </span>
          )}
        </div>
      )}
      <div className="toolbarNav">
        <div onClick={() => setToolbarNavBar(!toolbarNavBar)}>
          <FontAwesomeIcon
            className={
              toolbarNavBar ? 'menuBars toggleUp ' : 'menuBars toggleDown'
            }
            icon={solid('bars')}
          />
        </div>
        {toolbarNavBar && (
          <div className="showHiddenMenu">
            <span
              onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
            >
              <Link to="/schedule">SCHEDULE</Link>
            </span>
            <span
              onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
            >
              <Link to="/gallery">GALLERY</Link>
            </span>
            <span
              onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
            >
              <Link to="/trainers/:name">OUR TRAINERS</Link>
            </span>
            <span
              onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
            >
              <Link to="/contact">CONTACT</Link>
            </span>
            <span
              onClick={() => setWalpaper(`toolbar walpaper${getRandomNum()}`)}
            >
              <Link to="/reviews">REVIEWS</Link>
            </span>
            {userOnline && (
              <div
                className="positionBottom"
                onClick={() => setUserOnline(null)}
              >
                <div onClick={() => nav('/')} className="logoutLogo">
                  <span className="myHover">
                    Logout
                    <FontAwesomeIcon
                      style={{ marginLeft: '5px' }}
                      icon={solid('arrow-right-from-bracket')}
                    />
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;

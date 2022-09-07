import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Toolbar = () => {
  const nav = useNavigate();
  const [windows, setWindow] = useState('');
  const [toolbarNavBar, setToolbarNavBar] = useState(false);

  return (
    <div className="toolbar">
      <div onClick={() => nav('/')} className="homeLogoBox">
        <img src="img/glove.png" alt="" />
        <span>HOME</span>
      </div>
      <div className="regLogBox">
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
      <div className="toolbarNav">
        <div onClick={() => setToolbarNavBar(!toolbarNavBar)}>
          <FontAwesomeIcon
            className={
              toolbarNavBar ? 'menuBars toggleUp' : 'menuBars toggleDown'
            }
            icon={solid('bars')}
          />
        </div>
        {toolbarNavBar && (
          <div className="showHiddenMenu">
            <span>
              <Link to="/schedule">SCHEDULE</Link>
            </span>
            <span>
              <Link to="/gallery">GALLERY</Link>
            </span>
            <span>
              <Link to="/trainers/:name">OUR TRAINERS</Link>
            </span>
            <span>
              <Link to="/contact">CONTACT</Link>
            </span>
            <span>
              <Link to="/reviews">REVIEWS</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;

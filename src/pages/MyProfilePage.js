import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import MyProfile from '../components/MyProfile/MyProfile';

const MyProfilePage = ({ userOnline }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (!userOnline) {
      alert('PLEASE LOGIN!');
      nav('/');
    }
  });
  useEffect(() => {


    
  });

  return <div>{userOnline && <MyProfile userOnline={userOnline} />}</div>;
};

export default MyProfilePage;

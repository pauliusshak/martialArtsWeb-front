import MainContext from './mainContext/MainContext';
import './App.css';
import { React, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toolbar from './components/toolbar/Toolbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MyProfilePage from './pages/MyProfilePage';
import TrainersPage from './pages/TrainersPage';
import ContactPage from './pages/ContactPage';
import SchedulePage from './pages/SchedulePage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  const [reviews, setReviews] = useState([]);
  const [getProfilePhoto, setProfilePhoto] = useState('img/profilePic.png');
  const [userOnline, setUserOnline] = useState(null);
  const [photoChanged, setPhotoChanged] = useState(null);

  return (
    <div className="App">
      <MainContext.Provider
        value={{
          userOnline,
          getProfilePhoto,
          setProfilePhoto,
          photoChanged,
          setPhotoChanged,
          reviews,
          setReviews,
        }}
      >
        <BrowserRouter>
          <div>
            <Toolbar
              getProfilePhoto={getProfilePhoto}
              userOnline={userOnline}
              setUserOnline={setUserOnline}
            />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/login"
                element={
                  <LoginPage
                    setUserOnline={setUserOnline}
                    setProfilePhoto={setProfilePhoto}
                  />
                }
              />
              <Route
                path="/myProfile"
                element={<MyProfilePage userOnline={userOnline} />}
              />
              <Route path="/trainers/:name" element={<TrainersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;

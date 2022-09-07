import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar';
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
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/myProfilePage" element={<MyProfilePage />} />
            <Route path="/trainers/:name" element={<TrainersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Homepage';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import FootagePage from './pages/Footages';
import VacancyPage from './pages/Vacancy';
// import './App.css'


function App() {

  return (
    <>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      {/* <GalleryPage /> */}
      {/* <FootagePage /> */}

      <BrowserRouter basename="/royalpeer_model_college">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vacancy" element={<VacancyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/footage" element={<FootagePage />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App

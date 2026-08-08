import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Homepage';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import FootagePage from './pages/Footages';
// import './App.css'


function App() {

  return (
    <>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      {/* <GalleryPage /> */}
      {/* <FootagePage /> */}

      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/footage" element={<FootagePage />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App

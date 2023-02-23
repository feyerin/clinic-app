import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from './components/Nav/TopNavbar';
import Footer from './components/Sections/Footer';
import Landing from "./screens/Landing.jsx";
import Profile from './screens/Profile/Profile';
import Dokter from './screens/Dokter/Dokter';
import ArtikelIndex from './screens/Artikel/ArtikelIndex';


function App() {
  return (
    <>
        <Router>
          <TopNavbar />
          <Routes>
            <Route path="/clinic-app/" element={<Landing />}/>
            <Route path="/clinic-app/profil" element={<Profile />} />
            <Route path="/clinic-app/dokter" element={<Dokter />} />
            <Route path="/clinic-app/artikel" element={<ArtikelIndex />} />
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
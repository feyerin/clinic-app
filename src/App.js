import './App.css';
import {BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import TopNavbar from './components/Nav/TopNavbar';
import Footer from './components/Sections/Footer';
import Landing from "./screens/Landing.jsx";
import Profile from './screens/Profile/Profile';
import Dokter from './screens/Dokter/Dokter';
import ArtikelIndex from './screens/Artikel/ArtikelIndex';
import Index from './components/Layout/admin';
import routesConfig from './navigation/route';


function App() {
  const router = createBrowserRouter(routesConfig);
    return <RouterProvider router={router} />;
  };

  // return (
  //   <>
  //     <Router>
  //       <TopNavbar />
  //       <Routes>
          
  //         <Route path="/clinic-app/" element={<Landing />}/>
  //         <Route path="/clinic-app/profil" element={<Profile />} />
  //         <Route path="/clinic-app/dokter" element={<Dokter />} />
  //         <Route path="/clinic-app/artikel" element={<ArtikelIndex />} />
  //       </Routes>
  //       <Footer/>
  //       <Routes>
  //         <Route path="/clinic-app/admin" element={<Index />}/>
  //       </Routes>
  //     </Router>
  //   </>
  // );


export default App;

import React from 'react';
import './App.css';
import routesConfig from './navigation/route';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter(routesConfig);
    return <RouterProvider router={router} />;
  };

  // return (
  //   <>
  //     <Router>
  //       <TopNavbar />
  //       <Routes>
          
  //         <Route path="/" element={<Landing />}/>
  //         <Route path="/profil" element={<Profile />} />
  //         <Route path="/dokter" element={<Dokter />} />
  //         <Route path="/artikel" element={<ArtikelIndex />} />
  //       </Routes>
  //       <Footer/>
  //       <Routes>
  //         <Route path="/admin" element={<Index />}/>
  //       </Routes>
  //     </Router>
  //   </>
  // );


export default App;

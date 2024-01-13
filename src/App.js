import React, {useEffect, useState} from 'react';
import './App.css';
import routesConfig from './navigation/route';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);
  
  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) { //
    return null;
  }

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

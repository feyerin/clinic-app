import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

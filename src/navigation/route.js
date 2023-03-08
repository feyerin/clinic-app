import TopNavbar from "../components/Nav/TopNavbar";
import Landing from "../screens/Landing";
import Footer from "../components/Sections/Footer"
import Profile from "../screens/Profile/Profile";
import Dokter from "../screens/Dokter/Dokter";
import ArtikelIndex from "../screens/Artikel/ArtikelIndex";
import AdminLayout from "../components/Layout/admin";
import ArtikelTable from "../screens/Admin/Artikel/ArtikelTable";
import UserTable from "../screens/Admin/User/UserTable";
import LayananTable from "../screens/Admin/Layanan/LayananTable";
import DokterTable from "../screens/Admin/Dokter/DokterTable";
import CabangTable from "../screens/Admin/Cabang/CabangTable";

const routesConfig = [
  {
    path: "/login",
    element: <Landing />,
  },
  {
    path: "/clinic-app/",
    children: [
      {
        path: "home",
        element: 
          <>
            <TopNavbar/>
            <Landing />
            <Footer/>
          </>
      },
      {
        path: "profil",
        element: 
          <>
            <TopNavbar/>
            <Profile />
            <Footer/>
          </>
      },
      {
        path: "dokter",
        element: 
          <>
            <TopNavbar/>
            <Dokter />
            <Footer/>
          </>
      },
      {
        path: "artikel",
        element: 
          <>
            <TopNavbar/>
            <ArtikelIndex />
            <Footer/>
          </>
      },
    ],
  },
  {
    path: "/clinic-app/admin/",
    element: <AdminLayout />,
    children: [
      {
        path: "layanan",
        element: 
          <>
            <LayananTable/>
          </>
      },
      {
        path: "dokter",
        element: 
          <>
            <DokterTable/>
          </>
      },
      {
        path: "cabang",
        element: 
          <>
            <CabangTable/>
          </>
      },
      {
        path: "artikel",
        element: 
          <>
            <ArtikelTable/>
          </>
      },
      {
        path: "user",
        element: 
          <>
            <UserTable/>
          </>
      }
    ],
  },
];

export default routesConfig
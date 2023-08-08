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
import ArtikelCreate from "../screens/Admin/Artikel/ArtikelCreate";
import ArtikelDetail from "../screens/Artikel/ArtikelDetail";
import Login from "../screens/Admin/Auth//Login";
import { Navigate } from "react-router-dom";
import NewsCreate from "../screens/Admin/Berita/BeritaCreate";
import NewsTable from "../screens/Admin/Berita/BeritaTable";
import ArtikelEdit from "../screens/Admin/Artikel/ArtikelEdit";

const routesConfig = [
  {
    path: "/login",
    element: <Landing />,
  },
  {
    path: "/admin/login",
    element: 
      <>
        <Login/>
      </>
  },
  {
    path: "/clinic-app/",
    children: [
      {
        path: "/clinic-app/",
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
        path: "dokter-preview",
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
      {
        path: "artikel-content-preview",
        element: 
          <>
            <TopNavbar/>
            <ArtikelDetail />
            <Footer/>
          </>
      },
      {
        path: "artikel-content/",
        element: 
          <>
            <TopNavbar/>
            <ArtikelDetail />
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
            <NewsTable/>
          </>
      },
      {
        path: "dokter/create",
        element: 
          <>
            <NewsCreate/>
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
        path: "artikel/create",
        element: 
          <>
            <ArtikelCreate/>
          </>
      },
      {
        path: "artikel/edit",
        element: 
          <>
            <ArtikelEdit/>
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
  {
    path:"*",
    element:<Navigate to="/clinic-app" replace />
  }
];

export default routesConfig
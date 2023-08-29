import React from "react";
import { Navigate } from "react-router-dom";
import TopNavbar from "../components/Nav/TopNavbar";
import Landing from "../screens/Landing";
import Footer from "../components/Sections/Footer"
import Profile from "../screens/Profile/Profile";
import ArtikelIndex from "../screens/Artikel/ArtikelIndex";
import AdminLayout from "../components/Layout/admin";
import ArtikelTable from "../screens/Admin/Artikel/ArtikelTable";
import UserTable from "../screens/Admin/User/UserTable";
import LayananTable from "../screens/Admin/Layanan/LayananTable";
import ArtikelCreate from "../screens/Admin/Artikel/ArtikelCreate";
import ArtikelDetail from "../screens/Artikel/ArtikelDetail";
import Login from "../screens/Admin/Auth//Login";
import NewsCreate from "../screens/Admin/Berita/BeritaCreate";
import NewsTable from "../screens/Admin/Berita/BeritaTable";
import ArtikelEdit from "../screens/Admin/Artikel/ArtikelEdit";
import BeritaIndex from "../screens/Berita/BeritaIndex";
import BeritaDetail from "../screens/Berita/BeritaDetail";
import JadwalIndex from "../screens/Jadwal/JadwalIndex";
import SejabarIndex from "../screens/Sejabar/SejabarIndex";
import PoliUmumIndex from "../screens/Layanan/PoliUmum/PoliUmumIndex";
import FisioterapiIndex from "../screens/Layanan/Fisioterapi/FisioterapiIndex";
import LabolatoriumIndex from "../screens/Layanan/Labolatorium/LabolatoriumIndex";
import FarmasiIndex from "../screens/Layanan/Farmasi/FarmasiIndex";

const routesConfig = [
  {
    path: "/admin/login",
    element: 
      <>
        <Login/>
      </>
  },
  {
    path: "/",
    children: [
      {
        path: "/",
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
        path: "jadwal",
        element: 
          <>
            <TopNavbar/>
            <JadwalIndex />
            <Footer/>
          </>
      },
      {
        path: "berita",
        element: 
          <>
            <TopNavbar/>
            <BeritaIndex />
            <Footer/>
          </>
      },
      {
        path: "berita-content-preview",
        element: 
          <>
            <TopNavbar/>
            <BeritaDetail />
            <Footer/>
          </>
      },
      {
        path: "berita-content/",
        element: 
          <>
            <TopNavbar/>
            <BeritaDetail />
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
      {
        path: "sejabar",
        element: 
          <>
            <TopNavbar/>
            <SejabarIndex />
            <Footer/>
          </>
      },
      {
        path: "poli-umum",
        element: 
          <>
            <TopNavbar/>
            <PoliUmumIndex />
            <Footer/>
          </>
      },
      {
        path: "fisioterapi",
        element: 
          <>
            <TopNavbar/>
            <FisioterapiIndex />
            <Footer/>
          </>
      },
      {
        path: "labolatorium",
        element: 
          <>
            <TopNavbar/>
            <LabolatoriumIndex />
            <Footer/>
          </>
      },
      {
        path: "farmasi",
        element: 
          <>
            <TopNavbar/>
            <FarmasiIndex />
            <Footer/>
          </>
      },
    ],
  },
  {
    path: "/admin/",
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
        path: "berita",
        element: 
          <>
            <NewsTable/>
          </>
      },
      {
        path: "berita/create",
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
    element:<Navigate to="" replace />
  }
];

export default routesConfig
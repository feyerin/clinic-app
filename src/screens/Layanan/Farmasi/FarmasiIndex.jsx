import React from "react";
import Layout from "../../../components/Layout";
import FarmasiContent from "../../../components/Sections/Layanan/Farmasi/FarmasiContent";

export default function FarmasiIndex() {
  return (
    <>
      <Layout 
        Content={<FarmasiContent/>}
        Title={"Instalasi Farmasi"}
      />
    </>

  )
}
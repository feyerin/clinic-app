import React from "react";
import Layout from "../../../components/Layout";
import FarmasiContent from "../../../components/Sections/Layanan/Farmasi/PoliUmumContent";

export default function FarmasiIndex() {
  return (
    <>
      <Layout 
        Content={<FarmasiContent/>}
        Title={"Poli Umum"}
      />
    </>

  )
}
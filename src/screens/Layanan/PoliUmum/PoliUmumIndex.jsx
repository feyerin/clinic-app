import React from "react";
import Layout from "../../../components/Layout";
import PoliUmumContent from "../../../components/Sections/Layanan/PoliUmum/PoliUmumContent";

export default function PoliUmumIndex() {
  return (
    <>
      <Layout 
        Content={<PoliUmumContent/>}
        Title={"Poli Umum"}
      />
    </>

  )
}
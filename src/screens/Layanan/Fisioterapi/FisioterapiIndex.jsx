import React from "react";
import Layout from "../../../components/Layout";
import FisioterapiContent from "../../../components/Sections/Layanan/Fisioterapi/FisioterapiContent";

export default function FisioterapiIndex() {
  return (
    <>
      <Layout 
        Content={<FisioterapiContent/>}
        Title={"Fisioterapi + Hidroterapi"}
      />
    </>

  )
}
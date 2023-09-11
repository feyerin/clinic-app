import React from "react";
import Layout from "../../../components/Layout";
import LaboratoriumContent from "../../../components/Sections/Layanan/Laboratorium/LaboratoriumContent";

export default function LaboratoriumIndex() {
  return (
    <>
      <Layout 
        Content={<LaboratoriumContent/>}
        Title={"Laboratorium "}
      />
    </>

  )
}
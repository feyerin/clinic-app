import React from "react";
import Layout from "../../../components/Layout";
import LabolatoriumContent from "../../../components/Sections/Layanan/Labolatorium/LabolatoriumContent";

export default function LabolatoriumIndex() {
  return (
    <>
      <Layout 
        Content={<LabolatoriumContent/>}
        Title={"Labolatorium"}
      />
    </>

  )
}
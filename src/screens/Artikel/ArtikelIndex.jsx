import React from "react";
import Layout from "../../components/Layout";
import ArtikelIndexContent from "../../components/Sections/Artikel/ArtikelIndexContent";

export default function ArtikelIndex() {
  return (
    <>
      <Layout 
        Content={<ArtikelIndexContent/>}
        Title={"Artikel Kesehatan"}
      />
    </>

  )
}
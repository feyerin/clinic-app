import React from "react";
import BeritaIndexContent from "../../components/Sections/Berita/BeritaIndexContent";
import Layout from "../../components/Layout";

export default function BeritaIndex() {
  return (
    <>
      <Layout 
        Content={<BeritaIndexContent/>}
        Title={"Berita"}
      />
    </>

  )
}
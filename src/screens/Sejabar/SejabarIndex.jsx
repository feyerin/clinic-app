import React from "react";
import Layout from "../../components/Layout";
import SejabarContent from "../../components/Sections/Sejabar/SejabarContent";

export default function SejabarIndex() {
  return (
    <>
      <Layout 
        Content={<SejabarContent/>}
        Title={"Sejabar"}
      />
    </>

  )
}
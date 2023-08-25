import React from "react";
import Layout from "../../components/Layout";
import ProfileContent from "../../components/Sections/Profile/ProfileContent";

export default function Profile() {
  return (
    <>
      <Layout 
        Content={<ProfileContent/>} 
        Title={"Profil"}
      />
    </>

  )
}
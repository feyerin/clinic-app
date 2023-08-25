import React from "react";
import Layout from "../../components/Layout";
import JadwalContent from "../../components/Sections/Jadwal/JadwalContent";

export default function JadwalIndex() {
  return (
    <>
      <Layout Content={<JadwalContent/>}/>
    </>
  )
}
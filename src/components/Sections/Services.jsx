import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
// Assets
import fasilitas1 from "../../assets/img/fasilitas/1.jpg";
import fasilitas5 from "../../assets/img/fasilitas/5.jpg";
import fasilitas3 from "../../assets/img/fasilitas/3.jpg";
import fasilitas4 from "../../assets/img/fasilitas/4.jpg";
import baznas from "../../assets/img/clients/baznas.png";
import bjb from "../../assets/img/clients/bank-bjb.png";

import { ChevronRightIcon } from '@heroicons/react/24/outline'


export default function Services() {
  return (
    <Wrapper id="services">

      <div>

        <div className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <img className="col-span-2 max-h-24 w-full object-contain lg:col-span-1" src={baznas} alt="Transistor" width={258} height={148}/>
              <img className="col-span-2 max-h-24 w-full object-contain lg:col-span-1" src={bjb} alt="Reform" width={258} height={348}/>
            </div>
          </div>
        </div>

        <section className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="text-lg font-semibold text-primary">Tentang Klinik </h2>
                <h1 className="extraBold text-[36px] tracking-wide">Pratama Inggit Garnasih</h1>
                <p className="font15 font-Inter leading-loose	mt-5 font-semibold text-gray-500">
                  <span className="text-primary">Klinik pratama inggit garnasih </span> merupakan inisiasi dari Badan Amil Zakat Nasional Provinsi Jawa Barat (disingkat Baznas Jabar) yang diamanahi oleh Gubernur Jawa Barat sekaligus amanat dari Ibu Inggit Garnasih untuk memuliakan para lansia (Program Nyaah Ka Kolot).
                </p>
                <div className="mt-10" style={{ width: "190px" }}>
                  <button className="text-primary flex rounded-full border-solid border-2 border-primary p-4">Selengkapnya <ChevronRightIcon className="h-6 w-6"/></button>
                </div>
              </AddLeft>
              <AddRight>
                <img className="radius8" src={fasilitas4} width={2000} height={600} alt="add" />
              </AddRight>
            </Advertising>
          </div>
        </section>

        <section className="container animate-fade-up">
          <HeaderInfo>
            <h1 className="font40 extraBold tracking-wide sm:mt-10">Fasilitas Klinik</h1>
            <p className="font15 font-Inter leading-loose	mt-5 font-semibold text-gray-500">
              <span className="text-primary">Klinik pratama inggit garnasih </span> Difasilitasi dengan sarana & prasarana yang lengkap dan nyaman
              <br />
              sesuai dengan standar klinik di indonesia.
            </p>
          </HeaderInfo>
          
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                image={fasilitas1}
                title="Graphic Design"
                subtitle="Lorem ipsum dolor sit amet"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                image={fasilitas5}
                title="Web Design"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                image={fasilitas3}
                title="Development"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                image={fasilitas4}
                title="Print" 
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>

          <div style={{ width: "190px" }}>
            <button className="text-primary flex rounded-full border-solid border-2 border-primary p-4">Selengkapnya <ChevronRightIcon className="h-6 w-6"/></button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
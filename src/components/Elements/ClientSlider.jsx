import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/baznas.png"
import ClientLogo02 from "../../assets/img/clients/bank-bjb.png";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    
  };
  return (
    <div>
      <h1 className="font20 extraBold flexCenter mb-2">Mitra Kami :</h1>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <img className="lg:p-[10%] md:p-[12%] sm:mr-12" height={150} width={150} src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <img className="lg:p-[10%] md:p-[12%] lg:ml-32 sm:ml-10" height={170} width={170} src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
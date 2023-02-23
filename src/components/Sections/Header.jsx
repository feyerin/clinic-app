import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import carousel1 from "../../assets/img/carousel-1.png";
import carousel2 from "../../assets/img/carousel-2.jpg";

import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
//carousel
import Carousel from "react-multi-carousel";


export default function Header() {
  const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

   function CustomDots({ active, onClick }) {
		return (
			<li
				className={`react-multi-carousel-dot z-[101]  ${
					active
						? "react-multi-carousel-dot react-multi-carousel-dot--active"
						: "react-multi-carousel-dot react-multi-carousel-dot--inactive"
				}`}
			>
				<button
					className={`!border-solid !border-2 !border-[#8dbb00]`}
					aria-label="Go to slide 1"
				/>
			</li>
		);
	}

  return (
    <>
      <Carousel
        autoPlay
        arrows={false}
        autoPlaySpeed={3000}
        className=""
        infinite
        itemclassName=""
        responsive={responsive}
        showDots
        sliderclassName=""
        slidesToSlide={1}
        customDot={<CustomDots />}
        dotListclassName={"relative "}
      >
        <div style={{backgroundImage: `url(${carousel1})`, height:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <Wrapper id="home" className="container flexSpaceCenter">
            <LeftSide className="flexCenter">
              <div>
                <h1 className="extraBold font60">Your Health in Expert Hands</h1>
                <HeaderP className="font13 semiBold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </HeaderP>
                <BtnWrapper>
                  <FullButton title="Get Started" />
                </BtnWrapper>
              </div>
            </LeftSide>
          </Wrapper>
        </div>

        <div style={{backgroundImage: `url(${carousel2})`, height:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <Wrapper id="home" className="container flexSpaceCenter">
            <LeftSide className="flexCenter">
              <div>
                <h1 className="extraBold font60">We are Digital Agency.</h1>
                <HeaderP className="font13 semiBold">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </HeaderP>
                <BtnWrapper>
                  <FullButton title="Get Started" />
                </BtnWrapper>
              </div>
            </LeftSide>
          </Wrapper>
        </div>

        
      </Carousel>      
    </>

  
  );
}

const Container = styled.section`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${carousel1});
`;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;



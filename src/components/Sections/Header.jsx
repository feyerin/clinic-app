import React from "react";
import styled from "styled-components";
import banner from "../../assets/img/banner.jpg";

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

  return (
    <>
      <Carousel
        autoPlay
        arrows={false}
        autoPlaySpeed={6000}
        infinite
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
      >
        <div>
          <Wrapper>
            <img loading="lazy" src={banner} alt="banner" />
          </Wrapper>
        </div>

        {/* <div style={{backgroundImage: `url(https://dummyimage.com/960x600/b9bad4/fff)`, height:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
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
        </div> */}
      </Carousel>      
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  @media (max-width: 960px) {
    margin-top: 60px;
  }
  @media (max-width: 426px) {
    margin-top: 40px;
  }
`;
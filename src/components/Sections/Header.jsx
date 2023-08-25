import React from "react";
import styled from "styled-components";
// Components
// import FullButton from "../Buttons/FullButton";
// // Assets
// import carousel1 from "../../assets/img/carousel-1.png";
// import carousel2 from "../../assets/img/carousel-2.jpg";

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

   function CustomDots({ active }) {
		return (
			<li
				className={`react-multi-carousel-dot z-[101]  ${
					active
						? "react-multi-carousel-dot react-multi-carousel-dot--active"
						: "react-multi-carousel-dot react-multi-carousel-dot--inactive"
				}`}
			>
				<button
					className={`!border-solid !border-2 !border-[#7620ff]`}
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
        autoPlaySpeed={6000}
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
        <div style={{backgroundImage: `url(https://dummyimage.com/1200x600/b9bad4/fff)`, height:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <Wrapper id="home" className="container flexSpaceCenter">
            {/* <LeftSide className="flexCenter">
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
            </LeftSide> */}
          </Wrapper>
        </div>

        <div style={{backgroundImage: `url(https://dummyimage.com/960x600/b9bad4/fff)`, height:"100%", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          {/* <Wrapper id="home" className="container flexSpaceCenter">
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
          </Wrapper> */}
        </div>
      </Carousel>      
    </>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 700px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// const LeftSide = styled.div`
//   width: 50%;
//   height: 100%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 2;
//     margin: 50px 0;
//     text-align: center;
//   }
//   @media (max-width: 560px) {
//     margin: 80px 0 50px 0;
//   }
// `;
// const HeaderP = styled.div`
//   max-width: 470px;
//   padding: 15px 0 50px 0;
//   line-height: 1.5rem;
//   @media (max-width: 960px) {
//     padding: 15px 0 50px 0;
//     text-align: center;
//     max-width: 100%;
//   }
// `;
// const BtnWrapper = styled.div`
//   max-width: 190px;
//   @media (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;
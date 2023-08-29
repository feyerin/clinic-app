import React from "react";
import banner from "../../assets/img/banner.jpg";
import banner2 from "../../assets/img/banner2.jpg";

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
    <div className="mt-24">
      <Carousel
        autoPlay={false}
        arrows={false}
        autoPlaySpeed={6000}
        infinite
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
      >
        <section className="bg-center bg-gray-700 bg-blend-multiply" style={{backgroundImage: `url(${banner})`, width: "100%"}}>
          <div className="px-16 mx-auto max-w-screen-2xl py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Klinik Prama Inggit garnasih</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl lg:pr-96"> fasilitas pelayanan kesehatan yang bersifat mandiri dalam menyelenggarakan pelayanan kesehatan perorangan bagi lansia</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Hubungi Kami
                  </a>
                  <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                      Learn more
                  </a>  
              </div>
          </div>
        </section>

        <section className="bg-center bg-gray-700 bg-blend-multiply" style={{backgroundImage: `url(${banner2})`, width: "100%"}}>
          <div className="px-4 mx-auto max-w-screen-2xl py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Klinik Prama Inggit garnasih</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl lg:pr-96"> fasilitas pelayanan kesehatan yang bersifat mandiri dalam menyelenggarakan pelayanan kesehatan perorangan bagi lansia</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Hubungi Kami
                  </a>
                  <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                      Learn more
                  </a>  
              </div>
          </div>
        </section>
      </Carousel>      
    </div>
  );
}
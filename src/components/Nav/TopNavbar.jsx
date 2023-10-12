import React, { useState, useEffect, Fragment } from 'react';
import styled from "styled-components";
import { Outlet } from 'react-router-dom';
import { Dialog, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  BuildingLibraryIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import LogoIcon from "../../assets/img/logo-clinic.png";


// const products = [
//   { name: 'Berita', description: 'Get a better understanding of your traffic', href: '/berita', icon: ChartPieIcon },
//   { name: 'Aktivitas', description: 'Speak directly to your customers', href: '/berita', icon: BuildingLibraryIcon },
// ]

const services = [
  { name: 'Poli Umum', description: 'Pelayanan Medis Dasar Menyeluruh, Pengobatan dasar umum/farmasi, Penyuluhan/konseling/edukasi, Ramah Lansia', href: '/poli-umum', icon: ChartPieIcon },
  { name: 'Fisioterapi + Hidroterapi', description: '', href: '/fisioterapi', icon: BuildingLibraryIcon },
  { name: 'Laboratorium ', description: '', href: '/laboratorium ', icon: FingerPrintIcon },
  { name: 'Instalasi Farmasi ', description: 'Pelayanan informasi obat, Konseling Obat, Home Pharmacy Care', href: '/farmasi', icon: SquaresPlusIcon },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

let menuArray = [false, false, false];

export default function TopNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menu, setMenu] = useState(menuArray);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const setMenuValue = (props) => {
    let newArr = [...menu];
    newArr[props] = !newArr[props];
    setMenu(newArr);
  }


  return (
    <>
      <Wrapper2 className="animate" style={y > 100 ? { visibility: "hidden" } : { height: "80px" }}>
          <div className="relative isolate flex gap-x-6 overflow-hidden bg-gray-200 px-6 py-2.5 sm:px-3.5">    
            <div className="lg:inline hidden">
                <a href="https://goo.gl/maps/y8h9x3VLGRfgf75n9" className=" px-3.5 py-1 text-sm font-semibold text-primary flex">
                 <MapPinIcon className="h-5 w-5"/> Jl. Flores No.6, Citarum, Kec. Bandung Wetan, Kota Bandung: +62811-2440-606
                </a>
            </div>
            <div className="flex flex-1 justify-end">
              <button type="button" className="mb-3">
                <a href="https://wa.me/628112440606" className="flex rounded-full bg-primary px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                  Book Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp ml-3 mt-0.5" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
                </a>
              </button>
            </div>
          </div>
      </Wrapper2>
      <Wrapper className="flexCenter animate bg-white" style={y > 100 ? { height: "60px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", top: 0 } : { height: "80px", top:"50px" }}>
        <nav className="lg:mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
          <div className="">
            <div className="flex">
              <a href="/" className="lg:pr-20">
                <span className="sr-only">Your Company</span>
                <img className="h-12 w-auto" src={LogoIcon} alt="" />
              </a>
            </div>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:pr-30">
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Beranda
            </a>
            <a href="/profil" className="text-sm font-semibold leading-6 text-gray-900">
              Tentang Kami
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Layanan Kami
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg">
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600 text-xs">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            {/* <Link to={"/jadwal"}>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Jadwal Dokter
              </a>
            </Link> */}
            {/*
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Berita & Aktivitas
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-40 max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
          
                </Popover.Panel>
              </Transition>
            </Popover>     */}
            <a href="/artikel" className="text-sm font-semibold leading-6 text-gray-900">
              Artikel Kesehatan
            </a>
            <a href="/berita" className="text-sm font-semibold leading-6 text-gray-900">
              Berita & Aktivitas
            </a>
            <a href="/sejabar" className="text-sm font-semibold leading-6 text-gray-900">
              Sejabar
            </a>
          </Popover.Group>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>

        {/* sidebar section */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel
            focus="true"
            className="fixed animate-fade-left animate-once animate-ease-in animate-duration-300 inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 z-[999] text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <a href="/" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Beranda
                  </a>
                  <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href="/profil"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Tentang Kami
                  </a>
                  <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                  <div>
                      <a onClick={()=>setMenuValue(0)} href="#" className="flex -mx-3 rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Layanan Kami
                        <span className="mt-0.5">
                            <svg id="icon1" className={`${menu[0] ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                      </a>
                      <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                      <div id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start flex-col w-full md:w-auto items-start pb-1`}>
                          <a href='/poli-umum' className="flex justify-start items-center space-x-6 hover:text-primary text-gray-700 rounded px-3 py-2 w-full">
                              <p className="text-base leading-4  ">Poli Umum</p>
                          </a>
                          <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                          <a href='/fisioterapi' className="flex justify-start items-center hover:text-primary text-gray-700 rounded px-3 py-2 w-full">
                              <p className="text-base leading-4  ">Fisioterapi + Hidroterapi</p>
                          </a>
                          <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                          <a href='/laboratorium ' className="flex justify-start items-center space-x-6 hover:text-primary text-gray-700 rounded px-3 py-2 w-full">
                              <p className="text-base leading-4  ">Laboratorium </p>
                          </a>
                          <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                          <a href='/farmasi' className="flex justify-start items-center space-x-6 hover:text-primary text-gray-700 rounded px-3 py-2 w-full">
                              <p className="text-base leading-4  ">Instalasi Farmasi </p>
                          </a>
                          <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                      </div>
                      <hr className={`${menu[0] ? 'flex' : 'hidden'} h-0.5 mx-auto bg-gray-200 border-0 rounded`}/>
                  </div>
                  {/* <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          Layanan
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                  <Link to={"/jadwal"}>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Jadwal Dokter
                    </a>
                  </Link>
                   */}
                    <a
                      href="/artikel"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Artikel Kesehatan
                    </a>
                    <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                    <a
                      href="/berita"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Berita & Aktivitas
                    </a>
                    <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      href="/sejabar"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Sejabar
                    </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

        <Outlet/>

        <div className="flex justify-end lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 lg:hidden" aria-hidden="true" />
          </button>
        </div>
        
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 900;
`;

const Wrapper2 = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
`;





import React from 'react';
import fasilitas4 from "../../../../assets/img/fasilitas/4.jpg";
import fasilitas5 from "../../../../assets/img/fasilitas/5.jpg";

// heroicons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const layanan = [
    { name: 'Poli Umum', description: 'Pelayanan Medis Dasar Menyeluruh, Pengobatan dasar umum/farmasi, Penyuluhan/konseling/edukasi, Ramah Lansia', href: '/poli-umum' },
    { name: 'Fisioterapi + Hidroterapi', description: '', href: '#' },
    { name: 'Labolatorium', description: '', href: '#' },
    { name: 'Instalasi Farmasi ', description: 'Pelayanan informasi obat, Konseling Obat, Home Pharmacy Care', href: '#'},
  ]
  

export default function PoliUmumContent() {
    const url = window.location.href;

    return (
        <div className="container mx-auto flex flex-wrap py-6 mb-6">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <span className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900">Layanan Poli Umum</span>
                        <div className="w-full h-1 mb-5">
                           <div className="bg-primary h-1" style={{width: "15%"}}></div>
                        </div>
                        <p className="text-[10px]">
                            By <span className="font-semibold text-primary">Klinik Inggit Garnasih</span>
                        </p>
                    </div>
            
                    <div className='p-6 bg-white'>
                        <p className="text-gray-700">Poli umum merupakan tempat pelayanan yang bertugas melakukan pemeriksaan pasien secara umum  atau menyeluruh, dengan melihat indikasi atau gejala – gejala yang di derita oleh pasien. </p>
                        
                        <p className="text-gray-700 mt-9">Poli umum dilayani oleh Dokter Umum dan Perawat yang bertugas melakukan anamnesa dan diagnosa awal terhadap pasien, sehingga dapat memberikan pelayanan yang sesuai standar dan dapat di pertanggungjawabkan dalam mendiagnosa setiap keluhan pada pasien yang berkunjung dipoli umum. </p>

                        <div className="grid grid-cols-2 gap-6 mt-7 pr-4">
                            <div>
                                <img src={fasilitas5} className="rounded h-56 animate-fade-right animate-once animate-delay-100 animate-ease-in" crossOrigin="anonymous"/>
                            </div>
                            <div>
                                <img src={fasilitas4} className="rounded h-56 animate-fade-right animate-once animate-delay-100 animate-ease-in" crossOrigin="anonymous"/>
                            </div>
                        </div>

                        <p className="text-gray-700 mt-9">Poli umum ini juga menangani pasien secara menyeluruh dari segala jenis umur dan dari semua kalangan, baik dari bayi, batita, balita, remaja, dewasa bahkan lanjut usia. </p>

                        <p className="text-gray-700 mt-9">Poli umum, dapat menerima rujukan dari luar klinik, baik rujukan rawat jalan, rujukan fisioterapi/hidroterapi maupun rujukan laboratorium. </p>

                       
                    </div>
                </article>
            </section>

            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-sm font-semibold mb-2">Layanan Lainnya :</p>
                    <div className="w-full bg-gray-200 h-1 mb-5">
                      <div className="bg-primary h-1" style={{width: "20%"}}></div>
                    </div>
                    <ul role="list" className="divide-y divide-gray-100">
                        {layanan.map((item) => (
                            <>
                                <li className="flex justify-between gap-x-6 py-5 hover:text-primary">
                                    <div className="flex min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">{item.name}</a>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <ChevronRightIcon className="h-6 w-6"/>
                                    </div>
                                </li>
                                <hr className="h-0.5 mx-auto bg-gray-200 border-0 rounded"/>
                            </>
                        ))}
                    </ul>

                </div> 

                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-sm font-semibold mb-2">Lokasi Layanan :</p>
                    <div className="w-full bg-gray-200 h-1 mb-5">
                      <div className="bg-primary h-1" style={{width: "20%"}}></div>
                    </div>
                    <p className="text-sm text-gray-700 font-bold mb-1">Kota Bandung </p>
                    <p className="text-sm text-gray-900 mb-1">Klinik Pratama Inggit Garnasih </p>
                    <a href="https://goo.gl/maps/y8h9x3VLGRfgf75n9" className="text-sm text-gray-900">Jl. Flores no.6 , Kel Citarum Kec Bandung Wetan.Kota Bandung</a>

                    <a href="https://wa.me/628112440606" className="w-full bg-primary text-white hover:text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp mr-3" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
                        Hubungi kami
                    </a>
                    
                    <div className="inline-flex shadow-sm mt-3 float-right" role="group">
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                        </button>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            <a href={`whatsapp://send?text=${encodeURIComponent(url)}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
                            </a>
                        </button>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </button>
                    </div>
                </div>       
            </aside>
        </div>
    )
}

  
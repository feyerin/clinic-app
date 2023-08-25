import React from 'react';
import alur from "../../../assets/img/alur.jpg";

export default function SejabarConten() {
    const url = window.location.href;

    return (
        <div className="container mx-auto flex flex-wrap py-6 mb-6">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <span href="#" className="lg:text-2xl md:text-2xl sm:text-xl font-bold hover:text-gray-700 mb-2">SEJABAR “Sehat Jagjag Babarengan”</span>
                        <div className="w-full bg-white h-1 mb-5">
                           <div className="bg-primary h-1" style={{width: "15%"}}></div>
                        </div>
                        <p className="text-[10px]">
                            By <span href="#" className="font-semibold text-primary">Klinik Inggit Garnasih</span>, Published on 25 Agustus 2023
                        </p>
                    </div>
                    <div className="hover:opacity-75 pl-6 pr-6 pb-6">
                        <img src={alur} className="rounded" crossOrigin="anonymous"/>
                    </div>
                    

                    <div className='p-6'>
                        <p className=" text-gray-500">Kartu Sejabar adalah Kartu Sehat yang diperuntukkan bagi Pensiunan ASN Provinsi Jawa Barat yang telah 
                        berkontribusi dalam pengelolaan Zakat di Badan Amil Zakat Nasional (BAZNAS) Provinsi Jawa Bara</p>

                        <p className="mt-16 font-semibold text-gray-900">Pelayanan Kartu Sejabar :</p>
                        <dl className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-black">1. Poli Umum </dt>
                            <dd className="mt-2 text-sm text-gray-500">Poli Umum merupakan salah satu pelayanan kedokteran berupa pemeriksaan kesehatan, pengobatan dan penyuluhan kepada pasien agar tidak terjadi penularan dan komplikasi penyakit. </dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">2. Pemeriksaan</dt>
                            <dd className="mt-2 text-sm text-gray-500">Pemeriksaan Gula darah, Asam urat dan Kolesterol. Pemeriksaan kimia darah untuk mengetahui kadar gula darah, asam urat dan kolesterol .</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">3. Fisioterapi</dt>
                            <dd className="mt-2 text-sm text-gray-500">Fisioterapi adalah tindakan rehabilitasi untuk menghindari atau meminimalkan keterbatasan fisik akibat cedera atau penyakit. Tindakan fisioterapi bisa dilakukan dengan berbagai cara, baik itu penanganan secara manual maupun menggunakan alat.</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">4. Hidroterapi</dt>
                            <dd className="mt-2 text-sm text-gray-500">Hidroterapi Merupakan metode fisioterapi yang bertujuan mengurangi nyeri, penguatan otot dengan menggunakan media air.</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">5. Obat Generik</dt>
                            <dd className="mt-2 text-sm text-gray-500">Obat generic yang diberikan kepada pasien untuk menunjang proses pengobatan dan penyembuhan pasien.</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">6. Hypnoterapi</dt>
                            <dd className="mt-2 text-sm text-gray-500">Hypnoterapi merupakan praktik yang bertujuan untuk membantu lebih dari puluhan permasalahan yang terjadi pada individu. menggunakan berbagai macam metode yang sangat efektif dalam membantu permasalahan pada seseorang, hypnoterapi bekerja dalam menghapus program-program negative yang bersarang pada otak manusia</dd>
                            </div>
                           
                        </dl>
                    </div>
                </article>
            </section>

            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-sm font-semibold mb-2">Mitra yang sudah kerjasama :</p>
                    <div className="w-full bg-gray-200 h-1 mb-5">
                      <div className="bg-primary h-1" style={{width: "20%"}}></div>
                    </div>
                    <p className="text-sm text-gray-500 font-bold mb-1">Kota Bandung </p>
                    <p className="text-sm text-gray-500 mb-1">Klinik Pratama Inggit Garnasih </p>
                    <a href="https://goo.gl/maps/y8h9x3VLGRfgf75n9" className="text-sm text-gray-500">Jl. Flores no.6 , Kel Citarum Kec Bandung Wetan.Kota Bandung</a>

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
  
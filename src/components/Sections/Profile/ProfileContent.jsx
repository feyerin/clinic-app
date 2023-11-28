import React from "react";
import fasilitas2 from "../../../assets/img/fasilitas/2.jpg";
import fasilitas9 from "../../../assets/img/fasilitas/9.jpg";
import fasilitas7 from "../../../assets/img/fasilitas/7.jpg";
import baznas from "../../../assets/img/clients/baznas.png";
import bjb from "../../../assets/img/clients/bank-bjb.png";
import stik from "../../../assets/img/clients/STIK.png";
import { MapPinIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function ProfileContent() {
  return (
    <div>
      <section className="bg-white">
          <div className="shadow items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className=" lg:grid lg:grid-cols-2 gap-16 ">
              <div className="text-gray-500 sm:text-md">
                  <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900">Tentang Kami</h2>
                  <p className="mb-10 text-gray-500">Klinik Pratama Inggit Garnasih ramah lansia adalah Klinik Pratama yang didirikan sebagai komitmen Pemerintah Jawa Barat terhadap keluarga Inggit Garnasih. Klinik Pratama Inggit Garnasih juga didirikan atas inisiasi Gubernur Jawa Barat periode 2018-2023 yakni Bapak Dr. H. Mochamad Ridwan Kamil S.T., M.U.D., Bersama Badan Amil Zakat (Baznas) Jawa Barat dan Bank bjb dalam mewujudkan Program Nyaah Ka Kolot (PNKK) sekaligus amanah Ibu Inggit Garnasih yang semasa hidupnya ingin mendirikan klinik untuk memuliakan para lansia.</p>
                  <p className="mt-10 text-gray-500">Klinik Pratama Inggit Garnasih berlokasi di Jalan Flores no. 6, Kel. Citarum, Kota Bandung. Adapun layanan yang dimiliki adalah Layanan Poli Umum, Laboratorium, Instalasi Farmasi, Hipnoterapi, (Vaksin Homecare,Sport Massage) dan tentunya Layanan Fisioterapi dan Hidroterapi sebagai layanan unggulan. Layanan kesehatan Klinik Inggit Garnasih akan terus dikembangkan untuk memenuhi kebutuhan kesehatan masyarakat.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                  <img className="w-full rounded-lg animate-fade-right animate-once animate-delay-100 animate-ease-in" src={fasilitas9} alt="office content 1"/>
                  <img className="mt-4 w-full lg:mt-10 rounded-lg animate-fade-right animate-once animate-delay-100 animate-ease-in" src={fasilitas2} alt="office content 2"/>
              </div>
            </div>

            <div className="mt-10">
              <div className="sm:text-md text-gray-500">
                <p className="mt-4">Mengusung tagline ramah lansia, Klinik Pratama Inggit Garnasih memberikan pelayanan yang memprioritaskan kenyamanan dan keamanan pasien lansia, dimulai saat kedatangan pasien, apabila pasien dalam kondisi sulit berjalan maka akan dibantu oleh petugas dengan menggunakan kursi roda. Tidak adanya tangga untuk memudahkan mobilitas pasien lansia, adanya pegangan besi dan karpet anti licin didalam toilet untuk meminimalisir kecelakaan karena terjatuh, serta tarif yang lebih terjangkau untuk pasien lansia. Pelayanan kami terhadap pasien lansia adalah seperti merawat orang tua sendiri. Namun demikian, Klinik Pratama Inggit Garnasih juga tetap melayani pasien semua umur dimulai dari anak-anak, remaja, dewasa pun bisa berobat dan melakukan fisioterapi di Klinik Inggit Garnasih.</p>                 
                <p className="mt-4">Kami mengedepankan pelayanan yang hangat dan ramah, suasana hommy, fasilitas kesehatan yang lengkap dan modern.</p>
              </div>
              
              {/* alamat */}
              <div className="bg-white w-full flex flex-col my-4 p-6 py-6 sm:py-16">     
                <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-6 sm:p-5 lg:flex-auto">
                    <div className="flex"> 
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lokasi Klinik</h3>
                      <div className="hover:text-primary pl-3">
                        <a href={`https://goo.gl/maps/y8h9x3VLGRfgf75n9`}> 
                          <button type="button" className="flex px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:border-primary rounded-lg hover:text-primary">
                            <MapPinIcon className="h-5 w-5 hover:text-primary"/>
                            Google Map
                            <ArrowLongRightIcon className="h-5 w-5 ml-1 hover:text-primary"/>
                          </button>
                          </a>
                        </div>
                      </div>
                      <div className="mt-6">
                        <span>
                          <a href="https://goo.gl/maps/y8h9x3VLGRfgf75n9" className="text-base leading-7 text-primary flex">                           
                            Jl. Flores No.6, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115 
                          </a>
                        </span>
                      </div>

                      <div className="md:grid md:grid-cols-2 md:col-span-6">
                        <div>
                          <div className="mt-6 text-base leading-7 text-gray-600"> Nomor Pendaftaran/Registrasi :</div>
                          <a href="https://wa.me/628112440606" className="text-base leading-7 text-gray-600">+62811-2440-606</a>
                        </div>

                        <div className="">
                          <div className="mt-6 text-base leading-7 text-gray-600"> Nomor Marketing/Kerjasama :</div>
                          <a href="https://wa.me/6282218770606" className="text-base leading-7 text-gray-600">+62822-1877-0606</a>
                        </div>
                      </div>     
                      
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                        <div className="h-px flex-auto bg-gray-100"></div>
                      </div>

                      <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Poli Umum
                      </li>

                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Fisioterapi + Hidroterapi
                      </li>

                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Laboratorium 
                      </li>

                      <li className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          Instalasi Farmasi
                      </li>
                      </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="rounded-2xl bg-gray-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
                      <img src={fasilitas7} alt="" className="rounded-2xl"/>
                      <div className="mx-auto">
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

              {/* supported by */}
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Support by</h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <img className="col-span-1 max-h-24 w-full object-contain lg:col-span-1" src={baznas} alt="Transistor" width={258} height={148}/>
                  <img className="col-span-1 max-h-24 w-full object-contain lg:col-span-1" src={bjb} alt="Reform" width={258} height={348}/>
                  <img className="col-span-1 max-h-24 w-full object-contain lg:col-span-1" src={stik} alt="Reform" width={258} height={348}/>
                </div>
              </div>
            </div>
          </div>
      </section> 
    </div>

  )
}
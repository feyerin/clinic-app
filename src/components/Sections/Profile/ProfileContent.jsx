import React from "react";
import fasilitas2 from "../../../assets/img/fasilitas/2.jpg";
import fasilitas6 from "../../../assets/img/fasilitas/6.jpg";
import fasilitas7 from "../../../assets/img/fasilitas/7.jpg";
import baznas from "../../../assets/img/clients/baznas.png";
import bjb from "../../../assets/img/clients/bank-bjb.png";

export default function ProfileContent() {
  return (
    <div>
      <section className="bg-white">
          <div className="shadow gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="text-gray-500 sm:text-md">
                  <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900">Tentang Klinik Inggit Garnasih</h2>
                  <p className="mb-10 text-gray-500">Klinik Pratama Inggit Garnasih adalah Klinik pratama yang resmi didirikan di jalan flores nomor 6, kota bandung. Klinik tersebut didirikan sebagai komitmen pemerintah provinsi jawa barat dalam merealisasikan wasiat dari ibu inggit garnasih khususnya dalam pelayanan terhadap lansia. </p>
                  <p className="mt-10 text-gray-500">Klinik pratama inggit garnasih juga merupakan inisiasi dari Badan Amil Zakat Nasional Provinsi Jawa Barat (disingkat BAZNAS JABAR) yang diamanahi oleh Gubernur Jawa Barat sekaligus amanat dari Ibu Inggit Garnasih untuk memuliakan para lansia (Program Nyaah Ka Kolot).</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                  <img className="w-full rounded-lg" src={fasilitas2} alt="office content 1"/>
                  <img className="mt-4 w-full lg:mt-10 rounded-lg" src={fasilitas6} alt="office content 2"/>
              </div>
          </div>
      </section>

      <div className="shadow items-center px-4 mx-auto max-w-screen-xl">
        <div className="sm:text-md">
          <div>
            <p className="mt-4 text-gray-500">
              Klinik Pratama Inggit Garnasih merupakan fasilitas pelayanan kesehatan yang bersifat mandiri dalam menyelenggarakan pelayanan kesehatan perorangan bagi lansia seiring dengan meningkatnya jumlah lansia dari tahun ke tahun dan merupakan bentuk keperdulian dalam meningkatkan derajat kesehatan khususnya lansia. 
            </p>
            <p className="mt-4 text-gray-500">
              Adapun fasilitas yang dimiliki adalah Layanan Poli Umum, Layanan Fisioterapi+Hidroterapi, Instalasi Farmasi, Laboratorium serta layanan-layanan lain yang akan terus dikembangkan. Fisioterapi merupakan layanan unggulan dari Klinik. 
            </p>
            <p className="mt-4 text-gray-500">
              Kami mengedepankan pelayanan ramah, prima, suasana hommy, fasilitas yang lengkap dan modern.
            </p>
            {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>
        
        {/* alamat */}
        <div className="bg-white w-full flex flex-col my-4 p-6 py-6 sm:py-16">
            <div className="mx-auto">
                <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-6 sm:p-5 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lokasi Klinik</h3>
                    <div className="mt-6">
                      <span><a href="https://goo.gl/maps/y8h9x3VLGRfgf75n9" className="text-base leading-7 text-gray-600"> Jl. Flores No.6, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115 </a></span>
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
                        Labolatorium
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
      </div>

      <div className="lightBg py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <img className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src={baznas} alt="Transistor" width={258} height={148}/>
              <img className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src={bjb} alt="Reform" width={258} height={348}/>
            </div>
          </div>
        </div>
    </div>

  )
}
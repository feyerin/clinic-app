import {React, useEffect, useState } from "react";

export default function JadwalContent() {
    const [items, setItems] = useState([
        {
            name: "bonnie brown",
            SIP: "34/B.15b/31.72.06/-1.77",
            image: "https://dummyimage.com/400x400/b9bad4/fff"
        },
        {
            name: "bonnie green",
            SIP: "34/B.15b/31.72.06/-1.78",
            image: "https://dummyimage.com/400x400/b9bad4/fff"
        },
        {
            name: "bonnie red",
            SIP: "34/B.15b/31.72.06/-1.79",
            image: "https://dummyimage.com/400x400/b9bad4/fff"
        },
    ]);

    const onDefineViewMode = () => {
        if (window.location.pathname === "/dokter-preview") {
             setItems([...items, JSON.parse(localStorage.getItem('dokterPreviewData'))]);
        }
      }

    useEffect(() => {
        onDefineViewMode();
    }, [])
    

  return (
    <>
      <div className="bg-white">
        <div className="">
            <div className="mx-auto max-w-2xl sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Jadwal Dokter</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>

                <div className="mx-auto mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {items.map((index) => (
                        <div key={index} className="w-full max-w-sm p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-6">
                            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl">
                                Fisioterapi
                            </h5>
                            <p className="text-sm font-normal text-gray-500">Jadwal Dokter yang tersedia.</p>
                            <ul className="my-4 space-y-3">
                                <li>
                                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Senin</span>
                                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">08:00 - 11:30</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Selasa</span>
                                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">8:00 - 11:30</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Rabu</span>
                                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">8:00 - 11:30</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Kamis</span>
                                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">8:00 - 11:30</span>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                    
                                    Kontak Admin untuk lebih lanjut !</a>
                            </div>
                        </div>
                    ))}           
                </div>
            </div>
        </div>   
      </div>
    </>

  )
}
import React, {useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

// heroicons
import { ChevronRightIcon, XCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Moment from "react-moment";

export default function BeritaIndexContent() {
    const [data, setData] = useState([]);
    const [recentPost, setRecentPost] = useState([]);

    const getListBerita = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/web/news/all`);
            setData(res.data.data);
            if (res.data.data.length > 5) {
                const recentBerita = res.data.data.slice(0, 5);
                setRecentPost(recentBerita);
            } else {
                setRecentPost(res.data.data);
            }
        
            console.log(recentPost)

        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
      getListBerita()
    }, [])
    
  return (
    <div className="">
        <div className="px-20 mx-auto flex flex-wrap py-6 mb-6">
            <section className="w-full md:w-3/4 flex flex-col my-4">
                <div className="bg-white py-12 shadow-md">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berita & Aktivitas</h2>
                            <div className="w-full bg-white h-1 mb-5">
                                <div className="bg-primary h-1" style={{width: "20%"}}></div>
                            </div>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {data.map((post, index) => (
                                <a href={`berita-content?id=${post.id}`} key={index} className="flex flex-col justify-between shadow-xl hover:shadow-2xl rounded-md ">
                                    <div className="pb-4">
                                        <img className="rounded-t-lg" crossOrigin="anonymous" src={`${process.env.REACT_APP_BASE_URL}/api/image/${post.news_image}`} alt="https://dummyimage.com/400x250/b9bad4/fff" />
                                    </div>                                 
                                    <div className="flex flex-row justify-between text-xs mt-2 px-2"> 
                                        <p><Moment format="DD MMMM YYYY">{post.createdAt}</Moment></p>
                                        <p className=" rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200">
                                        {"Kesehatan"}
                                        </p>
                                    </div>
                                    <div className="w-full bg-white h-1 mb-2 px-2">
                                        <div className="bg-primary h-1" style={{width: "20%"}}></div>
                                    </div>
                                    <div className="group relative px-2 pb-2">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 line-clamp-6 text-gray-900 group-hover:text-gray-600">
                                        <p className=" inset-0 line-clamp-3">
                                            {post.news_title}
                                        </p>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.news_content }}></p>
                                        <button className="text-primary rounded-lg text-sm py-1 inline-flex items-center mt-3" href="#">
                                            Baca Selengkapnya  <ArrowRightIcon className="h-5 w-5 mx-2"/>
                                        </button>
                                    </div>      
                                </a>
                            ))}
                        </div>
                        {data.length === 0 && (
                            <div className="mx-auto max-w-full lg:mx-0 text-center py-40">
                                <div className="flex justify-center animate-bounce animate-delay-500">
                                    <XCircleIcon className="h-14 w-14 justify-center"/>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berita tidak Ditemukan</h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600">
                                    Tunggu Berita menarik tentang kesehatan lainnya.
                                </p>
                        </div>
                        )}
                    </div>
                </div>
            </section>

            <aside className="w-full md:w-1/4 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-sm font-semibold mb-2">Berita Terbaru :</p>
                    <div className="w-full bg-gray-200 h-1 mb-5">
                        <div className="bg-primary h-1" style={{width: "20%"}}></div>
                    </div>
                    <ul role="list" className="divide-y divide-gray-100">
                        {recentPost.map((item) => (
                            <>
                                <li className="flex justify-between gap-x-6 py-5 hover:text-primary">
                                    <div className="flex min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <a href={`berita-content?id=${item.id}`} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary turncate overflow-hidden">{item.news_title}</a>
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
                
                </div>       
            </aside>
        </div>
    </div>

  )
}
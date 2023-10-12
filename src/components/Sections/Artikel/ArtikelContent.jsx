import React, { useEffect, useState } from 'react';
import axios from "axios";
import Moment from "react-moment";
import { useSearchParams } from "react-router-dom";

// heroicons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ArtikelContent() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState("");
    const [recentPost, setRecentPost] = useState([]);

    const getListArtikel = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/web/articles/all`);
            if (res.data.data.length > 5) {
                const firstArtikel = res.data.data.slice(0, 5);
                setRecentPost(firstArtikel);
            } else {
                setRecentPost(res.data.data);
            }
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
      getListArtikel()
    }, [])

    const getData = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/web/articles/detail/${searchParams.get('id')}`);
            setData(res.data.data);
            console.log(res.data.data)
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mx-auto flex flex-wrap py-6">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <article className="flex flex-col shadow my-4">
                    <div className="hover:opacity-75">
                        <img src={ `${process.env.REACT_APP_BASE_URL}/api/image/${data.article_image}`} className="rounded" crossOrigin="anonymous"/>
                    </div>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <span href="#" className="md:text-3xl text-md font-bold md:pb-2 pb-1">{ data.article_title}</span>
                        <p className="lg:pb-6 text-[10px] pb-5">
                            By <span href="#" className="font-semibold text-primary">{"Admin"}</span>, Published on <Moment format="DD MMMM YYYY">{data.created_at}</Moment>
                        </p>
                        <div className="text-gray-800 font-sans" dangerouslySetInnerHTML={{ __html: data.article_content }}></div>
                    </div>
                </article>
            </section>

            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-sm font-semibold mb-2">Artikel Terbaru :</p>
                    <div className="w-full bg-gray-200 h-1 mb-5">
                        <div className="bg-primary h-1" style={{width: "20%"}}></div>
                    </div>
                    <ul role="list" className="divide-y divide-gray-100">
                        {recentPost.map((item) => (
                            <>
                                <li className="flex justify-between gap-x-6 py-5 hover:text-primary">
                                    <div className="flex min-w-0 gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <a href={`artikel-content?id=${item.id}`} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary turncate overflow-hidden">{item.article_title}</a>
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
    )
  }
  
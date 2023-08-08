import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function ArtikelIndexContent() {
    const [data, setData] = useState([]);

    const getListArtikel = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/web/articles/all`);
            setData(res.data.data);
            console.log(res.data.data)
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
      getListArtikel()
    }, [])
    
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Artikel Kesehatan</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                
                { data !== [] &&
                data.map((item, index) => (
                    <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                        <div className=" items-center gap-x-4 text-xs ">
                            <div className="pb-4">
                                <img className="rounded-lg" crossOrigin="anonymous" src={`${process.env.REACT_APP_BASE_URL}/api/image/${item.article_image}`} alt="https://dummyimage.com/400x250/b9bad4/fff" />
                            </div>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <Link to={`/clinic-app/artikel-content?id=${item.id}`}>
                                    <a href="">
                                        <span className="absolute inset-0"></span>
                                        {item.article_title}
                                    </a>
                                </Link>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.article_content }}></p>
                            </div>
                            
                    </article>
                ))}
                
            </div>
        </div>
    </div>
    </>

  )
}
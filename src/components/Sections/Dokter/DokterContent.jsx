import { useEffect, useState } from "react";

export default function DokterContent({}) {
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
        if (window.location.pathname === "/clinic-app/dokter-preview") {
             setItems([...items, JSON.parse(localStorage.getItem('dokterPreviewData'))]);
        }
      }

    useEffect(() => {
        onDefineViewMode();
    }, [])
    

  return (
    <>
      <div className="bg-white">
        <div className=" bg-white">
            <div className="mx-auto max-w-2xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <section className="relative isolate overflow-hidden bg-white">
                    <div className="bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] absolute inset-0 -z-10 opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                        <h2 className=" text-gray-900 sm:text-4xl extraBold font40">Dokter Team</h2>
                        <figure className="mt-10">
                        <blockquote className="mx-auto mt-6 text-lg leading-8 text-gray-600">
                            <p>“Kami memiliki tim dari terapis-terapis Indonesia yang telah meraih pendidikan mereka dari berbagai negara, seperti Australia, Belanda, dan Amerika Serikat. Mereka memiliki kesamaan dalam faktor-faktor berikut:”</p>
                        </blockquote>
                        
                        </figure>
                    </div>
                </section>

                <div className="mx-auto mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {items.map((value, index) => (
                        <div key={index} className="group relative">   
                            <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src={value.image ? value.image : "https://dummyimage.com/400x400/b9bad4/fff"} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ value.name ? value.name : "Bonnie Green" }</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">SIP : { value.SIP ? value.SIP : "34/B.15b/31.72.06/-1.779" }</p>
                                </div>
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
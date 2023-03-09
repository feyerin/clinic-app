import { useEffect, useState } from "react";

export default function ArtikelContent() {
    const [items, setItems] = useState("");
    const parse = JSON.parse(localStorage.getItem('artikelPreviewData'))
    
    console.log(parse);

    const onDefineViewMode = () => {
        if (window.location.pathname === "/clinic-app/artikel/content/preview") {
             setItems(JSON.parse(localStorage.getItem('artikelPreviewData')));
        }
      }

    useEffect(() => {
        onDefineViewMode();
        
    }, []);

    console.log(items);


    return (
      <>
        <div class="container mx-auto flex flex-wrap py-6">
            <section class="w-full md:w-2/3 flex flex-col items-center px-3">

                <article class="flex flex-col shadow my-4">
                    <div class="hover:opacity-75">
                        <img src={items.thumbnail ? items.thumbnail : "https://source.unsplash.com/collection/1346951/1000x500?sig=1"} className="rounded"/>
                    </div>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <span class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</span>
                        <span href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{items.title ? items.title : "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet"}</span>
                        <p class="text-sm pb-3">
                            By <span href="#" class="font-semibold hover:text-gray-800">{items.writer ? items.writer : "David Grzyb"}</span>, Published on April 25th, 2020
                        </p>
                        {
                            items.content ? (<div className="pb-6" dangerouslySetInnerHTML={{ __html: items.content }}></div>
                            ) : (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</div>)
                        }
                    </div>
                </article>

            </section>

            <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">About Us</p>
                    <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                    <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know us
                    </a>
                </div>

                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">Recent Post</p>
                    
                    <ul class="max-w-md divide-y divide-gray-700">
                        <li class="pb-3 sm:pb-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <img class="w-20 h-20 rounded" src="https://images.unsplash.com/photo-1677668803136-3ef5a89a613d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODMzMzY1OA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neil image"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-md font-semibold text-gray-900 truncate ">
                                        Our first office
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Over the past year, Volosoft has undergone changes.
                                    </p>
                                    <p class="text-xs pb-3 text-gray-400">
                                        By <span href="#" class="font-semibold">David Grzyb</span>, April 25th, 2020
                                    </p>
                                </div>
                                
                            </div>
                        </li>
                        <li class="pb-3 sm:pb-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <img class="w-20 h-20 rounded" src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="image"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-md font-semibold text-gray-900 truncate ">
                                        Our first office
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Over the past year, Volosoft has undergone changes.
                                    </p>
                                    <p class="text-xs pb-3 text-gray-400">
                                        By <span href="#" class="font-semibold">David Grzyb</span>, April 25th, 2020
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pb-3 sm:pb-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <img class="w-20 h-20 rounded" src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" alt="image"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-md font-semibold text-gray-900 truncate ">
                                        Our first office
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Over the past year, Volosoft has undergone changes.
                                    </p>
                                    <p class="text-xs pb-3 text-gray-400">
                                        By <span href="#" class="font-semibold">David Grzyb</span>, April 25th, 2020
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pb-3 sm:pb-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <img class="w-20 h-20 rounded" src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" alt="image"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-md font-semibold text-gray-900 truncate ">
                                        Our first office
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        Over the past year, Volosoft has undergone changes.
                                    </p>
                                    <p class="text-xs pb-3 text-gray-400">
                                        By <span href="#" class="font-semibold">David Grzyb</span>, April 25th, 2020
                                    </p>
                                </div>
                            </div>
                        </li>
                        
                        
                    </ul>

                </div>
            </aside>

        </div>
      </>
    )
  }
  
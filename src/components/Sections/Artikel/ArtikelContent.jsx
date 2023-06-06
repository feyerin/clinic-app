import { useEffect, useState } from "react";

export default function ArtikelContent() {
    const [items, setItems] = useState("");
    const parse = JSON.parse(localStorage.getItem('artikelPreviewData'))
    
    console.log(parse);

    const onDefineViewMode = () => {
        if (window.location.pathname === "/clinic-app/artikel-content-preview") {
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

                    
                    <div class="inline-flex shadow-sm mt-3 float-right" role="group">
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </button>
                    </div>
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
  
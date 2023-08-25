import React from "react"

export default function Layout({Content, Title}) {
  return (
    <>
      <div className="bg-white">
        <nav className=" mt-20 xl:pl-48 lg:pl-5 md:pl-4 sm:pl-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-100">
          <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-3 sm:mb-0">
            <li>
              <div className="flex items-center">
                <a href="/" className="ml-1 text-sm font-medium text-primary hover:text-gray-400 md:ml-2">Home</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <a href="/profile" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-primary">{Title}</a>
              </div>
            </li>
          </ol>
        </nav>
        {Content}
      </div>

      {/* <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[32.375rem]" viewBox="0 0 1155 678">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9089FC" />
                <stop offset="1" stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div> */}
    </>

  )
}
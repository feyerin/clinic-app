const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function ProfileContent() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selamat Datang di Physio</h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sagittis ex eu molestie. Nam leo odio, euismod eu pretium eu, feugiat ac quam. Donec laoreet lectus at orci efficitur imperdiet. Integer velit sem, euismod eu tellus posuere, suscipit consequat nulla. Duis ante lectus, blandit eget velit nec, fringilla suscipit lorem. Praesent in neque ligula. Ut at eros vel enim ullamcorper tincidunt. Praesent quis pulvinar sapien, at vestibulum ex. Nunc id lacinia nunc. Nunc vehicula porta turpis, non tristique mauris eleifend ac.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://dummyimage.com/400x400/000/fff"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://dummyimage.com/400x400/000/fff"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://dummyimage.com/400x400/000/fff"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://dummyimage.com/400x400/000/fff"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
        
        {/* alamat */}
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lokasi Klinik</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Cabang Tebet</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.</p>
                    <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                    </div>
                    <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        Private forum access
                    </li>

                    <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        Member resources
                    </li>

                    <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        Entry to annual conference
                    </li>

                    <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        Official member t-shirt
                    </li>
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
                    <img src="https://dummyimage.com/400x400/b9bad4/fff" alt="" className="rounded-2xl"/>
                    <div className="mx-auto">
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="flexCenter bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tim Dokter</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Kami memiliki tim dari terapis-terapis Indonesia yang telah meraih pendidikan mereka dari berbagai negara, seperti Australia, Belanda, dan Amerika Serikat. Mereka memiliki kesamaan dalam faktor-faktor berikut:</p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <div className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img src="https://dummyimage.com/400x400/000/fff" alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-full"/>
                        </div>
                        <div className="mt-4 flex flex-col items-center pb-10">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 ">SIP : 34/B.15b/31.72.06/-1.779</span>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img src="https://dummyimage.com/400x400/000/fff" alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-full"/>
                        </div>
                        <div className="mt-4 flex flex-col items-center pb-10">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 ">SIP : 34/B.15b/31.72.06/-1.779</span>
                        </div>
                    </div>
                    <div className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img src="https://dummyimage.com/400x400/000/fff" alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-full"/>
                        </div>
                        <div className="mt-4 flex flex-col items-center pb-10">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 ">SIP : 34/B.15b/31.72.06/-1.779</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     
      </div>
    </>

  )
}
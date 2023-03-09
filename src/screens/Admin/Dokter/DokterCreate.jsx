import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import Avatar from '../../../assets/svg/Avatar';
import convertBase64 from '../../../services/uploadImage';

export default function DokterCreate() {
    const [image, setImage] = useState();
    const [obj, setObj] = useState({
        image: "",
        name: "",
        SIP: ""
    });

    const onChangeInput = (event) => {
		setObj({
			...obj,
			[event.target.name]: event.target.value,
		});
	};

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64);
        setObj({
            ...obj,
            ["image"]: base64,
        })
    }

    useEffect(() => {
        localStorage.setItem('dokterPreviewData', JSON.stringify(obj));
    }, [obj]);

  return (
    <>

      <div className="min-w-0 flex-1 pb-5">
        <div className="flex">
            <span className="font-bold"><ArrowLeft/></span>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
             Profil Dokter 
            </h2>
        </div>  
        
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                </a>
                </li>
                <li>
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Dokter</a>
                </div>
                </li>
                <li aria-current="page">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Create</span>
                </div>
                </li>
            </ol>
        </nav>
      </div>

      <div>
        <div className="">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <div className="mt-2 flex items-center">
                            <span className="">
                                {image ? <img src={`${image}`} height={300} width={300}/>: <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100"><Avatar/></span>}
                            </span>

                            <input
                                id="originalFileName"
                                type="file"
                                inputProps={{ accept: 'image/*' }}
                                required
                                label="Document"
                                name="originalFileName"
                                onChange={e => handleFileRead(e)}
                                size="small"
                                variant="standard"
                                className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="name"
                            id=""
                            className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 lg:w-1/2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            onChange={(e) => onChangeInput(e)}
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900 ">
                            SIP
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="SIP"
                                id=""
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 lg:w-1/2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                onChange={(e) => onChangeInput(e)}
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Publish
                        </label>
                        <div className="mt-2">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <Link 
                        to={`/clinic-app/dokter-preview`}
                        target="_blank"
                    >
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 mr-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                            >
                            Preview
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Save
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
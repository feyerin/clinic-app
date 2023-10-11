import React, {useState, useEffect} from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import logo from "../../assets/img/logo klinik IG_landscape.png";

export default function AdminLayout() {
    const navigate = useNavigate();
    // let menuArray = [true, false, false];
    // const [menu, setMenu] = useState(menuArray);
    const [show, setShow] = useState(true);

    // const setMenuValue = (props) => {
    //     let newArr = [...menu];
    //     newArr[props] = !newArr[props];
    //     setMenu(newArr);
    // }

    const onSubmit = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/logout`, {
                admin_id: 1,
            },
            {
                auth: {
                    username: 'test',
                    password: 'test'
                }
            });
            localStorage.clear();
            toast.success(`Logout Berhasil`);
            navigate("/admin/login");
          } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`)
        }
    }  

    useEffect(() => {
		const login = localStorage.getItem("isAuthenticated");
        if (login !== "true") {
            navigate("/admin/login");
        }
	}, []);

    return (
        <div>
            <div className="sticky top-0 bg-white xl:hidden flex justify-between w-full h-14 p-6 shadow-md z-50">
                <div className="flex justify-between items-center space-x-3">
                    <img className="p-[10%]" height={150} width={150} src={logo} alt="client logo" />

                </div>
                <div aria-label="toggler" className="sm:flex justify-between items-center space-x-3 md:hidden">
                    <button aria-label="open" id="open" onClick={()=>setShow(true)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                

                    </button>
                    <button aria-label="close" id="close" onClick={()=>setShow(false)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>

                    </button>
                </div>
            </div>

            <aside id="default-sidebar" className={`${show ? 'translate-x-0' : '-translate-x-full'} shadow-md fixed z-40 h-full -translate-x-full sm:translate-x-0  transform  xl:translate-x-0  ease-in-out transition duration-500 bg-white flex-col flex justify-start items-start w-full sm:w-64`} aria-label="Sidebar">
                <div id="Main" className="flex justify-start items-start w-full pt-8 ">  
                                  
                    <div className="mt-0 justify-start items-center pl-4 w-full border-gray-600 pb-5 ">
                        <ul className="space-y-2">
                            {/* <li>
                                <a href="#" className="flex items-center p-2 focus:mr-3 hover:mr-3 text-base font-normal text-gray-600 rounded-lg focus:bg-gray-700 focus:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white">
                                    <svg width={24} height={24} className="fill-stroke" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li> */}
                            {/* <li>
                                <a onClick={()=>setMenuValue(0)} href="#" className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg focus:bg-gray-700 focus:mr-3 hover:mr-3 focus:text-white hover:bg-gray-600 hover:text-white">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Manage</span>
                                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800  rounded-full dark:text-gray-300">
                                        <svg id="icon1" className={`${menu[0] ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                                <div id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start flex-col w-full md:w-auto items-start pb-1`}>
                                    <Link to={"/admin/berita"}>
                                        <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-base leading-4  ">Berita & Aktivitas</p>
                                        </button>
                                    </Link>
                                    <Link to={"/admin/"}>
                                        <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                            </svg>

                                            <p className="text-base leading-4  ">Jadwal</p>
                                        </button>
                                    </Link>
                                </div>
                            </li> */}
                            <li>
                                <Link to={"/admin/berita"}>
                                    <div className="flex items-center p-2 focus:mr-3 hover:mr-3 text-base font-normal text-gray-600 rounded-lg focus:bg-gray-700 focus:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-900">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                        </svg>
                       
                                         <span className="flex-1 ml-3 whitespace-nowrap">Berita & Aktivitas</span>
                                        {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                                    </div>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to={"/admin/"}>
                                    <div className="flex items-center p-2 focus:mr-3 hover:mr-3 text-base font-normal text-gray-600 rounded-lg focus:bg-gray-700 focus:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-gray-900">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Jadwal</span>
                                    </div>
                                </Link>
                            </li> */}
                            <li>
                                <Link to={"/admin/artikel"}>
                                    <div className="flex items-center p-2 focus:mr-3 hover:mr-3 text-base font-normal text-gray-600 rounded-lg focus:bg-gray-700 focus:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Artikel</span>
                                        {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div onClick={() => onSubmit()} className="flex items-center p-2 focus:mr-3 hover:mr-3 text-base font-normal text-gray-600 rounded-lg focus:bg-gray-700 focus:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>  
                </div>
            </aside>

            <div className="p-4 sm:ml-64 bg-gray-100 min-h-screen">
                <Outlet/>
            </div>

            <ToastContainer autoClose={3000} />
        </div>
    );
}

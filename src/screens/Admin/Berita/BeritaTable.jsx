import { React, useState, useEffect } from 'react'
import Pagination from '../../../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import Select from '../../../components/Select';
import {
    PencilIcon,
    TrashIcon,
    PencilSquareIcon,
  } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

export default function NewsTable() {
    const [page, setPage] = useState(1);
	const [size, setSize] = useState(10);
	const [numberEntries, setNumberEntries] = useState(10);
    const [data, setData] = useState([]);

    const head = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Created at',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Created By',
            dataIndex: 'created_by',
            key: 'created_by',
        },
        {
            title: 'Publish',
            dataIndex: 'publish',
            key: 'publish',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];

    const handlerPagination = (event) => {
		const newPage = event.selected + 1;
		setPage(newPage);
		setSize(numberEntries);
	};

    const getListArtikel = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/article/all`, {
                auth: {
                    username: 'test',
                    password: 'test'
                }
            });
          setData(res.data.data)
        } catch (error) {
          console.log(error);
        }
    }

    const onDelete = async (id) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/admin/news/delete/${id}`, {
                auth: {
                    username: 'test',
                    password: 'test'
                }
            });
        toast.success("Artikel Berhasil Dihapus!");
        getListArtikel();
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        getListArtikel();
    }, [])    

  return (
    <div>
        <div className="flex">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Berita & Aktivitas
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                </div>
            </div>
            <div className="lg:mt-0 lg:ml-4">
                <Link to={"/clinic-app/admin/artikel/create"}>
                    <span className="sm:ml-3">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                            New
                        </button>
                    </span>
                </Link>
            </div>
        </div>
        <div className="md:flex items-center justify-between pb-4">
            <div>
                <Select/>
            </div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-gray-300 focus:border-gray-300" placeholder="Search for items"/>
            </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-400 border-collapse border border-slate-500">
                <thead className="text-xs uppercase bg-gray-50 text-gray-400">
                    <tr>
                        {head.map((value, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {value.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='border-b border-gray-800'>
                    { data !== [] && 
                        data.map((value, index) => (
                            <tr key={index} className="bg-white border-b border-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-b border-gray-800">
                                    {value.article_title}
                                </th>
                                <td className="px-6 py-4 border-b border-gray-800">
                                    <Moment format="DD MMMM YYYY hh:mm:ss">{value.created_at}</Moment>
                                    
                                </td>
                                <td className="px-6 py-4 border-b border-gray-800">
                                    {}
                                </td>
                                <td className="px-6 py-4">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <a href="#" className="font-medium text-white bg-blue-600 rounded-full text-center p-1">
                                        <PencilSquareIcon className="h-5 w-5 hover:text-white" aria-hidden="false" />
                                    </a>
                                    <button type='button' onClick={() => onDelete(value.id)} className="font-medium text-white bg-red-600 rounded-full text-center p-1">
                                        <TrashIcon className="h-5 w-5 hover:text-white" aria-hidden="false" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

        <ToastContainer autoClose={3000} />
        <Pagination pageCount={10} changeHandlerPagination={handlerPagination}/>
        
    </div>
  )
}
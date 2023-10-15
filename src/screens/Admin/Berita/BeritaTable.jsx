import { React, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {
    PencilIcon,
    TrashIcon,
    PencilSquareIcon,
  } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

export default function BeritaTable() {
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

    const getListBerita = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/news/all`, {
                auth: {
                    username: 'admin',
                    password: 'adminklinik2023'
                }
            });
          setData(res.data.data)
        } catch (error) {
          console.log(error);
        }
    }

    const onDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/admin/news/delete/${id}`, {
                auth: {
                    username: 'admin',
                    password: 'adminklinik2023'
                }
            });
        toast.success("Berita Berhasil Dihapus!");
        getListBerita();
        } catch (error) {
          console.log(error);
        }
    }


    useEffect(() => {
        getListBerita();
    }, []);
      

  return (
    <div>
        <div className="flex">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Berita management
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                </div>
            </div>
            <div className="lg:mt-0 lg:ml-4">
                <Link to={"/admin/berita/create"}>
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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left text-gray-400 border-collapse border border-slate-500">
                <thead className="text-xs uppercase bg-gray-50 text-gray-400">
                    <tr> 
                        {head.map((value, index) => (
                            <th key={index} scope="col" colSpan={1} className="px-6 py-3" style={{width: '50px'}}>
                                {value.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='border-b border-gray-800'>
                    { data.length > 0 && 
                        data.map((value, index) => (
                            <tr key={index} className="bg-white border-b border-gray-800">
                                <td className="px-6 py-4 truncate" style={{width: '50px'}}>
                                    {value.news_title}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-800">
                                    <Moment format="DD MMMM YYYY hh:mm:ss">{value.created_at}</Moment>
                                </td>
                                <td className="px-6 py-4">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <Link to={`/admin/berita/edit?id=${value.id}`} >   
                                        <div className="font-medium text-white bg-blue-600 rounded-full text-center p-1">
                                            <PencilSquareIcon className="h-5 w-5 hover:text-white" aria-hidden="false" />
                                        </div>
                                    </Link>
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
    </div>
  )
}
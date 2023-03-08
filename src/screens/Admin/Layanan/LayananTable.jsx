import { React, useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Pagination from '../../../components/Pagination';
import Select from '../../../components/Select';
import {
    PencilIcon,
    TrashIcon,
    PencilSquareIcon,
  } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function LayananTable() {
    const [page, setPage] = useState(1);
	const [size, setSize] = useState(10);
	const [numberEntries, setNumberEntries] = useState(10);

    const body = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },{
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        
    ];

    const head = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
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

  return (

    <div>
        <div className="flex">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Layanan management
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                </div>
            </div>
            <div className="lg:mt-0 lg:ml-4">
                <span className="sm:ml-3">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    New
                </button>
                </span>

                {/* Dropdown */}
                <Menu as="div" className="relative ml-3 sm:hidden">
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                Edit
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                                View
                            </a>
                            )}
                        </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
        <div className="md:flex items-center justify-between pb-4">
            <div>
                <Select/>
            </div>
            <label for="table-search" className="sr-only">Search</label>
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
                    {body.map((value, index) => (
                        <tr key={index} className="bg-white border-b border-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-b border-gray-800">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4 border-b border-gray-800">
                                Silver
                            </td>
                            <td className="px-6 py-4 border-b border-gray-800">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
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
                                <a href="#" className="font-medium text-white bg-red-600 rounded-full text-center p-1">
                                    <TrashIcon className="h-5 w-5 hover:text-white" aria-hidden="false" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
    <Pagination pageCount={10} changeHandlerPagination={handlerPagination}/>
        
    </div>
  )
}
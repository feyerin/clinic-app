import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react';
import { Editor } from 'react-draft-wysiwyg';
import toolbar from '../../../data/richEditorToolbar';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function ArtikelCreate() {

  return (
    <>
    <div>
        <div className="">
          <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST" className=" mt-16 sm:mt-20">
                    <div className="bg-white px-4 py-5  sm:p-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2  max-w-xl">
                            <div>
                                <label className="block text-sm font-semibold leading-6 text-gray-900">
                                    Date
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold leading-6 text-gray-900">
                                    Writer
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        autoComplete=""
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2.5">
                                <input
                                type="text"
                                name=""
                                id=""
                                autoComplete=""
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>
                            <div className="sm:col-span-2 border-2 border-black">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5 border-2 border-black">
                                <Editor
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    mention={{
                                        separator: " ",
                                        trigger: "@",
                                        suggestions: [
                                        { text: "APPLE", value: "apple" },
                                        { text: "BANANA", value: "banana", url: "banana" },
                                        { text: "CHERRY", value: "cherry", url: "cherry" },
                                        { text: "DURIAN", value: "durian", url: "durian" },
                                        { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                                        { text: "FIG", value: "fig", url: "fig" },
                                        { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
                                        { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
                                        ]
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <Link 
                        to={`/clinic-app/dokter/preview`}
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
                </form>
          </div>
        </div>
      </div>
    
    </>
  )
}
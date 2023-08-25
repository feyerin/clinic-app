import { React, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import convertBase64 from '../../../services/uploadImage';
import axios from 'axios';
import ReactQuill from 'react-quill';  
import 'react-quill/dist/quill.snow.css';

export default function ArtikelEdit() {
    const quillRef = useRef();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [value, setValue] = useState("");
    const [image, setImage] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [obj, setObj] = useState({
        date: "",
        writer: "",
        thumbnail: "",
        title: "",
        content: ""
    });

    const onChangeInput = (event) => {
		setObj({
			...obj,
			[event.target.name]: event.target.value,
		});
	};

    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        setImage(file);
        setObj({
            ...obj,
            [event.target.name]: file,
        })
    }
  
    const imageHandler = () => {
        const editor = quillRef.current.getEditor();
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
        const file = input.files[0];
        if (/^image\//.test(file.type)) {
            const base64 = await convertBase64(file)
            editor.insertEmbed(editor.getSelection(), "image", base64);
        } else {
            console.log("You could only upload images.")
        }
        };
    }

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', "strike"],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['image', "link",],
                [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'align': [] }],
                ['blockquote', 'code-block'],
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],  

                ['clean']  
            ],
            handlers: {
                image: imageHandler
            }
        },
    }), []);

    const getData = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/article/detail/${searchParams.get('id')}`, {
                auth: {
                    username: 'test',
                    password: 'test'
                }
            });
            const obj = {
                date: res.data.data.created_at,
                writer: "",
                thumbnail: res.data.data.article_image,
                title: res.data.data.article_title,
                content: ""
            }
            setObj(obj);
            setValue(res.data.data.article_content);
        } catch (error) {
          console.log(error);
        }
    }

    const fetchImage = async () => {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/image/${obj.thumbnail}`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setThumbnail(imageObjectURL);
    };

    const onSave = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("articleTitle", obj.title);
        formData.append("articleImage", obj.thumbnail);
        formData.append("articleContent",  obj.content);
        
        axios({
            method: "put",
            url: `${process.env.REACT_APP_BASE_URL}/api/admin/article/update/${searchParams.get('id')}`,
            data: formData,
            auth: {username: 'test', password: 'test'},
            headers: { "Content-Type": "multipart/form-data" },
            })
            .then(() => {
                toast.success("artikel successfuly updated");
                setTimeout(() => {
                    navigate("/admin/artikel")
                })
            })
            .catch(function (error) {
            console.log(error);
        });
    
    }
    
    const onClickPreview = (url) => {
        localStorage.setItem('artikelPreviewData', JSON.stringify(obj));
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    useEffect(() => {
        setObj({
            ...obj,
            ["content"]: value,
        })
    }, [value])
    
    useEffect(() => {
        fetchImage();
    }, [obj]);

    useEffect(() => {
        getData();
    }, [])
    
  return (
    <>
        <div className="">
            <div className="min-w-0 flex-1">           
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
                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Artikel</a>
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

            <div className="mt-5 md:col-span-2">
                <form onSubmit={onSave}>
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2  max-w-xl">
                            <div>
                                <label className="block text-sm font-semibold leading-6 text-gray-900">
                                    Date
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        onChange={(e) => onChangeInput(e)}
                                        type="date"
                                        name="date"
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
                                        onChange={(e) => onChangeInput(e)}
                                        type="text"
                                        name="writer"
                                        id=""
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                    Thumbnail
                            </label>
                            <span className="">
                                {image ? <img src={URL.createObjectURL(image)} height={300} width={300} alt='thumbnail'/> : <img src={thumbnail} height={300} width={300} alt='thumbnail'/>}
                            </span>
                            <input
                                className="relative mt-2.5 block w-full flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                                type="file" 
                                name="thumbnail"
                                onChange={e => handleFileRead(e)} 
                            />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2.5">
                                    <input
                                    type="text"
                                    name="title"
                                    value={obj.title}
                                    onChange={(e) => onChangeInput(e)}
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 border-2 border-black">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">
                                    Content
                                </label>
                                <div className="mt-2.5 border-2 border-black">
                                    <ReactQuill theme="snow" ref={quillRef} value={value} modules={modules} onChange={setValue} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            onClick={() => onClickPreview("/artikel-content-preview")}
                            type="button"
                            className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 mr-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                            >
                            Preview
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer autoClose={3000} />
        </div>
    
    </>
  )
}
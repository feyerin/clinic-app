import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../assets/img/logo klinik IG_landscape.png"

export default function Login() {
    const navigate = useNavigate();
  
    const [formAuthLogin, setFormAuthLogin] = useState({
		username: "",
		password: "",
	});
  
    const changeTextInput = (event) => {
		setFormAuthLogin({
			...formAuthLogin,
			[event.target.name]: event.target.value,
		});
	};

    const onSubmit = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
                username: formAuthLogin.username,
                password: formAuthLogin.password
            });
            sessionStorage.setItem("isAuthenticated", "true");
            toast.success(`Login Berhasil`);
            navigate("/admin/berita");
          } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`)
        }
    }  

    useEffect(() => {
		const login = sessionStorage.getItem("isAuthenticated");
        if (login === "true") {
            navigate("/admin/berita");
        }
	}, []);
  
  return (
    <div className="bg-no-repeat bg-cover bg-center relative"><div className="absolute bg-gradient-to-b from-indigo-500 to-blue-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col">
                <img src={logo} className="mb-3" alt='thumbnail'/>
            </div>
            </div>
            <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                    <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                    <p className="text-gray-500">Please sign in to your account.</p>
                </div>
                <form onSubmit={onSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                        <input 
                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400" 
                            placeholder="Enter your username"
                            name="username"
                            onChange={(e) => changeTextInput(e)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                        Password
                        </label>
                        <input className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => changeTextInput(e)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                            Remember me
                        </label>
                        </div>
                        <div className="text-sm">
                        {/* <a href="#" className="text-indigo-400 hover:text-blue-500">
                            Forgot your password?
                        </a> */}
                        </div>
                    </div>
                    <div>
                        <button type="button" onClick={onSubmit} className="w-full flex justify-center bg-indigo-400  hover:bg-indigo-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                        Sign in
                        </button>
                    </div>
                </form>
                <div className="pt-5 text-center text-gray-400 text-xs">
                    <span>
                    Copyright © 2021-2022
                    </span>
                </div>
            </div>
            </div>
        </div>

        <ToastContainer autoClose={3000} />
    </div>
  )
}
import axios from "axios";

const axiosInterceptors = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInterceptors.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => Promise.reject(error)
);

axiosInterceptors.interceptors.response.use(
	(config) => config,
	(error) => {
		if (
			error.response.status === 401 ||
			error.response.data.message === "user has been log out, please log in"
		) {
			const userId = localStorage.getItem("user_id");
			axios
				.put(`${process.env.REACT_APP_API_BASE_URL_DEVEL}/auth/logout`, {
					uuid: userId,
				})
				.then(() => {
					alert("Sesi anda telah berakhir, silahkan login kembali");
					localStorage.clear();
					localStorage.removeItem("persist:root");
					window.location.href = "/login";
				})
				.catch((error) => {
					new Error(error.response.data.message);
				});
			localStorage.clear();
			localStorage.removeItem("persist:root");
			window.location.href = "/login";
		}

		return Promise.reject(error);
	}
);

export default axiosInterceptors;

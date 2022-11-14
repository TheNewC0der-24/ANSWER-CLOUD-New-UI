import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
)
// Data service

import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api"

const getPublicContent = () => {
    return axios.get(`${API_URL}/all`).then(res=>res.data)
};

const getUserBoard = () => {
    return axios.get(`${API_URL}/user`, { headers: authHeader() }).then(res => res.data )
};

const getModeratorBoard = () => {
    return axios.get(`${API_URL}/mod`, { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(`${API_URL}/admin`, { headers: authHeader() });
};

const userServices = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}

export default userServices
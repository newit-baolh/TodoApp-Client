import axios from "axios";

const baseURL = "http://localhost:5000/api"

export const getList = axios.get(`${baseURL}/list`).then(res=> res.data)
export const createTask = (data) => axios.post(`${baseURL}/add`, data)

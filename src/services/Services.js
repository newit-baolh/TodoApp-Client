import axios from "axios";

const baseURL = "http://localhost:5000/api"

export const getList = axios.get(`${baseURL}/list`).then(res=> res.data)
export const createTask = (data) => axios.post(`${baseURL}/add`, data)
export const deleteTask = (item)=> axios.delete(`${baseURL}/delete/${item.id}`)
export const updateTask = (item) => axios.put(`${baseURL}/update/${item.id}`,{name: item.name, status: item.status, description: item.description})

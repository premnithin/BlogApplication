import axios from "axios";

export const api  = axios.create({
    baseURL:"http://localhost:5000/api"
})

export const getPosts = async  ()=>{
    const res = await api.get('/blog')
    return res.data
}
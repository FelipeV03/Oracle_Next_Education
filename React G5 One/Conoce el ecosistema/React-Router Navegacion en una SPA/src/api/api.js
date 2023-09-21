import axios from "axios";

export const API = axios.create({
    baseURL: 'http://localhost:5000'
});

export const busca = async (url, setData) => {
    const res = await API.get(url);
    // console.log(res.data);
    setData(res.data);
}
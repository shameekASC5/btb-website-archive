import axios from "axios";

const BASE_URL = "https://btb-website-api.onrender.com/api/v1/"
export const HTTP = {
    get: async (url: string) => {
        return await axios.get(BASE_URL+url);
    },
    post: async (url: string, data: any) => {
        return await axios.post(BASE_URL+url, data);
    }
}
import axios from "axios";


const axiosIntance = axios.create(
    {
        baseURL: 'http://localhost:9000'
    }
)

export default axiosIntance;
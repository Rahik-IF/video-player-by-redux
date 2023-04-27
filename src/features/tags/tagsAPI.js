import axiosIntance from "../../utils/axios"

export const getTags = async()=>{
    const response = await axiosIntance.get('/tags');
    return response.data;
} 


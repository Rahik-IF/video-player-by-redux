import axiosIntance from "../../utils/axios"

export const getVideo = async(id)=>{
    const response = await axiosIntance.get(`/videos/${id}`);
    return response.data;
}


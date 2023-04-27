import axiosIntance from "../../utils/axios"

export const getRelatedVideos = async({tags, id})=>{
console.log(tags)
    const limit=5;
    const queryString= tags?.length > 0
                           ? tags.map(
                             tag=> `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
                           : `&id_ne=${id}&_limit=${limit}`


    const response = await axiosIntance.get(`/videos?${queryString}`);
    return response.data;
}


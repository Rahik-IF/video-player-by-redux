import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loader from "../ui/Loader";

export default function RelatedVideoList({currentVideoId, tags}) {
    const {relatedVideos,isLoading,isError,error} = useSelector(state=> state.relatedVideos);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchRelatedVideos({tags, id: currentVideoId}))
    },[dispatch, tags, currentVideoId])

    //decide what to render
    let content= null;

    if(isLoading) content = <Loader />;
    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if(!isError && !isError && !relatedVideos?.length === 0) content= <div className="col-span-12">No Related Videos Found!!</div>;
    if(!isError && !isError && relatedVideos) content = relatedVideos.map(video=> <RelatedVideoListItem key={video.id} video={video} />);

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}

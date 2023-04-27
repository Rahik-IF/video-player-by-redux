import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loader from "../ui/Loader";

export default function VideoGrid() {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(state => state.videos);
    const { tags, search } = useSelector(state => state.filter);
    useEffect(() => {
        dispatch(fetchVideos({ tags, search }));
    }, [dispatch, tags, search])

    //Decide the video fetching conditions
    let content;
    if (isLoading) content = <Loader />;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if (!isLoading && !isError && videos?.length === 0) content = <div className="col-span-12">No Videos Found!</div>;
    if (!isLoading && !isError && videos?.length > 0) content =
        videos.map(
            video => (<VideoGridItem key={video.id} video={video} />)
        )
        ;
    return (
        <section className="pt-12 px-3">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
}

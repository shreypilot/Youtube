import React,{useEffect,useState} from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import {YOUTUBE_VIDEOS_API} from "../utils/constant"; 
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos, setVideos] = useState([]);

  useEffect(() =>{
        getVideos();
  },[])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap m-5 '>
      {videos[2] && <AdVideoCard info={videos[2]} />}
      {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video}  /> 
          </Link>
        
      ))}
    </div>
  )
}

export default VideoContainer

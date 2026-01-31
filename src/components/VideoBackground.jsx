import React, { useEffect } from 'react'
import { options } from '../utils/constants'

const VideoBackground = ({id}) => {

  const getMovieVideo = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    const json = await data.json();
    console.log("Video data",json)
  }

  useEffect(()=>{
    getMovieVideo();
  },[])

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground
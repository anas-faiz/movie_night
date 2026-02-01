import React, { useEffect } from "react";
import { options } from "../utils/constants";

const VideoBackground = ({ id }) => {
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    );
    const json = await data.json();
    console.log("Video data", json);

    const filterData = json.results.filter((video) => video.type == "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log("trailer", trailer);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/"
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;

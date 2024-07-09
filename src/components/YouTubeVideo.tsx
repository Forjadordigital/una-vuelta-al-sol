import React from 'react';
import './YouTubeVideo.css';

interface YouTubeVideoProps {
  videoId?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="video-container">
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
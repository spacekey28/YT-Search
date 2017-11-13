import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8 col-lg-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">{video.snippet.title}</div>
        <div className="details-description">{(video.snippet.description > 36) ? video.snippet.description.substr(0, 36) + "..." : video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

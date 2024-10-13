import React from "react";
import '../VideoSection.css';


const VideoSection = () => {
  return (
    <div className="video-section">
      <video  controls>
        <source src="img/appartment-tour2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;

import React from 'react';
import videos from '../components/videos';
import './Classes.css'

const Classes = () => {
  // Get the first video
  const firstVideo = videos[0];

  return (
    <div className="bg-container">
      <div className="video-container">
        {/* Container for the first video */}
        <div className="video">
          <video controls>
            <source src={firstVideo.videoLink} type="video/mp4" />
          </video>
        </div>
        {/* Container for the title and description */}
        <div className="video-details">
          <h3>{firstVideo.title}</h3>
          <p>{firstVideo.description}</p>
          <button className="practice-button">Practice</button>
        </div>
      </div>
     
      {/* Render remaining videos */}
      {videos.slice(1).map((video, index) => (
        <div key={video.id} className="video-container">
          <div className="video">
            <video controls>
              <source src={video.videoLink} type="video/mp4" />
            </video>
          </div>
          <div className="video-details">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <button className="practice-button">Practice</button>
          </div>
          
        </div>
        
      ))}
      <p className="paging">1 2 3 4 5</p>
    </div>
    
  );
};

export default Classes;

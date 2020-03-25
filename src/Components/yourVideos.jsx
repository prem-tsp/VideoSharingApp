import React, { Component } from 'react';
import videoList from '../Api/yourVideos.json'

class YourVideos extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <div className="upload">
                <h1>Upload Your Awesome Video</h1>
                <p>
                    You can upload your video here. But I haven't added that functionality yet. Stay tuned for Update.
                </p>
            </div>
        <div class="flex-container">
            {videoList.map(element => {
                return(
            
            <div className = "videoContainer">
                <div className ="video">
                    <img className="videoThumbnail" src = {element.link} alt="Video Thumbnail" />
                </div>
                <div className="details">
                <ul>
                    <li style={{fontWeight:"bold"}}>{element.name}</li>
                    <li>{element.uploadedBy}</li>
                    <li>{element.views}</li>
                </ul>
                </div>
            </div>
                );
                })}
        </div>
        </div>
         );
    }
}
 
export default YourVideos;
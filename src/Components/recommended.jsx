import React, { Component } from 'react';
import recommendedList from '../Api/recommended.json'

class Recommended extends Component {
    state = {  }
    render() { 
        return (
            <div class="flex-container">
                {recommendedList.map(element => {
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
          );
    }
}
 
export default Recommended;
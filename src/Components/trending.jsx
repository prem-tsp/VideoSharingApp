import React, { Component } from 'react';
import trendingList from '../Api/trending.json'

class Trending extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h1 style={{fontWeight: 700, color:"white" 
            }}>Trending</h1>
            <div class="flex-container">
                {trendingList.map(element => {
                    return(
                
                <div className = "videoContainer">
                    <div className ="video">
                        <img className="videoThumbnail" src = {element.link} alt="Video Thumbnail" />
                    </div>
                    <div className="details">
                    <ul>
                        <li style={{fontWeight:"bold"}}>{element.name}</li>
                        <li>{element.uploadedBy}</li>
                        <li>#{element.id}-Trending</li>
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
 
export default Trending;
import React, { Component } from 'react';
import navBarList from '../Api/userNavBar.json'

class SideBar extends Component {
    state = { 
      
     }
    render() { 
        return ( 
            <div className="verticalNavBar">
                <ul className="ul">
                    <li className="li" id="home"><a href="home">Home</a></li>

                    <li className="li" id ="yourVideos"><a href="videos">Your Videos</a></li>

                    <li className="li" id = "trending"><a href="trending">Trending</a></li>
                    
                    <div id="subscriptions">
                        <h3>Subscriptions</h3>
                        {navBarList.subscriptionsList.map((element) => {
                            return( 
                            <li className="li">
                                <a style={{ marginLeft:"5px",
                                 marginRight:"5px"}}>
                                <img src ={element.thumbnail} style={{height:"30px",
                                 width:"30px",
                                 borderRadius:"50%",
                                 marginRight: "1vw"
                                 }}></img>

                               <span style={{position:"relative",bottom:"7px"}}>{element.name}</span></a>
                            </li>
                            )
                        })}
                    </div>
                    <div id="categories">
                        <h3>Categories</h3>
                        {navBarList.categories.map((element) => {
                        return( 
                        <li className="li">
                           <a>{element}</a>
                        </li>
                        )
                    })}
                    </div>
                </ul>
            </div>
         );
    }
}
 
export default SideBar;
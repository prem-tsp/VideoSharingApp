import React, { Component } from 'react';
import SideBar from './sideBar'

class NavBar extends Component {
    state = { 
        navBarVisible:false,
     }
    toggleNav()
    {
        this.setState(state => ({
            navBarVisible : !state.navBarVisible,
        }))
      //  this.state.navBarVisible = !this.state.navBarVisible
    }
    render() { 
        return ( 
        <div>
            <div id="mySidebar" className="sidebar" style={{
                    width: this.state.navBarVisible? "20%":"0%"
                }}>
               <SideBar />
            </div>

            <div id="main">
                <button className="openbtn" onClick={this.toggleNav()}>☰ Open Sidebar</button>  
            </div>
        </div>
         );
    }
}
 
export default NavBar;
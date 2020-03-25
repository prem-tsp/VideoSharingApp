import React, { Component } from 'react';
import SideBar from './sideBar'
import Home from './home'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "right">
                <Home />
            </div>
         );
    }
}
 
export default App;
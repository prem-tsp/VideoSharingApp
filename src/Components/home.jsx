import React, { Component } from 'react';
import Recommended from './recommended'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="recommended">
                <h1 style={{fontWeight: 700, 
            }}>Recommended</h1>
            <Recommended />
            </div>
         );
    }
}
 
export default Home;

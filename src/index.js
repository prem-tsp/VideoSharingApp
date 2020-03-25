import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './Components/App'
import SideBar from './Components/sideBar'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Trending from './Components/trending'
import YourVideos from './Components/yourVideos'

const routing = (
    <Router>
        <div className="box">
            <div className="left">
                <SideBar />
            </div>
        </div>
      <div>
        <Route path="/" component={App} />
        <Route path="/trending" component={Trending} />
        <Route path="/videos" component={YourVideos} />
      </div>
    </Router>
  )

ReactDOM.render(
   routing
, document.getElementById('root'))
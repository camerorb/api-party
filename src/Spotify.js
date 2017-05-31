import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Spotify.css'

class Spotify extends Component {

    render() {
         return (
      <div className="spotify">
        <img className="spotify-logo" src="http://pixel.nymag.com/imgs/daily/vulture/2015/06/26/26-spotify.w1200.h630.jpg" alt="spotify" />
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <button type="submit">Look up spotify user</button>
          </div>
        </form>
  {/*fetchRoverData() {
    fetch(`https://api.spotify.com/v1/browse/new-releases`)}*/}

        
        <Route exact path='/spotify' render={() => (
          <h3>Please enter a username to search on spotify</h3>
        )} />
      </div>
      
    )         
    }
 }

export default Spotify
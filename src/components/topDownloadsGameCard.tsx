import { Component } from 'react'

import "../styles/topDownloadsGameCard.css"
import TitleGenre from './titleGenre'
import { FaDownload } from 'react-icons/fa'
import RatingDownloads from './ratingDownloads'

export default class TopDownloadsGameCard extends Component {
  render() {
    return (
      <div className="topDownloadsGameCardMain">
        <img src="game-01.jpg" alt="" className="topDownloadsGameCardImg"/>
        <TitleGenre {...{
            title: "fortnite",
            genre: "sandbox"
        }}/>
        
        <RatingDownloads/> 

        <button className="buttonSpecial buttonDownload"><FaDownload/></button>
      </div>
    )
  }
}

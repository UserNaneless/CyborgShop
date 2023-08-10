import { Component } from 'react'
import { FaDownload, FaStar } from "react-icons/fa"

import "../styles/gameCard.css"

export interface gameCardProps {
    gameTitle: string
    gameRating: number
    gameType: string
    gameDownloads: number
}

export default class GameCard extends Component {
  render() {
    return (
      <div className="gameCard">
            <img src="popular-01.jpg" alt="" className="gamePicture"/>
            <div className="middlePart">
                <h4>Fortnite</h4>
                <div className="gameRating"> <span><FaStar/></span>  4.8 </div>
            </div>
            <div className="endPart">
                <h5>Sandbox</h5>
                <div className="gameDownloads"> <span><FaDownload/></span> 2.3m</div>
            </div>

      </div>
    )
  }
}

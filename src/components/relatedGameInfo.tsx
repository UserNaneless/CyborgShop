import React, { Component } from 'react'
import TitleGenre from './titleGenre'
import RatingDownloads from './ratingDownloads'

import "../styles/relatedGameInfo.css"

export default class RelatedGameInfo extends Component {
    render() {
        return (
            <div className="relatedGameInfoMain">
                <div className="relatedGameInfoNameImage">
                    <img src="game-01.jpg" />

                    <TitleGenre {...{
                        title: "Dota 2",
                        genre: "Sandbox"
                    }} />
                </div>


                <RatingDownloads vertical />
            </div>
        )
    }
}

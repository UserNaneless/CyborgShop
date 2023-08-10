import { Component } from 'react'

import "../styles/featuredGameCard.css"
import TitleGenre from './titleGenre'
//import { FaDownload, FaStar } from 'react-icons/fa'
import RatingDownloads from './ratingDownloads'

export default class FeaturedGameCard extends Component {
    render() {
        return (
            <div className="featuredGameCardMain">
                <img src="featured-02.jpg" className="featuredGameImg"/>
                <div className="featuredGameCardInfo">
                    <TitleGenre {...{
                        title: "island rusty",
                        genre: "249k downloads"
                    }}/>

                    <RatingDownloads vertical={true}/>
                </div>
            </div>
        )
    }
}

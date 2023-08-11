import { Component } from 'react'

import "../styles/detailsPage.css"
import { TitledContainer } from '../components/titledContainer'
import TitleGenre from '../components/titleGenre'
import RatingDownloads from '../components/ratingDownloads'
import { FaDownload, FaGamepad, FaServer, FaStar } from 'react-icons/fa'
import RelatedGameInfo from '../components/relatedGameInfo'

export default class DetailsPage extends Component {
    render() {
        return (
            <div className="container contentContainer detailsMain">
                <div className="detailsGameImages">
                    <img src="feature-left.jpg" className="gameImage detailsImage" />
                    <img src="feature-left.jpg" className="gameVideo detailsImage" />
                </div>

                <h1 className="detailsMainTitle">fortnite details</h1>




                <TitledContainer>
                    <div className="gameDetailsInfoMain">
                        <div className="gameDetailsRatings">
                            <div className="gameDetailsRatingInfo">
                                <TitleGenre {...{
                                    title: "Fortnite",
                                    genre: "Sandbox"
                                }} />

                                <RatingDownloads vertical />
                            </div>
                            <div className="gameDetailsRatingInfo">
                                <div className="topDown">
                                    <span><FaStar /></span>
                                    <span>4.8</span>
                                </div>

                                <div className="topDown">
                                    <span> <FaDownload /> </span>
                                    <span>2.3M</span>
                                </div>

                                <div className="topDown">
                                    <span> <FaServer /> </span>
                                    <span>36GB</span>
                                </div>

                                <div className="topDown">
                                    <span> <FaGamepad /> </span>
                                    <span>Action</span>
                                </div>
                            </div>
                        </div>

                        <div className="gameDetailsGameImages">
                            <img src="details-01.jpg" />
                            <img src="details-01.jpg" />
                            <img src="details-01.jpg" />
                        </div>

                        <p className="gameDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet est eius ea eos alias soluta magni aspernatur nostrum consectetur esse amet, in voluptas asperiores aperiam, iure iste voluptatibus blanditiis repellat. Minima omnis similique deleniti voluptate.</p>

                        <button className="downloadButton">download fortnite now</button>
                    </div>
                </TitledContainer>

                <TitledContainer {...{
                    titleUnderlined: "other related",
                    titleNormal: "games"
                }}>
                    <div className="relatedGameContainer">
                        <RelatedGameInfo />
                        <RelatedGameInfo />
                        <RelatedGameInfo />
                        <RelatedGameInfo />
                        <RelatedGameInfo />
                        <RelatedGameInfo />
                    </div>


                </TitledContainer>
            </div>
        )
    }
}

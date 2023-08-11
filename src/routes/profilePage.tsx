import { Component } from 'react'

import "../styles/profilePage.css"
import { TitledContainer } from '../components/titledContainer'
import ProfileStatisticsInfo from '../components/profileStatisticsInfo'
import Clip from '../components/clip'
import LibraryGameInfo from '../components/libraryGameInfo'

export default class ProfilePage extends Component {
    render() {
        return (
            <div className="container contentContainer profilePageMain">
                <TitledContainer>
                    <div className="mainProfile">
                        <div className="mainProfileInfo">
                            <img src="profile.jpg" className="profileIcon" />

                            <div className="profileStreamingInfo">
                                <span className="liveStatus">offline</span>
                                <div className="profileName">Alan smithee</div>
                                <p className="profileGuidance">You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                                <button className="startStreamButton">start live stream</button>
                            </div>

                            <div className="profileStatistics">
                                <ProfileStatisticsInfo {...{
                                    statName: "games downloaded",
                                    statCount: 3
                                }} />

                                <ProfileStatisticsInfo {...{
                                    statName: "friends online",
                                    statCount: 16
                                }} />

                                <ProfileStatisticsInfo {...{
                                    statName: "live streams",
                                    statCount: 0
                                }} />

                                <ProfileStatisticsInfo {...{
                                    statName: "clips",
                                    statCount: 29
                                }} />
                            </div>
                        </div>

                        <TitledContainer {...{
                            titleUnderlined: "your most popular",
                            titleNormal: "clips"
                        }}>

                            <div className="profileClips">
                                <Clip />
                                <Clip />
                                <Clip />
                                <Clip />
                            </div>

                        </TitledContainer>

                        <button className="buttonMain">load more clips</button>

                    </div>
                </TitledContainer>


                <TitledContainer {...{
                    titleUnderlined: "your game",
                    titleNormal: "library"
                }}>
                    <div className="profileGameLibrary">
                        <LibraryGameInfo />
                        <LibraryGameInfo />
                        <LibraryGameInfo />
                    </div>

                </TitledContainer>
            </div>
        )
    }
}

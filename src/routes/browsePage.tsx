import { Component } from 'react'
import { TitledContainer } from '../components/titledContainer'

import "../styles/browsePage.css"
import FeaturedGameCard from '../components/featuredGameCard'
import TopDownloadsGameCard from '../components/topDownloadsGameCard'

export default class BrowsePage extends Component {
    render() {
        return (
            <div className="container contentContainer browseMain">
                <div className="browseTopGames">
                    <TitledContainer {...{
                        titleUnderlined: "featured",
                        titleNormal: "games"
                    }}>

                        <div className="featuredGames">
                            <FeaturedGameCard />
                            <FeaturedGameCard />
                            <FeaturedGameCard />
                        </div>


                    </TitledContainer>

                    <TitledContainer {...{
                        titleUnderlined: "top",
                        titleNormal: "downloaded",
                        buttonText: "view all games"
                    }}>

                        <div className="topDownloads">
                            <TopDownloadsGameCard />
                            <TopDownloadsGameCard />
                            <TopDownloadsGameCard />
                        </div>

                    </TitledContainer>
                </div>

                <TitledContainer {...{
                    titleUnderlined: "how to start your",
                    titleNormal: "live stream",
                    buttonText: "go to profile",
                    special: true
                }}>

                    <div className="streamStartGuide">
                        <div className="guideStep">
                            <img src="src\assets\service-01.jpg" className="guideStepIcon" />
                            <h5 className="guideStepTitle">go to your profile</h5>
                            <div className="guideStepText">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos iste quibusdam aspernatur pariatur sapiente?
                            </div>
                        </div>
                        <div className="guideStep">
                            <img src="src\assets\service-02.jpg" className="guideStepIcon" />
                            <h5 className="guideStepTitle">live stream button</h5>
                            <div className="guideStepText">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos iste quibusdam aspernatur pariatur sapiente?
                            </div>
                        </div>
                        <div className="guideStep">
                            <img src="src\assets\service-03.jpg" className="guideStepIcon" />
                            <h5 className="guideStepTitle">you are live</h5>
                            <div className="guideStepText">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos iste quibusdam aspernatur pariatur sapiente?
                            </div>
                        </div>
                    </div>
                </TitledContainer>

                <TitledContainer {...{
                    titleUnderlined: "most popular",
                    titleNormal: "live stream",
                    buttonText: "discover all streams"
                }}>

                </TitledContainer>

            </div>
        )
    }
}

import { Component } from 'react'

import "../styles/streamPage.css"
import { TitledContainer } from '../components/titledContainer'
import FeaturedGameCard from '../components/featuredGameCard'
import ActiveStream from '../components/activeStream'
import StreamerInfo from '../components/streamerInfo'

export default class StreamPage extends Component {
    render() {
        return (
            <div className="container contentContainer streamPageMain">
                <div className="featuredStreamsMain">
                    <TitledContainer {...{
                        titleUnderlined: "live",
                        titleNormal: "streams"
                    }}>

                        <div className="featuredStreams">
                            <FeaturedGameCard />
                            <FeaturedGameCard />
                            <FeaturedGameCard />
                        </div>

                    </TitledContainer>

                    <TitledContainer {...{
                        titleUnderlined: "top",
                        titleNormal: "streamers"
                    }}>
                        <div className="topStreamers">
                            <StreamerInfo streamerNumber={1} />
                            <StreamerInfo streamerNumber={2} />
                            <StreamerInfo streamerNumber={3} />
                            <StreamerInfo streamerNumber={4} />
                            <StreamerInfo streamerNumber={5} />
                        </div>
                    </TitledContainer>
                </div>

                <TitledContainer {...{
                    titleUnderlined: "most popular",
                    titleNormal: "live stream",
                    buttonText: "load more streams"
                }}>
                    <div className="popularStreams">
                        <ActiveStream />
                        <ActiveStream />
                        <ActiveStream />
                        <ActiveStream />
                        <ActiveStream />
                        <ActiveStream />
                        <ActiveStream />
                        <ActiveStream />
                    </div>
                </TitledContainer>
            </div>
        )
    }
}

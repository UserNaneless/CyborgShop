import { Component } from 'react'

import "../styles/homePage.css"
import { TitledContainer } from '../components/titledContainer'
import GameCard from '../components/gameCard'
import LibraryGameInfo from '../components/libraryGameInfo'

export default class HomePage extends Component {

    render() {

        return (
            <div className="container contentContainer homeMain">
                <div className="homeBanner">
                    <h6 className="homeBannerTitle1">welcome to cyborg</h6>
                    <h1 className="homeBannerTitleMain"><span>browse</span> our <br /> popular games here</h1>
                    <button className="buttonMain">browse now</button>
                </div>

                <TitledContainer {...{
                        titleUnderlined: "most popular",
                        titleNormal: "right now",
                        buttonText: "discover popular"
                    }}>
                        <div className="popularGames">
                            <GameCard />
                            <GameCard />
                            <GameCard />
                            <GameCard />
                            <GameCard />
                            <GameCard />
                            <GameCard />
                            <GameCard />
                        </div>
                    </TitledContainer>

                    <TitledContainer {...{
                        titleUnderlined: "your gaming",
                        titleNormal: "library",
                        buttonText: "view your library"
                    }}>
                        <LibraryGameInfo />
                        <LibraryGameInfo />
                        <LibraryGameInfo />
                    </TitledContainer>
            </div>
        )
    }
}

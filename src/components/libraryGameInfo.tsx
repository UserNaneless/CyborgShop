import { Component } from 'react'
import TitleGenre from './titleGenre'

import "../styles/libraryGameInfo.css"


export default class LibraryGameInfo extends Component {
    render() {
        return (
            <div className="libraryGameInfoMain">
                <img src="game-01.jpg" className="libraryGameImage" />
                <TitleGenre {...{
                    title: "fortnite",
                    genre: "sandbox"
                }} />

                <TitleGenre {...{
                    title: "date added",
                    genre: "24/08/2036"
                }} />

                <TitleGenre {...{
                    title: "hours played",
                    genre: "634 h 22 mins"
                }} />

                <TitleGenre {...{
                    title: "currently",
                    genre: "downloaded"
                }} />

                <button className="buttonSpecial">download</button>
            </div>
        )
    }
}

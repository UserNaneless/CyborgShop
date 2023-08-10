import { Component } from 'react'

import "../styles/titleGenre.css"

export interface titleGenreProps {
    title: string
    genre: string
}

export default class TitleGenre extends Component<titleGenreProps> {
    render() {
        return (
            <div className="titleGenreMain">
                <h4 className="title">{this.props.title}</h4>
                <h5 className="genre">{this.props.genre}</h5>
            </div>
        )
    }
}

import { Component } from 'react'

import "../styles/ratingDownloads.css"
import { FaDownload, FaStar } from 'react-icons/fa'

export type RatingDownloadsProps = {
    vertical?: boolean
}

export default class RatingDownloads extends Component<RatingDownloadsProps> {
    render() {
        return (
            <div className="ratingDownloadsMain" style={{
                flexDirection: this.props.vertical ? "column" : "row"
            }}>
                <div className="rating">
                    <span><FaStar/></span> 4.8
                </div>
                <div className="downloads">
                    <span><FaDownload/></span> 2.3M
                </div>
            </div>
        )
    }
}

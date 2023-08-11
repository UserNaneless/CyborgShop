import { Component } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import "../styles/streamerInfo.css"

type StreamerProps = {
    streamerNumber: number
}

export default class StreamerInfo extends Component<StreamerProps> {
    render() {
        return (
            <div className="streamerInfoMain">
                <span className="streamerNumber">{this.props.streamerNumber}</span>
                <img src="avatar-01.jpg" className="streamerIcon" />
                <span className="streamerName">
                    <FaCheckCircle/>
                    Kengan
                </span>

                <button className="buttonMain">
                    Follow
                </button>
            </div>
        )
    }
}

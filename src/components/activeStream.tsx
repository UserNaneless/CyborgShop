import { Component } from 'react'

import "../styles/activeStream.css"
import { FaCheckCircle, FaGamepad, FaRegEye } from 'react-icons/fa'

export default class ActiveStream extends Component {
    render() {
        return (
            <div className="activeStreamMain">
                <div className="activeStreamPreview">
                    <img src="stream-01.jpg" className="previewImage" />
                    <div className="previewDetails">
                        <div className="previewLive">Live</div>
                        <div className="viewers"> <FaRegEye/> 1.2k</div>
                        <div className="gameName"> <FaGamepad/> CS-GO</div>
                    </div>
                </div>
                <img src="avatar-01.jpg" className="streamerIcon" />
                <span className="streamerName"> <FaCheckCircle /> kenganc</span>
                <h4 className="streamTitle">just talking with fans</h4>
            </div>
        )
    }
}

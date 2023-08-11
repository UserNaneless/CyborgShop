import { Component } from 'react'

import "../styles/clip.css"
import { FaPlay, FaRegEye } from 'react-icons/fa'

export default class Clip extends Component {
    render() {
        return (
            <div className="clipMain">
                <div className="clipPreview">
                    <img src="clip-01.jpg" className="clipPreview" />
                    <div className="startButton">
                        <FaPlay/>
                    </div>
                </div>
                <div className="clipTitleViews">
                    <span className="clipTitle">first clip</span>
                    <span className="clipViews"><FaRegEye/> <span>250</span></span>
                </div>
            </div>
        )
    }
}

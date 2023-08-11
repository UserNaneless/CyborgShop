import { Component } from 'react'

import "../styles/profileStatisticsInfo.css"

type profileStatsInfoProps = {
    statName: string,
    statCount: number
}

export default class ProfileStatisticsInfo extends Component<profileStatsInfoProps> {
    render() {
        return (
            <div className="profileStatisticsInfoMain">
                <span className="statName">{this.props.statName}</span>
                <span className="statCount">{this.props.statCount}</span>
            </div>
        )
    }
}

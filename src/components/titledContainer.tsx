import { Component, ReactNode } from 'react'

import "../styles/titledContainer.css";

export interface titledContainerProps {
    titleUnderlined: string
    titleNormal: string
    buttonText?: string
    special?: boolean
    children?: ReactNode
}

export class TitledContainer extends Component<titledContainerProps> {
    render() {
        return (
            <div className="titledContainerMain" style={{
                background: this.props.special ? "var(--background-color-2)" : "var(--background-color)"
            }}>
                <h4 className="titledContainerTitle" style={{
                    textAlign: this.props.special ? "center" : "start"
                }}><span>{this.props.titleUnderlined}</span> {this.props.titleNormal}</h4>

                {this.props.children}

                {this.props.buttonText && <button className="titledContainerButton buttonMain">{this.props.buttonText}</button>}
            </div>
        )
    }
}

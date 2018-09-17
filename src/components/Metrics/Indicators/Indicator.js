import React, { Component } from 'react'
import './Indicator.css'
export default class indicator extends Component {
    render() {
        const {
            title,
            percentage,
            average
        } = this.props;

        return (
            <div className="metrics-indicator">
                <div className="metrics-indicator__title">
                    <span> {`${title}:`} </span>
                    <span> {`${percentage}%`} </span>
                </div>
                <div className="metrics-indicator__average">
                    <span> {`Average: ${average}%`} </span>
                </div>
            </div>
        )
    }
}

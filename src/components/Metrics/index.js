import React, { Component } from 'react'
import Navigation from './Navigation'
import Indicators from './Indicators'
import InfoBlocks from './InfoBlocks'
import Graph from './Graph'
import './index.css'

export default class index extends Component {
    render() {
        return (
            <div className="metrics">
                <div className="metrics-title"> Main metrics </div>
                <Navigation />
                <Indicators />
                <Graph />
                <InfoBlocks />
            </div>
        )
    }
}
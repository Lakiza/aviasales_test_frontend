import React, { Component } from 'react'
import Button from './Button'
import './index.css'

import { PERIOD } from '../../../state/actions/metrics' 

export default class index extends Component {
    render() {
        return (
            <div className="metrics-navigation">
                <Button title="Last hour" period={PERIOD.lastHour}/>
                <Button title="Today" period={PERIOD.today}/>   
                <Button title="Yesterday" period={PERIOD.yesterday}/>   
                <Button title="Last 3 days" period={PERIOD.threeDays}/>
            </div>
        )
    }
}

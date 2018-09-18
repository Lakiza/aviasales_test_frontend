import React, { Component } from 'react'
import { connect } from 'react-redux'

import Searches from './Searches'
import Clicks from './Clicks'
import Bookings from './Bookings'

import './index.css'

class index extends Component {
    render() {
        const {
            metrics
        } = this.props;

        const {
            clicks,
            searches,
            bookings,
            ctr,
            str,
            avgcheck
        } = metrics.statistic;

        return (
            <div className="metrics-infoblocks">
                <Searches current={searches.current}
                    previous={searches.previous}
                    mobileTraffic={100}
                    webTraffic={100}
                    period={metrics.period}
                />
                <Clicks current={clicks.current}
                    previous={clicks.previous}
                    ctr={ctr}
                    period={metrics.period}
                />
                <Bookings current={bookings.current}
                    previous={bookings.previous}
                    str={str}
                    avgcheck={avgcheck}
                    period={metrics.period}
                />
            </div>
        );
    }
}

export default connect(state => ({
    metrics: state.metrics
}))(index);
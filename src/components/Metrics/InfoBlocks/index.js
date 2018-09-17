import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmptyObject } from '../../../utils'

import Searches from './Searches'
import Clicks from './Clicks'
import Bookings from './Bookings'

import './index.css'

class index extends Component {
    render() {
        const {
            metrics
        } = this.props;

        if (
            !metrics.statistic ||
            isEmptyObject(metrics.statistic)
        ) {
            return (
                <div>
                    <span> No data </span>
                </div>
            )
        }

        return (
            <div className="metrics-infoblocks">
                <Searches current={metrics.statistic.searches.current}
                    previous={metrics.statistic.searches.previous}
                    mobileTraffic={100}
                    webTraffic={100}
                    period={metrics.period}
                />
                <Clicks current={metrics.statistic.clicks.current}
                    previous={metrics.statistic.clicks.previous}
                    ctr={metrics.statistic.ctr.toFixed(2)}
                    period={metrics.period}
                />
                <Bookings current={metrics.statistic.bookings.current}
                    previous={metrics.statistic.bookings.previous}
                    str={metrics.statistic.str.toFixed(2)}
                    avgcheck={metrics.statistic.avgcheck.toFixed(2)}
                    period={metrics.period}
                />
            </div>
        );
    }
}

export default connect(state => ({
    metrics: state.metrics
}))(index);
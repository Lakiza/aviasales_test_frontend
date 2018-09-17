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

        return (
            <div className="metrics-infoblocks">
                <Searches current={metrics.searches.current}
                    previous={metrics.searches.previous}
                    mobileTraffic={100}
                    webTraffic={100}
                    period={metrics.period}
                />
                <Clicks current={metrics.clicks.current}
                    previous={metrics.clicks.previous}
                    ctr={metrics.ctr.toFixed(2)}
                    period={metrics.period}
                />
                <Bookings current={metrics.bookings.current}
                    previous={metrics.bookings.previous}
                    str={metrics.str.toFixed(2)}
                    avgcheck={metrics.avgcheck.toFixed(2)}
                    period={metrics.period}
                />
            </div>
        );
    }
}

export default connect(state => ({
    metrics: state.metrics
}))(index);
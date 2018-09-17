import React, { Component } from 'react'
import { isEmptyObject } from '../../../utils'

import { connect } from 'react-redux'
import Indicator from './Indicator'
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
            return ''
        }

        return (
            <div className="metrics-indicators">
                <Indicator  title="Errors"
                    percentage={metrics.statistic.errors}
                    average={metrics.statisticAverage.errors}
                /> 
                <Indicator  title="Zeroes"
                    percentage={metrics.statistic.zeroes}
                    average={metrics.statisticAverage.zeroes}
                /> 
                <Indicator  title="Timeouts"
                    percentage={metrics.statistic.timeout}
                    average={metrics.statisticAverage.timeout}
                /> 
            </div>
        )
    }
}


export default connect(state => ({
    metrics: state.metrics
}))(index);

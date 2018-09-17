import React, { Component } from 'react'
import { connect } from 'react-redux'
import Indicator from './Indicator'
import './index.css'

class index extends Component {
    render() {
        const {
            metrics
        } = this.props;

        return (
            <div className="metrics-indicators">
                <Indicator  title="Errors"
                    percentage={metrics.errorsStat.percentage}
                    average={metrics.errorsStat.average}
                /> 
                <Indicator  title="Zeroes"
                    percentage={metrics.zeroes.percentage}
                    average={metrics.zeroes.average}
                /> 
                <Indicator  title="Timeouts"
                    percentage={metrics.timeouts.percentage}
                    average={metrics.timeouts.average}
                /> 
            </div>
        )
    }
}


export default connect(state => ({
    metrics: state.metrics
}))(index);

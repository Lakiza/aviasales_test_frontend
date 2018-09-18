import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import Indicators from './Indicators'
import InfoBlocks from './InfoBlocks'
import Graph from './Graph'

import { 
    setPeriod,
    PERIOD 
} from '../../state/actions/metrics'

import './index.css'

class index extends Component {
    componentDidMount() {
        const {
            dispatch
        } = this.props;
        dispatch(setPeriod(PERIOD.threeDays))
    }

    render() {
        const {
            loading
        } = this.props;

        if (loading) {
            return (
                <div className="metrics">
                    Loading
                </div>
            );
        }

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

export default connect(state =>({
    loading: state.metrics.loading,
    loaded: state.metrics.loaded
}))(index)
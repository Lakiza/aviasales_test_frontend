import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Button.css'

import { setPeriod } from '../../../state/actions/metrics'

class Button extends Component {
    render() {
        const {
           title,
           period,
           metrics,
           dispatch,
           ...propsPack
        } = this.props;

        return (
            <div className="metrics-navigation__button" onClick={()=>{
                dispatch(setPeriod(period));
            }} {...propsPack}> 
                {title}
            </div>
        );
    }
}

export default connect(state=>({
    metrics: state.metrics
}))(Button);

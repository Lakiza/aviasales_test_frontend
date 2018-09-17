import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Graph.css'

class Graph extends Component {
    render() {
        const {
            metrics
        } = this.props;

        let errors = [...metrics.errors];
        errors.sort((a, b) => {
            return b.count - a.count;
        });
        
        const majorErrors = errors.slice(0, 3);
        let otherErrorsCount = 0;
        errors.slice(3).forEach((el)=>{
            otherErrorsCount += el.count;
        });

        return (
            <div className="metrics-graph">
                <div className="metrics-graph__canvas">
                    {majorErrors.map((el, key) => {
                        return <div className="metrics-graph__line" key={key} style={{
                            flexGrow: el.count
                        }}/>;
                    })}

                    <div className="metrics-graph__line" style={{
                            flexGrow: otherErrorsCount
                    }} />
                </div>
                <div className="metrics-graph__errors">
                    {majorErrors.map((el, key) => {
                        return (
                            <div className="metrics-graph__item" key={key}>
                                <span> Error </span>
                                <span> {el.code}: </span>
                                <span> {el.count} </span>
                            </div>
                        );
                    })}

                    {
                        otherErrorsCount ? (
                            <div className="metrics-graph__item">
                                <span> Other: </span>
                                <span> {otherErrorsCount} </span>
                            </div>
                        ) : ''
                    }
                    
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        metrics: state.metrics
    })
)(Graph);
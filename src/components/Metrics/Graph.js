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

        return (
            <div className="metrics-graph">
                <div className="metrics-graph__canvas">
                    {errors.map((el, key) => {
                        return <div className="metrics-graph__line" key={key} style={{
                            flexGrow: el.count
                        }}/>;
                    })}
                </div>
                <div className="metrics-graph__errors">
                    {errors.map((el, key) => {
                        return (
                            <div className="metrics-graph__item" key={key}>
                                <span> {el.code ? 'Error' : 'Other'} </span>
                                <span> {el.code ? el.code : ''}: </span>
                                <span> {el.count} </span>
                            </div>
                        );
                    })}

                    { !errors.length ? 'There are no errors for selected period' : ''}
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
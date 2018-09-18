import React, { Component } from 'react'
import ReactSvg from 'react-svg'
import { PERIOD } from '../../../state/actions/metrics'

import './InfoBlock.css'

export default class InfoBlock extends Component {
    getCurrentTitle() {
        const {
            period
        } = this.props;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        switch(period) {
            case PERIOD.lastHour: {
                return 'Last hour';
            }
            case PERIOD.today: {
                return 'Today'
            }
            case PERIOD.yesterday: {
                return 'Yesterday';
            }
            case PERIOD.threeDays: {
                const date = new Date();
                const to = date.getDay();
                date.setDate(date.getDate() - 2);
                const from = date.getDay();
                return days[from] + ' - ' + days[to];
            }
        }
    }

    getPreviousTitle() {
        const {
            period
        } = this.props;


        console.log(period);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        switch(period) {
            case PERIOD.lastHour: {
                return 'An hour ago';
            }
            case PERIOD.today:{
                return 'Yesterday';
            }
            case PERIOD.yesterday: {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate()-2);
                return 'Last ' + days[yesterday.getDay()];
            }
            case PERIOD.threeDays: {
                const date = new Date();
                date.setDate(date.getDate() - 3);
                const to = date.getDay();
                date.setDate(date.getDate() - 2);
                const from = date.getDay();
                return days[from] + ' - ' + days[to];
            }
        }
    }

    isDecresed() {
        const {
            current,
            previous,
        } = this.props;

        return current < previous;
    }

    getDifferencePercentage() {
        const {
            current,
            previous
        } = this.props;

        if (this.isDecresed()) {
            return ((previous-current)/current) * 100;
        } return ((current-previous)/current) * 100;
    }
    
    render() {
        const {
            icon,
            title,
            current,
            previous,
            rightInfo,
            rightDescription,
            rightHelp
        } = this.props;

        return (
            <div className={`metrics-infoblock ${this.isDecresed() ? 'metrics-infoblock--decreased' : ''}`}>
                <div className="metrics-infoblock__wrapper-icon">
                    <ReactSvg className="metrics-infoblock__icon" src={icon} />
                </div>
                <div className="metrics-infoblock__wrapper-content">
                    <div className="metrics-infoblock__group">
                        <div className="metrics-infoblock__header">
                            <span className="metrics-infoblock__title"> {title} </span>
                            {
                                (current !== previous) ? 
                                <span className="metrics-infoblock__difference">
                                    {this.getDifferencePercentage().toFixed(2)}%
                                </span> : ''
                            }
                        </div>
                        <div className="metrics-infoblock__current">
                            <span className="metrics-infoblock__current-value"> {current ? current : 'No data'} </span>
                            <span className="metrics-infoblock__current-title"> {this.getCurrentTitle()} </span>
                        </div>
                        <div className="metrics-infoblock__previous">
                            <span className="metrics-infoblock__previous-value"> {previous ? previous : 'No data'} </span>
                            <span className="metrics-infoblock__previous-title"> {this.getPreviousTitle()} </span>
                        </div>
                    </div>
                    <div className="metrics-infoblock__group metrics-infoblock__rightblock">
                        {rightInfo.map((el, key)=>{
                            return <div className="metrics-infoblock_rightblock-info" key={key}>
                                <span> {el.title}: </span>
                                <span> {el.value ? el.value : 'No data'} </span>
                            </div>
                        })}
                        <div className="metrics-infoblock__rightblock-description"> {rightDescription} </div>
                        <div className="metrics-infoblock__rightblock-help"> 
                            <span> Help: </span>
                            {rightHelp.map((el, key)=>{
                                return <span className="metrics-infoblock__rightblock-link" onClick={el.callback} key={key}>
                                    {el.title}
                                </span>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

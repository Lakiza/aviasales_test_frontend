import React, { Component } from 'react'
import InfoBlock from './InfoBlock'

import ClicksIcon from '../../../images/clicks.svg'

export default class Clicks extends Component {
    render() {
        const {
            current,
            previous,
            ctr,
            ...propsPack
        } = this.props;

        return (
            <InfoBlock icon={ClicksIcon} 
                title="Clicks"
                current={current}
                previous={previous}
                currentTitle="Yesterday"
                previousTitle="Last friday"
                rightInfo={[
                    {title: 'CTR', value:`${ctr}%`},
                ]}
                rightDescription="Conversion from searches to clicks on all devices."
                rightHelp={[
                    {title: 'Searches'}
                ]}
                {...propsPack}
            />
        );
    }
}

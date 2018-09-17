import React, { Component } from 'react'
import InfoBlock from './InfoBlock'

import SearchesIcon from '../../../images/searches.svg'

export default class Searches extends Component {
    render() {
        const {
            current,
            previous,
            mobileTraffic,
            webTraffic,
            ...propsPack
        } = this.props;

        return (
            <InfoBlock icon={SearchesIcon} 
                title="Searches"
                current={current}
                previous={previous}
                currentTitle="Yesterday"
                previousTitle="Last friday"
                rightInfo={[
                    {title: 'Mobile traffic', value:`${mobileTraffic}%`},
                    {title: 'Web traffic', value:`${webTraffic}%`}
                ]}
                rightDescription="You get 100% traffic on mobile and desktop devices."
                rightHelp={[
                    {title: 'Searches'},
                    {title: 'Pessimization'}
                ]}
                {...propsPack}
            />
        );
    }
}

import React, { Component } from 'react'
import InfoBlock from './InfoBlock'

import BookingsIcon from '../../../images/bookings.svg'

export default class Bookings extends Component {
    render() {
        const {
            current,
            previous,
            str,
            avgcheck,
            ...propsPack
        } = this.props;

        return (
            <InfoBlock icon={BookingsIcon} 
                title="Bookings"
                current={current}
                previous={previous}
                currentTitle="Yesterday"
                previousTitle="Last friday"
                rightInfo={[
                    {title: 'STR', value:str ? str.toFixed(2) + '%' : 'No data'},
                    {title: 'Avg.Check', value: avgcheck ? avgcheck.toFixed(2) : 'No data'}
                ]}
                rightDescription="Conversion from searches to bookings on all devices."
                rightHelp={[
                    {title: 'STR'},
                    {title: 'Booking'},
                    {title: 'Avg.Check'}
                ]}
                {...propsPack}
            />
        );
    }
}

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
                    {title: 'STR', value:`${str}%`},
                    {title: 'Avg.Check', value: `${avgcheck}`}
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

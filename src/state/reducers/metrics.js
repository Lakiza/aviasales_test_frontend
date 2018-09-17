import {
    SET,
    RESET,
    PERIOD
} from '../actions/metrics';

const initialState = {
    period: PERIOD.threeDays,
    errors: [],
    errorsStat: {
        percentage: 0,
        average: 0
    },
    zeroes: {
        percentage: 0,
        average: 0
    },
    timeouts: {
        percentage: 0,
        average: 0
    },
    searches: {
        current: 29380,
        previous: 29380
    },
    clicks: {
        current: 100,
        previous: 250
    },
    ctr: 0.6,
    str: 0.5,
    avgcheck: 10243.0263157895,
    bookings: {
        current: 24,
        previous: 26
    }

};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET: {
            return {
                ...state,
                ...action.payload
            };
        }
        case RESET: {
            return {
                ...initialState
            };
        }
        default: 
            return state;
    }
}
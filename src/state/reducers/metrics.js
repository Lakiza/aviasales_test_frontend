import {
    SET,
    RESET,
    PERIOD
} from '../actions/metrics';

const initialState = {
    period: PERIOD.threeDays,
    loading: true,
    loaded: false,
    loadFailure: false,
    errors: [],
    statistic: {
        errors: undefined,
        zeroes: undefined,
        timeout: undefined,
        searches: {
            current: undefined,
            previous: undefined
        },
        clicks: {
            current: undefined,
            previous: undefined
        },
        ctr: undefined,
        str: undefined,
        avgcheck: undefined,
        bookings: {
            current: undefined,
            previous: undefined
        }
    },
    statisticAverage: {
        errors: undefined,
        zeroes: undefined,
        timeout: undefined
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
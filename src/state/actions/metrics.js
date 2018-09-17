export const SET = 'metrics/set'
export const RESET = 'metrics/reset'

export const PERIOD = {
    lastHour: 'last_hour',
    today: 'today',
    yesterday: 'yesterday',
    threeDays: '3days'
}

export function setPeriod(period) {
    return {
        type: SET,
        payload: {
            period: period
        }
    };
}
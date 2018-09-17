export const SET = 'metrics/set'
export const RESET = 'metrics/reset'

import DashboardSDK from '../../sdk/web/Dashboard'

export const PERIOD = {
    lastHour: 'last_hour',
    today: 'today',
    yesterday: 'yesterday',
    threeDays: '3days'
}

export function setPeriod(period) {
    return async function (dispatch) {
        dispatch(_set({
            loading: true,
            loaded: false,
            period: period
        }));

        const response = await DashboardSDK.getMetrics(period);
        if (response.type === success) {
            dispatch(_set({
                loading: false,
                loaded: true,
                loadingFailure: false,
                ...response.data
            }));
        }

        dispatch(_set({
            loading: false,
            loaded: false,
            loadingFailure: true
        }));
    }
}

export function _set(payload) {
    return {
        type: SET,
        payload: payload
    };
}
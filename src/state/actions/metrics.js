import DashboardSDK from '../../sdk/web/Dashboard'

export const SET = 'metrics/set'
export const RESET = 'metrics/reset'

export const PERIOD = {
    lastHour: 'lastHour',
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

        const sdk = new DashboardSDK();
        const response = await sdk.getMetrics(period);
        console.log(response);
        if (response.type === 'success') {
            dispatch(reset())
            dispatch(_set({
                loading: false,
                loaded: true,
                loadingFailure: false,
                period: period,
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

export function reset() {
    return {
        type: RESET
    };
}

export function _set(payload) {
    return {
        type: SET,
        payload: payload
    };
}
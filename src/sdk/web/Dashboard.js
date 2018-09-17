import AjaxRequest from '../AjaxRequest'

export default class Dashboard extends AjaxRequest {
    async getMetrics(period) {
        const response = await this.request(
            `api/getMetrics/${period}`
        );

        if (response.status !== 200) {
            throw new Error('Cannot access backend');
        } return response.data;
    }
}
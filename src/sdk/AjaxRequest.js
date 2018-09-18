import axios from 'axios'

export default class AjaxRequest {
    get(url, data = null) {
        return axios({
            method: 'get',
            url: url, 
            data: data ? JSON.stringify(data) : null
        });
    }
}
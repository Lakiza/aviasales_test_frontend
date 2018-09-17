import axios from 'axios'

export default class AjaxRequest {
    request(url, data = null) {
        return axios({
            method: 'post',
            url: url, 
            data: data ? JSON.stringify(data) : null
        });
    }
}
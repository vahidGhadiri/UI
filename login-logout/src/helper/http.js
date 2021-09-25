import axios from "axios"
import {BASE_URL} from "../../environment.env"


class HttpServices {
    constructor() {
        axios.defaults.baseURL = BASE_URL
        axios.defaults.timeout = 10000

        // Do something before request is sent
        axios.interceptors.request.use((config) => {
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        // Do something with response data
        axios.interceptors.response.use((response) => {
            return response
        }, (error) => {
            return Promise.reject(error)
        })
    }

    get(url, config) {
        return axios.get(url, config)
    }

    post(url, data, config) {
        config = config || {headers: {"content-type": "application/json"}}
        return axios.post(url, data, config)
    }

    put(url, data, config) {
        config = config || {headers: {"content-type": "application/json"}}
        return axios.put(url, data, config)
    }

    delete(url, data, config) {
        config = config || {headers: {"content-type": "application/json"}}
        return axios.delete(url, data, config)
    }
}


export default new HttpServices()
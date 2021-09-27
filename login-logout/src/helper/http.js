import axios from "axios"
import {BASE_TIMEOUT, BASE_URL} from "../../development.env"
import {ACCESS_TOKEN} from "../config/variables";

class httpServices {
    constructor() {
        axios.defaults.baseURL = BASE_URL
        axios.defaults.timeout = BASE_TIMEOUT

        axios.interceptors.request.use(
            (config) => {
                const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN))
                if (token) config.headers["Authorization"] = `bearer ${token}`
                return config
            }, (error) => Promise.reject(error))
    }

    get(url, config) {
        return axios.get(url, config)
    }

    post(url, config, data) {
        config = config || {headers: {'content-type': 'application/json'}}
        return axios.post(url, config, data)
    }

    put(url, config, data) {
        config = config || {headers: {'content-type': 'application/json'}}
        return axios.put(url, config, data)
    }

    delete(url, config, data) {
        config = config || {headers: {'content-type': 'application/json'}}
        return axios.delete(url, config, data)
    }
}

export default new httpServices


import axios from "axios"
import {BASE_URL} from "../../environment.env"


class HttpServices {
    constructor() {
        axios.defaults.baseURL = BASE_URL
        axios.defaults.timeout = 10000

        axios.interceptors.request.use((config) => {
            return config
        })


        axios.interceptors.response.use((config) => {
            return config
        })
    }
}

export default new HttpServices()
import axios, { AxiosResponse } from 'axios'
import { appConfig } from '../utils/constants'

const apiHeaders = {
    baseURL: `${appConfig.apiUrl}/api`,
    headers: {
        Accept: 'application/json',
        Authorization: '',
    },
}

function apiConfig() {
    apiHeaders.headers['Authorization'] = `Bearer `
    return apiHeaders
}

const responseBody = (response: AxiosResponse) => response.data

export const apiRequests = {
    get: (url: string) => axios.get(url, apiConfig()).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body, apiConfig()).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body, apiConfig()).then(responseBody),
    del: (url: string, body: object) => axios.delete(apiConfig().baseURL + url, 
    { headers: apiConfig().headers, data: body,}).then(responseBody),
}

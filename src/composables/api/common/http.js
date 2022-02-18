import axios from "axios"

const _API_TOKEN_HEADER_NAME = 'Atomy-Api-Tokne'
const _USER_TOKEN_HEADER_NAME = 'Atomy-User-Token'

const atomyApi = axios.create({
    baseURL: 'https://test-dev.atomy.com/apiglobal',
    headers: {
        _API_TOKEN_HEADER_NAME: '4bb8a5af2fe14870bfd362b60483ec6a'
    }
})

export default atomyApi


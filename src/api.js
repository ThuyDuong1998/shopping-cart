import axios from 'axios'

export const api = {
    listProduct: {
        method: 'GET',
        url:'/products/',
        params: {
            id: ''
        }
    },
    getProduct: {
        method: 'PUT',
        url: '/products/', 
    }
}
const http = axios.create({
    baseURL: `https://fakestoreapi.com/`,
    headers: {
        'Content-type': 'application/json'
    }
})

export default http
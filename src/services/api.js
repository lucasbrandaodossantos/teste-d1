import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-d1-test.herokuapp.com/api/journey'
})

export default api;
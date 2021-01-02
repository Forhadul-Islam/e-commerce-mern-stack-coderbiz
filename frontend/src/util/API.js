import axios from 'axios';

export default axios.create({
    baseURL: 'https://coderbiz.herokuapp.com/api/v1',
    withCredentials: true,
    credentials: 'includes'
});
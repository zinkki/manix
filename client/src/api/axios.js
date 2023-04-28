import Axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL;

const axios = Axios.create({
    baseUrl: BASE_URL,
});

export default axios;
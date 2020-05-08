import axios from 'axios'

export default axios.create({
    baseURL: 'https://localhost:8080/'
    // baseURL: 'http://3a536176.ngrok.io/'
});
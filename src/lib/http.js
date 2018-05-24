import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost',
  timeout: 5000
})

export default http
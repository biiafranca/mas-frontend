import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ?'https://bianca-mas-backend-senai.herokuapp.com'
    :'http://localhost:3333',
});

export default api;
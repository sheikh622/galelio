import axioss from 'axios';
// export const API_URL = 'http://localhost:3000/api/v1/';

export const API_URL = 'http://192.168.1.190:3000/api/v1/';
// export const API_URL = 'http://galileoargon.tk/api/v1/';
// export const API_URL = 'http://192.168.1.191:3000/api/v1/';


const axios = axioss.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

axios.interceptors.response.use(
    function (response) {
        // Do something with response data

        return response;
    }
    // , function (error, response) {
    //   if(error.response.status === 401){
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('role');
    //     window.location = '/'
    //     }
    // }
);

export default axios;

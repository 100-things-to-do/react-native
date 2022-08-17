import axios from 'axios';

let EXPRESS_URL = 'http://localhost:3000'
export default{
    login: async (deviceId) => {
        console.log(deviceId);
        return axios.post(EXPRESS_URL + `/users/${deviceId}`);
    },
}
